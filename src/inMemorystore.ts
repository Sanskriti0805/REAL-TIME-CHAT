import { Store } from "./store/store";
export interface Room{
    roomId: string;
    Chats: Chat[]
        
}
export class inMemoryStore implements Store {
    private store: Map<string, Room>;

    constructor() {
        this.store = new Map<string,Room>() 
    }
    initRoom() {

        
    }
    getChats(room: string, limit: number, offset: number) {

    }

    addChat(room: string, limit: number, offset: number){

    }

    upvote(room: string, chatId: string) {

    }
}