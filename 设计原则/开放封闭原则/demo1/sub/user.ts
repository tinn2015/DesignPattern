export interface Room {
	price: number
}

export class User {
	getRoomPrice (room: Room) {
		return room.price 
	}
}
