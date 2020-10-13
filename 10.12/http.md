###什么是http协议
    协议就是在网络通信中，两台计算机必须遵守的规则或规定
    http协议就是超文本协议，在万维网中，服务器向浏览器传递超文本时必须遵守的协议
    在服务端与客户端互传的信息被称为报文，http协议规定了报文的格式，服务端响应的报文被称为响应式报文，客户端发送的报文被称为请求报文。

###GET请求报文
        报文首行：
            GET http://192.168.20.25:3000/ HTTP/1.1
                - GET：请求方式
                - http://192.168.20.25:3000/  请求的地址和端口号
                - HTTP/1.1  http协议的版本号

        报文头部：
            - 主机地址
            Host: 192.168.20.25:3000

            - 保持长连接
            Connection: keep-alive

            - 缓存（分为协商缓存和强制缓存）
            Cache-Control: max-age=0

            -支持https 
            Upgrade-Insecure-Requests: 1

            - 用户代理
            User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36

            - 可以接收的内容类型
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,* /*;q=0.8,application/signed-exchange;v=b3;q=0.9
            
            - 可以接收的压缩格式
            Accept-Encoding: gzip, deflate, br

            - 可以接收的语言
            Accept-Language: zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7

        请求空行：

        请求体：
            只要是GET请求，请求体没有数据，请求的数据全部拼接在地址上

###GET响应报文
        响应报文首行：
            HTTP/1.1 200 OK
            - HTTP/1.1  协议版本
            - 200       响应状态码
            - OK        响应状态信息

        响应报文头部
            -  响应报文的内容格式及字符编码
            Content-Type: text/html;charset=utf-8

            - 响应的时间
            Date: Mon, 12 Oct 2020 08:31:37 GMT

            - 可以保持长连接
            Connection: keep-alive

            - 长连接的保持时间
            Keep-Alive: timeout=5

            - 响应内容的字节长度
            Content-Length: 24

        响应报文空行：

        响应报文体：
            <h1>湖人总冠军</h1>

###POST请求报文：
        请求报文首行：
            POST http://192.168.20.25:3000/ HTTP/1.1
        
        请求报文头部：
            Host: 192.168.20.25:3000
            Connection: keep-alive
            - 请求数据的字节长度
            Content-Length: 25
            Cache-Control: max-age=0
            Upgrade-Insecure-Requests: 1
            Origin: null
            - 请求的MIME类型 form表单请求
            Content-Type: application/x-www-form-urlencoded
            User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,* /*;q=0.8,application/signed-exchange;v=b3;q=0.9
            Accept-Encoding: gzip, deflate
            Accept-Language: zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7
        请求报文空行：

        请求报文体：
            user=lipeihua&pass=123456


###POST的响应报文
        HTTP/1.1 200 OK
        Content-Type: text/html;charset=utf-8
        Date: Mon, 12 Oct 2020 08:39:32 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
        Content-Length: 24

        <h1>湖人总冠军</h1>
