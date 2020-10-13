//使用某个数据库（如果数据库不存在，则自动创建）
use atguigu

//查看所有的数据库
show databases

//查看当前所在的数据库
db

//给students集合插入1条数据（如果这个集合不存在，则自动创建当前的集合）
db.students.insert({name:"赵二",age:18,sex:"男"})

//给students集合插入多条数据
db.students.insert([{name:"李华",age:22,sex:"男"},{name:"李里",age:22,sex:"女"}])

//查找某个数据库的某个集合的所有数据 不加任何参数
db.students.find()

//查找年龄是18岁的人的数据
db.students.find({age:18})

//查找id是xxx的人的数据
db.students.find({_id:ObjectId("5f856bbc671cfb50693838b3")})

//操作符 $gt(>) $gte(>=) $lt(<) $lte(<=) $ne(!=)
//查找年龄大于20岁的人
db.students.find({age:{$gt:20}})

//查找年龄小于等于20岁的人
db.students.find({age:{$lte:20}})

//查找性别不是男的
db.students.find({sex:{$ne:"男"}})

//查找年龄大于18或者是男性的人
db.students.find({$or:[{age:{$gt:18}},{sex:"男"}]})

//查找年龄是18岁和20岁的 方法1
db.students.find({$or:[{age:18},{age:20}]})

//查找年龄是18岁和20岁的 方法2
db.students.find({age:{$in:[18,20]}})

//查找姓名以二结尾的
db.students.find({name:/二$/})

//查找姓名以李开头的
db.students.find({name:/^李/})

//$where查找数据  查找年龄大于10  小于22的 人
db.students.find({$where:function(){
    //this：指向当前进来的数据（数据会一条条进来）
	return this.age>10 && this.age<22;
}})