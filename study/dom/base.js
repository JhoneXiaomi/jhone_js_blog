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


    /**
     * HTMLElement,也有可能返回的是文本子节点，比如text。元素子节点
     * 可以是使用nodeName 或者是tagName 获取标签的名称，而文本子节点可以
     *
     * 使用childNode 返回子节点的时候，有可能返回的是元素子节点，比如是使用nodeValue 获取。
     * */
    if (document.childNodes) {
        for (var i = 0;i<div_one.childNodes.length;i++) {
            if (div_one.childNodes[i].nodeType == 1) {
                console.info(div_one.childNodes[i].nodeName);
            } else {
                console.info(div_one.childNodes[i].nodeValue);
            }
        }
        console.info('the number is:' + filterSpaceNode(div_one.childNodes).length);
    }

    /**
     * DOM 节点
     * 节点可以分为元素节点、属性节点、文本节点，而这些节点又有三个非常有用的属性，分别为：nodeName、nodeType
     * 以及nodeValue
     *
     * 节点类型      nodeName    nodeType    nodeValue
     * 元素          元素名称     1           null
     * 属性          属性名称     2           属性值
     * 文本          #text       3           文本内容（不含html）
     *
     * 层次节点属性
     * 节点的层次结构可以划分为，父节点、子节点、兄弟节点这两种。当我们获取其中一个元素节点的时候，就可以使用层
     * 次节点属性来获取它相关层析的节点
     *
     * childNodes                                 获取当前节点的所有节点
     * firstChild                                 获取当前元素节点的第一个子节点
     * lastChild                                  获取当前元素节点的最后一个子节点
     * ownerDocument                              获取当前该节点的文档根节点，想当于document
     * parentNode                                 获取当前节点的父节点
     *
     *
     * ps:在获取到的文本节点的时候,是无法使用innerHTML 这个属性输出文本内容的。这个非标准的属性必须在获取
     * 元素节点的时候，才能输出里面包含的文本
     * */

    if (div_one.parentNode) {
        console.info('the value of nodeName:' + document.getElementById('div_one').parentNode.nodeName);
    }
    if (div_one.ownerDocument) {
        console.info('the ownerDocument value' + div_one.ownerDocument);
    }

    /**
     * 在非IE 中，标准的DOM 具有识别空白文本节点的功能，所以在Chrome 是5个，而IE自动忽略了，如果要保持一致的子元素节点
     * 需要手工忽略掉它
     * */

    // 方法一：添加符合条件的的节点到新的数组
    function filterSpaceNode(nodes){
        var ret = [];
        for(var i = 0 ;i<nodes.length;i++){
            if (nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)) {
                continue;
            }
            ret.push(nodes[i]);
        }
        return ret;
    }

    // 方法二：删除子节点
    function filterSpaceNode(nodes) {
        for (var i = 0;i<node.length;i++) {
            if (nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)) {
                // 得到空包节点之后，移到父节点上，删除子节点
                nodes[i].parentNode.removeChild(nodes[i]);
            }
        }
        return nodes;
    }

};
