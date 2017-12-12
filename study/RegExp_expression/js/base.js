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


var pattern = new RegExp('Box','i');
var str = 'this is box!';
console.info(typeof pattern.exec(str));