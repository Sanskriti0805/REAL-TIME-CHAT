import { Chat, Store, userId } from "./store/Store";
let globalChatId = 0;

export interface Room{
    roomId: string;
    chats: Chat[]
        
}
export class InMemoryStore implements Store {
    private store: Map<string, Room>;

    constructor() {
        this.store = new Map<string,Room>() 
    }

    initRoom(roomId: string) {
        this.store.set(roomId, {
            roomId,
            chats: []
        });

        
    }
// suppose like why do we need limit here? becuase when we need to limit msgs to 50 then offset will be 0
    getChats(roomId: string, limit: number, offset: number) {
        const room = this.store.get(roomId);
        if (!room) {
        return []
        }
        return room.chats.reverse().slice(0, offset).slice(-1 * limit);
    }

    AddChat(userId: userId, name: string, roomId: string, message: string) {
        if (!this.store.get(roomId)) {
            this.initRoom(roomId);
        }
        const room = this.store.get(roomId);
        if (!room) {
            return;
        }
        const chat = {
            id: (globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes: []
        }
        room.chats.push(chat)
        return chat;
    }

    upvote(userId: userId, roomId: string, chatId: string) {
        const room = this.store.get(roomId);
        if (!room) {
            return 
        }
        // Todo: Make this faster
        const chat = room.chats.find(({id}) => id == chatId);

        if (chat) {
            if (chat.upvotes.find(x => x === userId)) {
                return chat;
            }
            chat.upvotes.push(userId);
        }
        return chat;
    }

}