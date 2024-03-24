import { Chat, Store } from "./store/Store";
export interface Room{
    roomId: string;
    chats: Chat[]
        
}
export class inMemoryStore implements Store {
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

    addChat(userId: userId, roomId: string, limit: number, offset: number){
        const room = this.store.get(roomId);
        if (!room) {
        return []
        }
        return room.chats.push {
            userId;
            Name: string;
            message: string; 
            upvotes: userId[];
        }
    }

    upvote(room: string, chatId: string) {

    }
}