
interface User {
    name: string;
    id: string;
}

interface Room {
    users: User[]
}

export class UserManager {
    private users : Map<string, Room>
    constructor() {
        this.users = new Map<string, Room>
    }

    addUser(name: string, userid: string, roomId: string, socket: WebSocket) {
        if (!this.users.get(roomId)) {
            this.users.set(roomId,{
                users: []
            })
              
        }
        this.users.get(roomId)?.users.push({
            id: userid,
            name,
        })

    }
    removeUser(roomId: string, userId: string) {

    }
}