import { BankActions } from "./bankActions";

export class BankStaff {
    handleProcess (bankActions: BankActions) {
        bankActions.bankProcess()
    }
}