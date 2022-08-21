// 实现一个抽象类
export abstract class PhoneType {
  doCall (num: number): void {}
  doAnswer (msg: string): void {}
}