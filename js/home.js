// JavaScript Document

//实时获取浏览器窗口大小，当窗口大小变化使文本和图片适应窗口改变代码开始

var winWidth = 0;
var winHeight = 0;
function hanshu() 
{
     //获取窗口宽度
     if (window.innerWidth)
    winWidth = window.innerWidth;
     else if ((document.body) && (document.body.clientWidth))
    winWidth = document.body.clientWidth;
    //获取窗口高度
     if (window.innerHeight)
     winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
     winHeight = document.body.clientHeight;
     //通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
     {
     winHeight = document.documentElement.clientHeight;
     winWidth = document.documentElement.clientWidth;
    }
	
	
	//根据窗口变化调整网页各版块高度
	$(function(){

	
	    //根据窗口大小选择字体大小
		$(".c5div1").css({"font-size":winWidth*(16/1900)});
		$(".c8div1").css({"font-size":winWidth*(16/1900)});
		$(".c9div0").css({"font-size":winWidth*(16/1900)});
		
		
		//根据窗口大小选择布局大小	
		$(".c5div1").css({"height":winWidth*(320/1920)});
		$(".c8div1").css({"height":winWidth*(320/1920)});
		$(".c9div0").css({"height":winWidth*(700/1920)});
		$(".c1div1").css({"height":winWidth*(500/1920)});
	
		
	   
		});
	
}
hanshu();
window.onresize=hanshu;
//实时获取浏览器窗口大小并调整文本图片代码结束








