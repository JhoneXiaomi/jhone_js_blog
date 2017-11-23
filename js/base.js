// 基础库
function Base(_this){
	// 定义一个数组来保存节点以及节点数组
	/*
	 * _this 是一个对象	
	 * undefined 也是一个对象
	 * 区别:是typeof是否带有单引号的'undefined'
	 */
	this.elements = [];
	if (undefined != _this) {
		this.elements[0] = _this;
	}
}

// 简化Base的操作
var $ = function(_this){
	return new Base(_this);
}

// 通过节点id 获取
Base.prototype.getId = function(id){
	this.elements.push(document.getElementById(id));
	return this;
}

// 通过节点名称获取
Base.prototype.getTagName = function(tagName){
	var tags = document.getElementsByTagName(tagName);
	for (var i = 0; i < tags.length; i ++) {
		this.elements.push(tags[i]);
	}
	return this;
}

// 获取class 节点数组
Base.prototype.getClass = function(className,idName){
	if (arguments.length ==2) {
		node = document.getElementById(idName);
	} else {
		node = document; 
	}
	var all = node.getElementsByTagName('*');
	for (var i =0; i < all.length; i++) {
		if (all[i].className == className) {
			this.elements.push(all[i]);
		}
	}
	return this;
}

// 获取一个节点
Base.prototype.getElement = function(num){

	var element = this.elements[num];
	this.elements = [];
	this.elements[0] = element;
	return this;
}
// 设置css
Base.prototype.css = function(attr,value){
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 1) {
			if (typeof window.getComputedStyle != 'undefined') {//W3C
				return window.getComputedStyle(this.elements[i], null)[attr];
			} else if (typeof this.elements[i].currentStyle != 'undeinfed') {//IE
				return this.elements[i].currentStyle[attr];
			}
		}
		this.elements[i].style[attr] = value;
	}
	return this;
}
Base.prototype.hover = function(over,out){
	for(var i = 0;i<this.elements.length;i++){
		this.elements[i].onmouseover = over;
		this.elements[i].onmouseout = out;
	}
	return this;
}

// 设置显示
Base.prototype.show = function(){
	for(var i = 0;i < this.elements.length;i++){
		this.elements[i].style.display = 'block';
	}
	return this;
}
// 设置隐藏
Base.prototype.hide = function(){
	for(var i = 0;i < this.elements.length;i++){
		this.elements[i].style.display = 'none';
	}
	return this;
}
Base.prototype.lock = function(){
	
	for (var key in this.elements){	
		this.elements[key].style.width = this.getInner().width+"px";
		this.elements[key].style.height = this.getInner().height+"px";
		this.elements[key].style.display = 'block';
	}
	return this;
}
Base.prototype.unlock = function(){
	for(var key in this.elements){
		this.elements[key].style.display = "none";
	}
	return this;
}
//设置物体居中
Base.prototype.center = function (width, height) {
	var top = (document.documentElement.clientHeight - 250) / 2;
	var left = (document.documentElement.clientWidth - 350) / 2;
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.top = top + 'px';
		this.elements[i].style.left = left + 'px';
	}
	return this;
}
// 出发点击事件
Base.prototype.click = function(fn){
	for (var i=0;i<this.elements.length;i++){
		this.elements[i].onclick = fn;
	}
	return this;
}
// 触发浏览器窗口事件
Base.prototype.resize = function(fn){
	window.onresize = fn;
	return this;
}

// 跨浏览器调用视口的大小
Base.prototype.getInner = function(){

	if ("undefined" != typeof window.innerWidth) {
		return{
			width:window.innerWidth,
			height:window.innerHeight
		}
	} else {
		return{
			width:window.clientWidth,
			height:window.clientHeight
		}
	}
}