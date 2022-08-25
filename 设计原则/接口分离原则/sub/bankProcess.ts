import {BankProcess1, BankProcess2} from './handles/bank'
import {Business} from '../typing'

export class saveMoney implements Business {
    action () {
        new BankProcess1().save()
    }
}

export class withdrawMoney implements Business {
    action () {
        new BankProcess1().withdraw()
    }
}

export class transferMoney implements Business {
    action () {
        new BankProcess2().transfer()
    }
}