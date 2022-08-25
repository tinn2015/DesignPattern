/**
 * 合成复用原则是说：
 *  尽量用组合/聚合的方式实现功能， 其次才用继承
 */

/**
 * 场景：
 *  不同类型的汽车： 新能源、汽油
 *  不同颜色： 白色、黑色
 */

class Car {
    type: string
    color: string
    move(): void {
        console.log(this.color + this.type + 'move')
    }
}

// 汽油车
class qiyouCar extends Car {
    type: 'qiyou'
    color: string
    constructor (color: string) {
        super()
        this.color = color
    }
}

// 电动车
class diandong extends Car {
    type: 'diandong'
    color: string
    constructor (color: string) {
        super()
        this.color = color
    }
}

new qiyouCar('white').move() // 白色汽油车
new qiyouCar('black').move() // 黑色汽油车

new diandong('white').move() // 黑色电动车
new diandong('black').move() // 黑色电动车



