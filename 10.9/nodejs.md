###1.nodejs运行
使用node 文件名 命令行窗口运行
一定要到当前要运行的文件所在目录
使用nodemon 文件名 可以实时监听文件改动

###2.global
global为nodejs的顶层对象（在nodejs环境运行）
nodejs中没有window
global可以省略

###3.global对象中的一些方法
console.log：同步代码
setTimeout：延时调用，异步代码
setInterval：间歇调用，异步代码
setImmediate:立即执行函数，异步代码，当同步代码执行完毕后立即调用
queueMicrotask：立即执行函数，异步代码，是语义化的微任务设置
process.nextTick:立即执行函数，是一个微任务，但是优先一切异步代码执行

###4.nodejs的事件轮询
    1.nodejs使用了第三方库libuv，nodejs会把一些异步操作（I/O、文件的读写）交给libuv处理。nodejs的主线程没有必要等待，可以继续处理其他事件。
    2.libuv会开启多个线程去执行这些异步操作，当异步代码操作完毕以后，会把回调函数放到回调队列中，主线程在适当的时候会去轮询回调队列
    3.nodejs把异步代码分为了两大类，分别是微任务和宏任务。微任务优先宏任务执行
    4.宏任务也是根据异步代码不同，而产生多种回调队列，nodejs会依次轮询这几个回调队列：timers、pedding callback、idle、poll、check、close

###5.宏任务的轮询顺序
    1.timers阶段:处理setTimeout和setInterval的回调函数
    2.pedding阶段：处理系统级别操作的回调函数
    3.idle阶段：处理nodejs内部的回调函数
    4.poll阶段：处理I/O或者网络请求等异步操作的回调函数
        -当poll阶段不为空的时候，那么执行完回调函数，就继续执行下个阶段check了
        -当poll阶段为空的时候，会一直等待poll中有其他的回调函数
            -但是当timers阶段的计时器到期了，或者check阶段有setImmediate等待执行的时候，会直接跳入check阶段
    5.check阶段：setImmediate的回调函数
    6.close阶段：执行一些关闭的函数

###6.微任务和宏任务
    1.nodejs把所有的异步操作代码分为了微任务代码和宏任务代码
    2.nodejs会优先执行微任务代码然后才执行宏任务代码
    3.微任务：process.nextTick、promise的then\catch\finally、queueMicrotask
    4.process.nextTick一定是最先执行，其他微任务根据书写代码依次执行
    5.在宏任务每次执行下一个阶段之前，都会去检查微任务队列中是否有微任务需要执行，然后才执行下一个阶段
    6.在执行某个微任务的里边又设置了一个微任务，如果这个微任务是process.nextTick，则会把这个process.nextTick放入一个新的微任务队列，等当前微任务队列执行完成后，才会去执行这个新队列