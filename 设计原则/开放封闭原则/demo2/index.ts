/**
 * 场景2：
 * 	银行的存款， 取款业务
 * 设计：
 * 	用户的行为抽象为一个对象， 这里分为存款和取款
 * 	柜台业务员抽象为一个对象， 业务员来处理存款或者转账
 */
import {BankStaff} from './sub/bankStaff'
import {DepositMoney, WithDrawMoney} from './sub/bankActions'

// 抽象的银行业务对象
const bankStaff = new BankStaff()

// 存钱
const action = new DepositMoney()
bankStaff.handleProcess(action)

// 取钱
const action2 = new WithDrawMoney()
bankStaff.handleProcess(action2)
