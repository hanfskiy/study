// crypto模块提供了加密功能，使用require访问该模块
const crypto = require("crypto");

// 假设拿到了需要加密的信息
let secret = "yyqx1128";

// 可以给明文加东西
secret += "2000";

// 使用createHmac方法可以生成一个HMAC对象 参数是加密方式 和明文
const hash = crypto.createHmac("MD5",secret);

// 通过digest可以把HMAC对象转换为16进制显示或保存
const mySecret = hash.digest("hex");

// 可以对密文再次加密，然后再存到数据库，会更安全
const hash2 = crypto.createHmac("sha512",mySecret);
const mySecret2 = hash2.digest("hex");

console.log(mySecret);
console.log(mySecret2);