import {BankProcess2} from './handles/bank'
import {FundProcess} from './handles/fund'
import {Business} from '../typing'

export class BuyFund implements Business {
    action () {
        new FundProcess().buy()
    }
}

export class SellFund implements Business {
    action () {
        new FundProcess().sell()
    }
}

export class Transfer implements Business {
    action () {
        new BankProcess2().transfer()
    }
}