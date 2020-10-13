// 引入fs文件系统
const fs = require("fs");
// 引入path
const path = require("path");
// 拼接路径并将当前文件夹中的01.text解析为绝对路径
const filePath = path.resolve(__dirname, "./01.text");
// 创建一个可写流
// 流式文件写入可以分多次向文件中写入内容，有效避免内存溢出的问题
// fs.createWriteStream(path[,options])
const ws = fs.createWriteStream(filePath);

//分批次写入
ws.write("少年强");
ws.write("则国强");
ws.write("少年富");
ws.write("则国富");

// 写完之后要关闭管道
// ws.close();关闭末尾，可能会丢失数据
ws.end();//关闭开头，常用

// 所有的流对象都用on(once)绑定事件，并触发
// 可写流有open和close事件 监听可写流的开启和关闭
ws.on("open", () => {
    console.log("open");
})
ws.on("close", () => {
    console.log("close");
})