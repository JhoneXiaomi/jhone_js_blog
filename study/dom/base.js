/**
 * describe dom base resource
 * Create by jhone
 * Create on
 */
'use strict';
// 预加载html 之后执行
window.onload = function () {
    if (document.getElementById) {
        var div_one = window.document.getElementById("div_one");
        console.info(div_one.className + div_one.tagName + div_one.id + div_one.innerHTML);
        // 为什么不生效
        document.getElementById('div_one').style.border = 'red solid 2px';
    }

    if (document.getElementsByName) {
        document.getElementsByName('add');
        console.info(document.getElementsByName('add')[0].value +  document.getElementsByName('add')[0].checked);
        document.getElementsByName('add')[0].checked;
    }

    // 尽量不要使用getAttribute() 、setAttribute()访问HTML 属性。
};
