/**
 * describe
 * Create by
 * Create on
 */


// 匿名函数，立即执行函数
/**
 *
 * 匿名函数（没有实际名字的函数）
 *
 * 参考博客：https://my.oschina.net/u/2331760/blog/468672?p={{currentPage+1}}
 */
(function () {

    window.sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s=ua.match(/mise([\d]+)/))?sys.ie = s[1]:
        (s=ua.match(/firefox\/([\d.]+)/))?sys.firefox = s[1]:
            (s=ua.match(/chrome\/([\d.]+)/))?sys.chrome = s[1]:
                (s=ua.match(/opra.*version\/([\d.]+)/))?sys.opra = s[1]:
                    (s=ua.match(/version\/([\d.]+).*satari/))?sys.safari = s[1]:0;

})();

console.info(sys.chrome);

function abc() {
    console.info("abc");
}

console.info((abc).constructor == (function abc() {}).constructor);


// 测试正则,不区分大小写
/*
var pattern = new RegExp('Box','i');
var str = 'box';
console.info(pattern.test(str));*/

// 测试正则,区分大小写
/*
var pattern = new RegExp('Box');
var str = 'box';
console.info(pattern.test(str));*/

/*
console.info(/^Box$/i.test('box'));*/

/*
var pattern = new RegExp('Box','i');
var str = 'this is box!';
console.info(typeof pattern.exec(str));*/


/**
 *
 *
 * string  对象中的正则表达式方法*/

// 使用match方法获取匹配的数组
/*
var pattern = /box/ig; //全局搜索
var str = 'this is a Box!that is a BOx too!';
console.info(str.match(pattern));
console.info(str.match(pattern).length);*/

/**
 *
 * search 查找到即返回，也就是说无需要g全局
 * 使用search 来查找匹配的数据*/
/*
var pattern = /box/ig;
var str = 'this is box,that is a box too!';
console.info(str.search(pattern));*/

// 使用repleace 替换匹配到的数据
/*
var pattern = / /ig;
var str = 'this is a box,that is a box too';
console.info(str.replace(pattern,'_'));*/


// 使用split 拆分字符串数组

/*
var pattern = /box/ig;
var str = 'this is a box,that is box too';
console.info(str.split(pattern));*/

/*
var pattern = /box/;
var str = 'this is a box';
console.info(str.match(pattern));*/

// '.'匹配除了换行符外的任意字符
/*
var pattern = /g.ogle/;
var str = 'google';
console.info(pattern.test(str));*/

// '*'表示匹配任意个字符,0个以上
/*
var pattern = /g.*gle/;
var str = 'google';
console.info(pattern.test(str));*/

// '+'表示匹配任意个字符,1个以上
/*
var pattern = /go+gle/;
var str = 'google';
console.info(pattern.test(str));*/

// '{2,4}' 表示出现2到4次，包含2和4
/*
var pattern = /go{2,4}gle/;
var str = 'google';
console.info(pattern.test(str));*/

// '[a-z]' 表示小写字母a 到 z
/*
var pattern = /[a-z]oogle/;
var str = 'google';
console.info(pattern.test(str))*/


// 从头开始匹配
/*
var pattern = /^[0-9]oogle/;
var str = '6oogle';
console.info(pattern.test(str));*/

/**
 * '\d' 数字匹配
 * '\D' 非数字匹配
 * '\W' 非字母数字下划线
 * '\w' 数字字母及下划线*/

var pattern = /go?gle/;
var str = 'google';
console.info(pattern.test(str));