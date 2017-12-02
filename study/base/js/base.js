
/*
*
* 整个库是一个基础对象，方法尽可能简短且有意义
* */
var Base = {
    getId : function (id) {
        return document.getElementById(id);
    },
    getName :function (name) {
        return document.getElementsByName(name);
    },
    getTagName:function (tagName) {
        return document.getElementsByTagName(tagName);
    }
};