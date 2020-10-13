// 引入fs文件系统
const fs = require("fs");

// 引入path
const path = require("path");

//获取路径，加\转义
const filePath = "C:\\Users\\联想\\Desktop\\QD\\0721\\day25-git\\video\\01.复习.mp4";

// 创建一个可读流 fs.createReadStream
const rs = fs.createReadStream(filePath);

// rs的data事件就是用来消费可读流的，每次读取的事件
// chunk就是每次读取的64kb的数据
rs.on("data", (chunk) => {
    console.log(chunk.length);//每次读取的数据字节
    // console.log(chunk.toString());读取的内容
})

// end事件是读取完毕以后自动关闭时触发
rs.on("end", () => {
    console.log("关闭了");
})