/**
 * 接口分离原则：
 *  旨在设计接口的时候更少、更小、更灵活，杜绝大而全
 *  目的也是避免代码臃肿、耦合、修改影响面大
 */

/**
 * 场景：
 *  我们的银行服务有多种功能，取款、存款、转账、基金买入、基金卖出
 *  按需有多种atm机：
 *      A 存款和取款
 *      B 存款和取款和转账
 *      C 买基金、卖基金、转账
 */

// ========= 常规实现 =========

// 实现类
class BankProcess {
    save () {
        console.log('存款')
    }
    withdraw () {
        console.log('取款')
    }
    transfer () {
        console.log('转账')
    }
}

class FundProcess {
    buy () {
        console.log('买基金')
    }
    sell () {
        console.log('卖基金')
    }
}

// 业务
class AtmA {
    bankProcess: BankProcess
    fundProcess: FundProcess
    constructor () {
        this.bankProcess = new BankProcess()
        this.fundProcess = new FundProcess()
    }
    deposit () {
        this.bankProcess.save()
    }
    withdraw () {
        this.bankProcess.withdraw()
    }
}

class AtmB {
    bankProcess: BankProcess
    fundProcess: FundProcess
    constructor () {
        this.bankProcess = new BankProcess()
        this.fundProcess = new FundProcess()
    }
    deposit () {
        this.bankProcess.save()
    }
    withdraw () {
        this.bankProcess.withdraw()
    }
    transfer () {
        this.bankProcess.transfer()
    }
}

class AtmC {
    bankProcess: BankProcess
    fundProcess: FundProcess
    constructor () {
        this.bankProcess = new BankProcess()
        this.fundProcess = new FundProcess()
    }
    buy () {
        this.fundProcess.buy()
    }
    sell () {
        this.fundProcess.sell()
    }
    transfer () {
        this.bankProcess.transfer()
    }
}

// =============== 按照接口分离设计 ==============

/**
 * 1. 以上的设计首先不满足开闭原则， 开闭原则要求对新增开放对修改封闭。 
 *    以上设计添加需求必须修改所有的业务类和实现类
 * 2. 不满足接口分离原则， 试想一下我们要是有很多业务场景（更多类型的Atm机），很多业务功能（商业贷款、公积金贷款、信用卡等）
 *    我们不应该都在一个类种实现，首先在高层模块抽象接口， 然后底层模块再根据高层模块的接口去实现
 * 3. 按照需求存款取款应该属于一个接口，转账一个接口， 基金一个接口
 * 4. 高层模块对变化进行抽象， 底层模块对高层模块的抽象实现接口
 */
import {Business} from './typing'
import {saveMoney, withdrawMoney, transferMoney} from './sub/bankProcess'
import {BuyFund, SellFund, Transfer} from './sub/fundProcess'

interface AtmOptions {
    [key: string]: Business
}

// 高层模块抽象，底层模块实现接口
class Atm {
    // bussiness: AtmOptions
    // constructor (options: AtmOptions) {
    //     this.bussiness = options
    // }
    process (processHandle: Business) {
        processHandle.action()
    }
}

function main () {
    // 普通Atm
    const _saveMoney = new saveMoney()
    const _withdrawMoney = new withdrawMoney()
    const _transferMoney = new transferMoney()
    const atm = new Atm()
    atm.process(_saveMoney) // 存钱
    atm.process(_withdrawMoney) // 取钱
    atm.process(_transferMoney) // 转账

    // 基金Atm
    const buyFund = new BuyFund()
    const sellFund = new SellFund()
    const transfer = new Transfer()
    atm.process(buyFund)
}




/**
 * 总结：
 * 需要注意的是接口也不是越小就越好，太零碎也会带来成本。
 * 按需实现适度合理的接口才是最佳实践
 * 
 * 如何抽象：
 *  把变化的东西进行抽象
 */