// JavaScript Document
$(function(){
	
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
/*		$(".c5div1").css({"font-size":winWidth*(16/1900)});
		$(".c8div1").css({"font-size":winWidth*(16/1900)});
		$(".c9div0").css({"font-size":winWidth*(16/1900)});*/
		
		
		//根据窗口大小选择布局大小
		
		
		
		//调整项目筛选格式
	
		

		});
	
}
hanshu();
window.onresize=hanshu;
//实时获取浏览器窗口大小并调整文本图片代码结束
	
	
	
	
	
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
   // $(".top2b-1").css({"background-image":"url(./images/top1.png)","background-repeat":"repeat"});
	//$(".top2b-1").eq(a).css({"background-image":"url(./images/top6.png)","background-size":"100% 100%"});
	//$(".ptop1").eq(a).css({"color":"#EDC99C"});
     $(".top2b-1").removeClass("adcl2");
	 $(".top2b-1").eq(a).addClass("adcl2");
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
$window1=$(".xmfl_1div1zong");
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
$(".xmfl_1divyuandian_1").eq(0).addClass("xmf1xsaa");
for(i=1;i<4;i++)
{$(".xmfl_1divyuandian_1").eq(i).addClass("xmf1xsaa1");}

function yuandian(a)
{
$(".xmfl_1divyuandian_1").removeClass("xmf1xsaa");
$(".xmfl_1divyuandian_1").addClass("xmf1xsaa1");
$(".xmfl_1divyuandian_1").eq(a).removeClass("xmf1xsaa1");
$(".xmfl_1divyuandian_1").eq(a).addClass("xmf1xsaa");
}

	 
$(".xmfl_1divyuandian_1").eq(0).click(function(){
	c1_dianji(0);
	yuandian(0);
	
	});

$(".xmfl_1divyuandian_1").eq(1).click(function(){
	c1_dianji(1);
	yuandian(1);

	});
$(".xmfl_1divyuandian_1").eq(2).click(function(){
	c1_dianji(2);
	yuandian(2);
	});
	
$(".xmfl_1divyuandian_1").eq(3).click(function(){
	c1_dianji(3);
	yuandian(3);
	});
	
		
	
	
	
//项目筛选

$(".xmfl_span3bg").click(function(){
	$(this).parent().hide();
	});		

});


function bs(a)
{
$(a).addClass("bianse");
}

function bs1(a)
{
	$(a).removeClass("bianse");
}

function xs1(a)
{	
$(".xmf1_2div0_b1").eq(a).show();	
}
var xs_jishu=0;
function jiabian(a)
{
	$(".xf_pai4").eq(a).slideToggle("fast");
	$("#cai1").addClass("biankuang");
	xs_jishu++;
	if(xs_jishu%2==0)
	{$("#cai1").removeClass("biankuang");}
}

var xs_jishu2=0;
function jiabian2(a)
{
	$(".xf_pai4").eq(a).slideToggle("fast");
	$("#cai2").addClass("biankuang");
	xs_jishu2++;
	if(xs_jishu2%2==0)
	{$("#cai2").removeClass("biankuang");}
}

function han1(a)
{
	$(a).css({"color":"#F00"});
}

function han2(a)
{
	$(a).css({"color":"#333"});
}



//翻页选择

function fanye_xs(a)
{

$(a).addClass("lei");

}

function fanye1_xs(a)
{	
$(a).removeClass("lei");
}

function fanye2_xs(a)
{	
$(".c3div3b-2_span2").removeClass("lei2");
$(a).addClass("lei2");
}

function f1()
{
$(".c3div3b-2_span2").removeClass("lei2");
$(".c3div3b-2_span2").first().addClass("lei2");	
}


function f2()
{
$(".c3div3b-2_span2").removeClass("lei2");
	$(".c3div3b-2_span2").last().addClass("lei2");	
}

function jiakuang(a)
{
	$(".c3div3b-1").children().removeClass("jialei");
	$(a).addClass("jialei");	
}

function jiakuang1(a)
{
	
$(a).removeClass("jialei");
}