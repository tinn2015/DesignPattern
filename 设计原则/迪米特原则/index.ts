/**
 * 迪米特原则：
 *  高层模块对底层模块的感知越少越好
 */

/**
 * 场景：
 *  人关闭电脑
 */

class Computer {
  // 保存当前任务
  saveCurrentTask () {}

  // 关闭屏幕
  closeScreen () {}

  // 关闭电源
  shutDown () {}
}

class Person {
  computer: Computer
  constructor (computer: Computer) {
    this.computer = computer
  }
  closeComputer () {
    this.computer.saveCurrentTask()
    this.computer.closeScreen()
    this.computer.shutDown()
  }
}
/**
 * 问题：
 *  现在关机需要三步， 试想一下要是关机需要30步， 那么与Person类的耦合就会越来越多
 */

// ========== 按照迪米特原则 ===========
class Computer2 {
  // 保存当前任务
  private saveCurrentTask () {}

  // 关闭屏幕
  private closeScreen () {}

  // 关闭电源
  private shutDown () {}

  closeComputer () {
    this.saveCurrentTask()
    this.closeScreen()
    this.shutDown()
  }
}

class Person2 {
  computer: Computer2
  constructor (computer: Computer2) {
    this.computer = computer
  }
  closeComputer () {
    this.computer.closeComputer
  }
}