/**
 * 开放封闭原则的核心思想是： 对拓展开放，对修改封闭。
 * 也就是说新增加的需求用新添加代码来实现， 而不是去修改原来的代码
 * 
 */

/**
 * mock 一个场景：
 *  酒店房价： 黄金会员 八折， 白银会员 九折 。。。
 *  新增需求： 添加一个白金会员 7折
 */

// 不好的做法
// 通过if else 或者 switch case 进行会员判断
// 如下 每添加一个新的会员类型或者每个会员类型提供的服务也不同， 这是都要修改HotelService类
// 一旦修改这个类就会对其他会员造成影响， 这样随着代码量的增加， 或者业务的增加代码就很难看
enum UserLevels {
	gold = "Gold",
	silver = "silver"
}
interface UserLevel {
	level: UserLevels,
}

class HotelService {
	getRoomPrice (user: UserLevel) {
		let price = 100
		switch (user.level) {
			case UserLevels.gold:
				price * 0.8
			case UserLevels.silver:
				price * 0.9
		}
		return price
	}
}

// ==================按照开闭原则设计=================

import {Room, User} from './sub/user'
import {gold} from './sub/gold'

/**
 * 
 * 将HotelService2类抽象一下， 每种会员都有一个getRoomPrice方法
 * 这样新增一个会员， 实际上只要新增加一个user类
 * 
 */
class HotelService2 {
	getRoomPrice (user: User, room: Room) {
		user.getRoomPrice(room)
	}
}

const hotelService = new HotelService2()
// 不是会员
const user = new User()
const price = hotelService.getRoomPrice(user, {price: 100})

// 黄金会员
const user1 = new gold()
const price1 = hotelService.getRoomPrice(user1, {price: 100})

// 总结
// 上述实例还是需要判断不同的user,才能通过hotelService.getRoomPrice获取优惠价格， 可以通过策略模式或者工厂模式改造
// 开放封闭原则是让我们可以做到尽量不动已有的逻辑， 通过添加新代码来满足需求
// 与单一职责有相似之处都是面向接口、抽象出一个类来组合具体的实现， 而不是直接把具体实现写在当前类中
