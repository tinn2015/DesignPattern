/**
 * 接口分离原则：
 *  1. 不要在一个接口中实现类不需要的方法
 *  2. 旨在解耦
 */

// =========常规实现============

abstract class ProcessOptions {
  // 查分
  queryScore (): void {}

  // 打印成绩
  printScore (): void {}

  // 分数录入
  writeInScore ():void {}

  // 计算总成绩
  sumScore (): void {}

  // 删除
  deleteScore (): void {}
}

// student 只有查分和打印成绩的需求
class Student implements ProcessOptions {
  queryScore(): void {
    
  }
  printScore(): void {
    
  }
}

class Teacher implements ProcessOptions {

}

/**
 * 问题：
 *  1. student只需要两个接口确需要实现所有功能
*/

// ================= 按照接口分离原则设计 ==========
abstract class StudentOptions {
   // 查分
   queryScore (): void {}

   // 打印成绩
   printScore (): void {}
}

abstract class TeacherOptions {
  // 查分
  queryScore (): void {}

  // 打印成绩
  printScore (): void {}

  // 分数录入
  writeInScore ():void {}

  // 计算总成绩
  sumScore (): void {}

  // 删除
  deleteScore (): void {}
}

// 也就是按需把一个接口分为多个
