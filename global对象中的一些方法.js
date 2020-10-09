// 延时调用，异步代码
setTimeout(() => {
    console.log("宏任务，延时调用")
}, 1000)

// setImmediate：立即执行函数，异步代码，当同步代码执行完毕后立即调用
setImmediate(() => {
    console.log("宏任务");
})

// 立即执行函数，异步代码，是语义化的微任务设置
queueMicrotask(() => {
    console.log("微任务");
})

// 同步代码
console.log("global");

// 立即执行函数，是一个微任务。但是优先一切异步代码执行，当同步代码执行完成后直接执行process.nextTick
process.nextTick(()=>{
    console.log("微任务优先")
})