// 引入events模块
const EventEmitter = require("events");

// 定义一个新的类 继承引入的EventEmitter类
class MyEmitter extends EventEmitter {};

// 因为模块返回的是一个类，所有要实例化以后才能使用
const myEmitter = new MyEmitter();

// 实例化对象有一个方法on 可以自定义一个或多个事件
/* myEmitter.on('hello',()=>{
    console.log("hello world");
}) */

// 某个事件只执行一次
myEmitter.once("hello", () => {
    console.log("hello world");
})

// 实例化对象有一个emit方法，可以触发自定义的某个事件
myEmitter.emit('hello');

// 本质是同步执行的，当里面包含异步函数时，就会切换到异步模式
setTimeout(() => {
    myEmitter.emit("hello");
}, 1000);