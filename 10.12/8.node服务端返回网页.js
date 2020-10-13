// 引入http
const http = require("http");
// 引入fs
const fs = require("fs");
// 引入path
const path = require("path");
// 拼接读取路径
const filePath = path.resolve(__dirname, "./liuwer/index.html");
// 创建可读流
const rs = fs.createReadStream(filePath);

/* 
设置一个空字符串
let str = "";
通过chunk写入
rs.on("data",(chunk)=>{
    str += chunk;
})
 */

//  创建一个服务
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    rs.pipe(response);
    // response.end(str);
})

// 启动服务
const port = 1128;
const host = "192.168.20.80";
server.listen(port, host, (err) => {
    if (err) {
        console.log("服务器启动失败:" + err);
        return;
    }
    console.log(`服务器启动成功：请访问 http://${host}:${port}`);
})