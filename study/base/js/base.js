
/*
*
* 整个库是一个基础对象，方法尽可能简短且有意义，对象操作方法无无法在此基础上添加方法
* */
/*
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
};*/

/*
*
* 函数式申明方法
*
*
* */
function Base() {

    console.info("this is base...");
    this.elements = [];

    this.getId = function (id) {

        this.elements.push(document.getElementById(id));
        return this;
    };

    this.getName = function (name) {

       var names = document.getElementsByName(name);
       for (var i=0;i<names.length;i++) {
           this.elements.push(targs[i]);
       }
       return this;
    };

    this.getTagName = function (tagName) {

        var tagNames = document.getElementsByTagName(tagName);
        for (var i=0;i<tagNames.length;i++) {
            this.elements.push(tags);
        }
        return this;
    };
};

Base.prototype.html = function (str) {

    for (var i=0;i<this.elements.length;i++) {
        this.elements[i].innerHTML= str;
    }
    return this;
};

Base.prototype.click = function (fn) {

    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }

    return this;
};

Base.prototype.css = function (attr,val) {

    for (var i=0;i<this.elements.length;i++) {
        this.elements[i].style[attr] = val;
    }

    return this;
};

Base.prototype.addClass = function (className) {
    for (var i=0;i<this.elements.length;i++) {
        if (this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))) {
            this.elements[i].className += ''+ className;
        }
    }
    return this;
};
// 未来避免在前台new 一个对象，我们可以在库里面直接new一个对象
var $ = function () {

    return new Base();
};