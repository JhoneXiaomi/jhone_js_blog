JSON 不支持变量、函数或对象实例，他就是一种结构化的数据格式，
虽然与javascript中表示的数据的某些语法相同，但是他并不局限
JavaScript的范畴。

与JavaScript不同的地方如下：
第一点 JSON中是没有声明变量的概念。
第二点 其次JSON 数据的末尾没有分号
第二点 JSON中属性是必须加上双引号的，这是JSON必须的。

简单的SON语法

{

"name":"jhone",

"age":45,

"school":{
    "name":"qinghuaUniversity",
    "location":"beijing"
    }

 }

JSON 数组
[
    {
        "name": "jhone",
        "age": 23
    },
    {
        "name": "jhonexiaomei",
        "age": 45
    },
    {
        "name": "xiaohua",
        "score": [
            34,
            23,
            23
        ]
    }
]
# 解析与序列化

# JSON对象

JSON 对象有两个方法：stringify()和parse().可以理解为这两个
方法分别用于把JavaScript对象序列化为JSON字符串以及将JSON字
符串解析为原生的JavaScript值。
// 序列化
JSON.stringify()

// 解析
JSON.parse()