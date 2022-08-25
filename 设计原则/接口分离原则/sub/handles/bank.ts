export class BankProcess1 {
    save () {
        console.log('存款')
    }
    withdraw () {
        console.log('取款')
    }
}

// 因为转账被多个业务使用， 所以按照接口分离原则没有封装在BankProcess1中， 已达到解耦、灵活复用
export class BankProcess2 {
    transfer () {
        console.log('转账')
    }
}