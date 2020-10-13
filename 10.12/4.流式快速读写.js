// 引入fs
const fs = require("fs");

// 引入path
const path = require("path");

// 获取读取文件路径
const readFilePath = "C:\\Users\\联想\\Desktop\\QD\\0721\\day25-git\\video\\01.复习.mp4";

// 拼接路径
const wirteFilePath = path.resolve(__dirname, "./a.mp4");

// 创建可读流
const rs = fs.createReadStream(readFilePath);

// 创建可写流
const ws = fs.createWriteStream(wirteFilePath);

// pipe方法就是管道，可以直接把可读流通过管道写入可写流
rs.pipe(ws);