// 引入fs
const fs = require("fs");

// 引入path
const path = require("path");

// 获取读取文件路径
const readFilePath = "C:\\Users\\联想\\Desktop\\QD\\0721\\day25-git\\video\\01.复习.mp4";

//拼接写入路径
const writeFilePath = path.resolve(__dirname, "./a.mp4");

// 创建一个可读流
const rs = fs.createReadStream(readFilePath);

// 创建一个可写流
const ws = fs.createWriteStream(writeFilePath);

rs.on("data", (chunk) => {
    ws.write(chunk); //写入chunk
})

rs.on("end", () => {
    console.log("关闭了")
});