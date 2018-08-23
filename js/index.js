
$(function(){
	var iWidth=$('.box1').eq(0).width()+30;
	console.log(iWidth)
	var a=0;
	$('.nextverous').click(function(){
		console.log(1)
		a++;
		if(a>=$('.box1').length){
			a=0
		}
		$('.position-box').animate({opacity:0},200)
		$('.position-box').animate({left:-iWidth*a
		},0)
		$('.position-box').animate({
			
			opacity:1
			
		},500)
	})
	
	
	$('#nav li').click(function(){
		if($(this).index()==0){
			window.location.href="index.html"
		}else if($(this).index()==1){
			window.location.href="index2.html"
		}else if($(this).index()==2){
			window.location.href="index3.html"
		}else if($(this).index()==3){
			window.location.href="index4.html"
		}else if($(this).index()==5){
			window.location.href="news.html"
		}
	})
	
	
	
	
	
	
	
	
	
})
