export abstract class BankActions {
    bankProcess: () => void
}

// 以下也可以放在一个子目录

export class DepositMoney implements BankActions {
    bankProcess () {
        console.log('存钱')
    }
}

export class WithDrawMoney implements BankActions {
    bankProcess () {
        console.log('取钱')
    }
}