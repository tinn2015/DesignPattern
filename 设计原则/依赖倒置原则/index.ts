/**
 * 依赖倒置原则是说：
 *  高层模块不应该直接调用底层模块，而是要双方都依赖抽象
 *  抽象不应该依赖细节， 细节应该依赖抽象
 * 
 * 理解：
 *  实际上是为了降低类之间的耦合性， 降低因需求变更修改程序带来的风险
 */

/**
 * 场景：
 *  小明爱学习， 既学习了python, java
 *  先需求， 小明又要学习js
 */

// ============ 常规的实现 ============

// 具体的实现， 这个相当于底层模块
class XiaoMing {
    studyJava () {
        console.log('study java')
    }
    studyPython () {
        console.log('study python')
    }
}


// 调用者， 这个相当于高层模块
function main () {
    const xiaoming = new XiaoMing()
    xiaoming.studyJava()
    xiaoming.studyPython()
}

/**
 * 存在的问题：
 *  1. 高层模块直接依赖了底层模块
 *  2. 添加新需求， 那么高层到底层都要修改， 修改的地方越多， 带来的风险就越大
 */


// ============ 按照依赖倒置原则设计 ============

// 实现一个抽象类
// 底层模块依赖高层模块定义好的接口
abstract class Courses {
    study (): void {}
}

class StudyJava implements Courses {
    study () {
        console.log('study java')
    }
}
class StudyPython implements Courses {
    study () {
        console.log('study python')
    }
}

// 这就是一个抽象， 依赖抽象的study 方法
//高层模块依赖底层模块的抽象而不是直接依赖底层模块的实现
class XiaoMing2 {
    study (course: Courses) {
        course.study()
    }
}

function main2 () {
    const xiaoming2 = new XiaoMing2()
    xiaoming2.study(new StudyJava())
    xiaoming2.study(new StudyPython())
}

/**
 * 总结：
 *  此时添加新课程只需要添加一个具体的实现类， 而不用取修改高层模块（XiaoMing2）
 *  这段代码跟开放封闭原则的实现是一样的， 因为他们的最终目的都是抽象解耦， 降低修改带来的风险
 */

/**
 * 为什么叫依赖倒置
 * 
 *  这里的倒置是相对于上面的常规实现来说的
 */