
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
function Base(_this) {

    console.info("this is base...");
    this.elements = [];
    if (_this != undefined) {
        this.elements[0] = _this;
    }

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

//
Base.prototype.css = function (attr,val) {

    for (var i=0;i<this.elements.length;i++) {
        this.elements[i].style[attr] = val;
    }

    return this;
};

// 添加类
Base.prototype.addClass = function (className) {

    console.info("this is addClass function...");
    for (var i=0;i<this.elements.length;i++) {
        if (!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))) {
            this.elements[i].className += ''+ className;
        }
    }
    return this;
};

// 去除类
Base.prototype.removeClass = function (className) {

    for (var i=0;i<this.elements.length;i++) {
        if (this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'),'');
        }
    }
    return this;
};

// 隐藏
Base.prototype.hide = function () {

    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = 'none';
    }
    return this;
};

// 显示
Base.prototype.show = function () {

  for(var i=0;i<this.elements.length;i++){
      this.elements[i].style.display = 'block';
  }
  return this;
};

// 鼠标移入
Base.prototype.hover = function (over,out) {

    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onmousemove = over;
        this.elements[i].onmouseout = out;
    }

    return this;
};


// 添加窗体居中方法
Base.prototype.center = function (width,height) {

    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.top = (document.documentElement.clientHeight-height)/2 - 20 + 'px';
        this.elements[i].style.left = (document.documentElement.clientWidth - width)/2 + 'px';
    }

    return this;
};


// 浏览器窗体变动时间
Base.prototype.resize = function (fn) {

    window.onresize =fn;
    return this;
};

// 窗体锁定函数的编写
Base.prototype.lock = function () {
  for(var i=0;i<this.elements.length;i++){
      this.elements[i].style.display = "none";
  }
  return this;
};

// 窗体接触锁定的事件
Base.prototype.unlock = function () {
    for(var i=0;this.elements.length;i++){
        this.elements[i].style.display = 'block';
    }
    return this;
};


// 未来避免在前台new 一个对象，我们可以在库里面直接new一个对象
var $ = function (_this) {

    return new Base(_this);
};