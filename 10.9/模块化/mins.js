function mins(a,b){
    return a-b;
}

// exports对象指向的其实是moudle.exports对象
exports.mins = mins;
// 不可以直接把对象赋值给exports，因为exports本身指向的是module.exports对象，如果直接赋值的话，就把exports的指向修改了。但是模块化只能暴露moudule.exports的对象
// exports = mins;
