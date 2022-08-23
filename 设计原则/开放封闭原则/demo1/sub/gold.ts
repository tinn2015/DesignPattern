import {Room, User} from './user'

export class gold extends User {
    getRoomPrice(room: Room): number {
        return room.price * 0.8
    }
}