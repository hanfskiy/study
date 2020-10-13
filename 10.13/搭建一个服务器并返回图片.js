//引入http path fs
const http = require("http");
const path = require("path")
const fs = require("fs")

//搭建服务
const server = http.createServer((request, response) => {
    //拼接路径，写在服务里面，每次刷新都可以重新获取
    const rs = path.resolve(__dirname,"./u=4023598449,1271269162&fm=26&gp=0.jpg");
    // 创建可读流
    const ws = fs.createReadStream(rs);
    // 在返回响应前，需要设置响应头中的数据格式
    response.setHeader("Content-Type","image/jpeg;charset=utf-8");
    // 流式写入，返回响应
    ws.pipe(response);
})

// 启动服务
const port = 1128;
const host ="192.168.20.80";
server.listen(port,host,(err)=>{
    if(err){
        console.log("服务器启动失败:" + err);
        return;
    }
    console.log(`服务器启动成功 请访问 http://${host}:${port}`);
})