$(function(){
	
	
	
	
	
	
	//导航字体颜色改变
	function top_change_colora(a)
	 
	{
		$(".ptop1").eq(a).css({"color":"#FF4200"});
	}
	
	function top_change_colorb(a)
	{
		$(".ptop1").eq(a).css({"color":"#ffffff"});
	}
	
	
	$(".top2b-1").eq(0).mouseover(function(){
		  top_change_colora(0);
		});
	$(".top2b-1").eq(0).mouseout(function(){
		  top_change_colorb(0);
		});		
		
	$(".top2b-1").eq(1).mouseover(function(){
		  top_change_colora(1);
		});
	$(".top2b-1").eq(1).mouseout(function(){
		  top_change_colorb(1);
		});	
		
	$(".top2b-1").eq(2).mouseover(function(){
		  top_change_colora(2);
		});
	$(".top2b-1").eq(2).mouseout(function(){
		  top_change_colorb(2);
		});	
		
	$(".top2b-1").eq(3).mouseover(function(){
		  top_change_colora(3);
		});
	$(".top2b-1").eq(3).mouseout(function(){
		  top_change_colorb(3);
		});
		
	$(".top2b-1").eq(4).mouseover(function(){
		  top_change_colora(4);
		});
	$(".top2b-1").eq(4).mouseout(function(){
		  top_change_colorb(4);
		});
		
	$(".top2b-1").eq(5).mouseover(function(){
		  top_change_colora(5);
		});
	$(".top2b-1").eq(5).mouseout(function(){
		  top_change_colorb(5);
		});	

//导航字体背景发生变化
function top_change_background(a)
{   
    $(".top2b-1").css({"background-image":"url(./images/top1.png)","background-repeat":"repeat"});
	$(".top2b-1").eq(a).css({"background-image":"url(./images/top6.png)"});
	$(".ptop1").eq(a).css({"color":"#EDC99C"});
}
		
	$(".top2b-1").eq(0).click(function(){
		  top_change_background(0);
		});		

	$(".top2b-1").eq(1).click(function(){
		  top_change_background(1);
		});	
		
	$(".top2b-1").eq(2).click(function(){
		  top_change_background(2);
		});
		
	$(".top2b-1").eq(3).click(function(){
		  top_change_background(3);
		});
		
	$(".top2b-1").eq(4).click(function(){
		  top_change_background(4);
		});
		
	$(".top2b-1").eq(5).click(function(){
		  top_change_background(5);
		});	

















    //正文第一部分图片滑动特效
$right1=$("#right");	
$left1=$("#left");
$window1=$(".c1div2");
	var lc1 = 0;
	var rc1 = 3;

	
function leftmove()
{
if (lc1 < 1)
 {
			alert("已经是左边最后一页");
			return;
 }
		lc1--;
		rc1++;
		$window1.animate({left:'+=100%'}, 1000);
		yuandian(lc1);
		
}



function rightmove()
{
	
		if (rc1 < 1){
			alert("已经是右边最后一页");
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=100%'}, 1000);
		yuandian(lc1);
		
	
}


	
$left1.click(function(){
		
		leftmove();	
	
	});

$right1.click(function(){
     
	 rightmove();

	});
	
     //圆点点击特效
	 
function c1_dianji(a)
{
	var x,y;
	x=lc1-a;
	if(x>=0)
	{
	for(i=0;i<x;i++)
	$window1.animate({left:'+=100%'},5);
	lc1=a;
	rc1=3-lc1;
	}
	else
	{
	y=Math.abs(x);
	for(i=0;i<y;i++)
	$window1.animate({left:'-=100%'},5);
	lc1=a;
	rc1=3-lc1;
	}
}

//原点背景初始化
for(i=1;i<4;i++)
{$(".c1div3a").eq(i).css({"background-image":"url(./images/c1e.gif)"});}

function yuandian(a)
{
   $(".c1div3a").css({"background-image":"url(./images/c1e.gif)"});	
   $(".c1div3a").eq(a).css({"background-image":"url(./images/c1d.gif)"});	
}

	 
$(".c1div3a").eq(0).click(function(){
	c1_dianji(0);
	yuandian(0);
	});

$(".c1div3a").eq(1).click(function(){
	c1_dianji(1);
	yuandian(1);

	});
$(".c1div3a").eq(2).click(function(){
	c1_dianji(2);
	yuandian(2);
	});
	
$(".c1div3a").eq(3).click(function(){
	c1_dianji(3);
	yuandian(3);
	});






















//项目的选择
$(".c3div2c").click(function(){
	$(".c3div2").children().css({"color":"#666666","background-image":"url(./images/c3a.png)"});
	$(this).css({"background-image":"none","background-color":"#FFF","color":"red"});
	});

$(".c3div2d").click(function(){
	$(".c3div2").children().css({"color":"#666666","background-image":"url(./images/c3a.png)"});
	$(this).css({"background-image":"none","background-color":"#FFF","color":"red"});
	});

$(".c3div2e").click(function(){
	$(".c3div2").children().css({"color":"#666666","background-image":"url(./images/c3a.png)"});
	$(this).css({"background-image":"none","background-color":"#FFF","color":"red"});
	});

//项目分类
	
function fenlie(fl)
{
	   
	    $(".c9div1c-1").eq(fl).hide();
		$(".c9div1c-1f").eq(fl).show();
		
		
}
function fenlie2(fl)
{ 
        
	    $(".c9div1c-1").eq(fl).show();
		$(".c9div1c-1f").eq(fl).hide();
		
}


$(".c9div1c-1").eq(0).mouseover(function(){
	fenlie(0);
	});
$(".c9div1c-1f").eq(0).mouseout(function(){
	fenlie2(0);
	});	
$(".c9div1c-1").eq(1).mouseover(function(){
	fenlie(1);
	});
$(".c9div1c-1f").eq(1).mouseout(function(){
	fenlie2(1);
	});	
$(".c9div1c-1").eq(2).mouseover(function(){
	fenlie(2);
	});
$(".c9div1c-1f").eq(2).mouseout(function(){
	fenlie2(2);
	});
	
	
function fenlieb(fl)
{
	    $(".c9div1d-1").eq(fl).hide();
		$(".c9div1d-1f").eq(fl).show();
		
}
function fenlie2b(fl)
{
	    $(".c9div1d-1").eq(fl).show();
		$(".c9div1d-1f").eq(fl).hide();
		
}	
	

$(".c9div1d-1").eq(0).mouseover(function(){
	fenlieb(0);
	});
$(".c9div1d-1f").eq(0).mouseout(function(){
	fenlie2b(0);
	});	
$(".c9div1d-1").eq(1).mouseover(function(){
	fenlieb(1);
	});
$(".c9div1d-1f").eq(1).mouseout(function(){
	fenlie2b(1);
	});	
$(".c9div1d-1").eq(2).mouseover(function(){
	fenlieb(2);
	});
$(".c9div1d-1f").eq(2).mouseout(function(){
	fenlie2b(2);
	});	
$(".c9div1d-1").eq(3).mouseover(function(){
	fenlieb(3);
	});
$(".c9div1d-1f").eq(3).mouseout(function(){
	fenlie2b(3);
	});	





function fenliec(fl)
{
	   
	    $(".c9div1e-1").eq(fl).hide();
		$(".c9div1e-1f").eq(fl).show();
		
		
}
function fenlie2c(fl)
{ 
        
	    $(".c9div1e-1").eq(fl).show();
		$(".c9div1e-1f").eq(fl).hide();
		
}


$(".c9div1e-1").eq(0).mouseover(function(){
	fenliec(0);
	});
$(".c9div1e-1f").eq(0).mouseout(function(){
	fenlie2c(0);
	});	
$(".c9div1e-1").eq(1).mouseover(function(){
	fenliec(1);
	});
$(".c9div1e-1f").eq(1).mouseout(function(){
	fenlie2c(1);
	});	
$(".c9div1e-1").eq(2).mouseover(function(){
	fenliec(2);
	});
$(".c9div1e-1f").eq(2).mouseout(function(){
	fenlie2c(2);
	});	






								
});

