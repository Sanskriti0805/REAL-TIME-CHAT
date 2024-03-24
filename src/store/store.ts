type userId = string;
export interface Chat {
    userId: userId;
    Name: string;
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

    addChat(room: string, limit: number, offset: number){

    }

    upvote(room: string, chatId: string) {

    }
}