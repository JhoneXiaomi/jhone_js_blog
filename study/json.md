JSON 不支持变量、函数或对象实例，他就是一种结构化的数据格式，
虽然与javascript中表示的数据的某些语法相同，但是他并不局限
JavaScript的范畴。

与JavaScript不同的地方如下：
第一点 JSON中是没有声明变量的概念。
第二点 其次JSON 数据的末尾没有分号
第二点 JSON中属性是必须加上双引号的，这是JSON必须的。

{

"name":"jhone",

"age":45,

"school":{
    "name":"qinghuaUniversity",
    "location":"beijing"
    }

 }

# 解析与序列化

// 序列化
JSON.stringify()

// 解析
JSON.parse()