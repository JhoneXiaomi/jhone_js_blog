window.onload=function(){
	$().getClass('member').hover(function(){
		$().getClass('member').css('background','url(images/arrow2.png) no-repeat 55px center');
		$().getTagName('ul').show();
	},function(){
		$().getClass('member').css('background','url(images/arrow.png) no-repeat 55px center');
		$().getTagName('ul').hide();
	});

	var left = (document.documentElement.clientWidth-350)/2;
	var top = (document.documentElement.clientHeight-300)/2;


	$().getId('login_window').center(350,300).resize(function(){
		$().getId('login_window').center(350,300);
	});

	$().getClass('login').click(function(){
		$().getId('login_window').css('display','block');
		
		$().getId('screen').lock();
	});
	$().getId('close').click(function(){
		$().getId('login_window').css('display','none');
		$().getId('screen').unlock();
	});

	$().resize(function(){
		$().getId('login_window').center(350,300);
		if ("block" == $().getId('screen').css("display")) {
			$().getId('screen').lock();
		
		} 
		
	});
}