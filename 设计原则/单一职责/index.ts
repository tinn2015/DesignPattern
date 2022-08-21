/**
 *  通常的写法是在一个类中， 封装这个类所需要实现的所有属性方法。
 *  但是这是不符合 单一原则的， 因为修改一个逻辑会影响到其他逻辑，
 *  符合单一原则的设计是： 只有新增产品功能才需要修改这个类
 */

import {PhoneType} from './typing'
import {call} from './functions/call'
import {answer} from './functions/answer'

/**
 * 当逻辑修改的时候只需要改对应的实现方法， 而无需直接改Phone类。
 * 只有需要添加新功能比如sendMessage， 才需要修改这个类
 */
export class Phone implements PhoneType {
  doCall (num: number) {
    call(num)
  }
  doAnswer(msg: string): void {
    answer(msg)
  }
}