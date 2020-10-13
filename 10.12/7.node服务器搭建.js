// http既能搭建服务器，也能搭建客户端
// 服务器：接收请求，处理请求，返回响应
// 客户端：发送请求，接收响应
// 要使用http服务器和客户端，必须引入http
// 引入http
const http = require("http");

// 创建一个服务
// createServer的回调函数的形参分别是request，response，代表请求和响应
const server = http.createServer((request, response) => {
    // 在返回响应前，需要设置响应头中的数据格式
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    
    // 返回响应
    response.end("<h1>易烊千玺</h1>");

})

// 启动服务 使用listen方法，三个参数：端口号，主机地址/域名地址，回调函数（错诶优先机制）
// 本地的主机地址：localhost/127.0.0.1 或者是局域网地址 或者是服务器地址
const port = 1128;//端口号
const host = "192.168.20.80";//局域网地址
server.listen(port, host, (err) => {
    if (err) {
        // 错误优先机制，如果错误就打印错误信息，并返回出去
        console.log("服务器启动失败：" + err);
        return;
    }
    console.log(`服务器启动成功：请访问 http://${host}:${port}`)
})
