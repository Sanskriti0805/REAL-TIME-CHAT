export type userId = string;
export interface Chat {
    id: string;
    userId: userId;
    name: string;
    message: string; 
    upvotes: userId[]; //who has upvoted what
}
export abstract class Store {
    constructor() {

    }
    initRoom(roomId: string) {

        
    }
    getChats(room: string, limit: number, offset: number) {

    }

    AddChat(userId: userId, name: String, room: string, message: string){

    }

    upvote(userId: userId, room: string, chatId: string) {

    }
}