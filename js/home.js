// JavaScript Document
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

//自动切换特效







    //正文第一部分图片滑动特效
$right1=$("#right");	
$left1=$("#left");
$window1=$(".c1div2");
	var lc1 = 0;
	var rc1 = 3;
	
	$left1.click(function(){
		if (lc1 < 1) {
			alert("已经是左边最后一页");
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=100%'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			alert("已经是右边最后一页");
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=100%'}, 1000);
	});
	
	
	




     //正文第一部分圆点点击特效
	 
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
	 
$(".c1div3b").eq(0).click(function(){
	c1_dianji(0);
	});

$(".c1div3a").eq(1).click(function(){
	c1_dianji(1);
	$(this).hide();

	});
$(".c1div3a").eq(2).click(function(){
	c1_dianji(2);
	});
$(".c1div3a").eq(3).click(function(){
	c1_dianji(3);
	});







   //圆点图变换
 
$(".c1div3a").eq(1).click(function(){
	$(this).hide();
	$(".c1div3b").eq(1).show();
	$(".c1div3a").eq(0).hide();
	$(".c1div3b").eq(0).show();
	$(".c1div3a").eq(2).show();
	$(".c1div3b").eq(2).hide();
	$(".c1div3a").eq(3).show();
	$(".c1div3b").eq(3).hide();
	});   
$(".c1div3a").eq(2).click(function(){
	$(this).hide();
	$(".c1div3b").eq(2).show();
	$(".c1div3a").eq(0).hide();
	$(".c1div3b").eq(0).show();
	$(".c1div3a").eq(1).show();
	$(".c1div3b").eq(1).hide();
	$(".c1div3a").eq(3).show();
	$(".c1div3b").eq(3).hide();
	}); 
$(".c1div3a").eq(3).click(function(){
	$(this).hide();
	$(".c1div3b").eq(3).show();
	$(".c1div3a").eq(0).hide();
	$(".c1div3b").eq(0).show();
	$(".c1div3a").eq(1).show();
	$(".c1div3b").eq(1).hide();
	$(".c1div3a").eq(2).show();
	$(".c1div3b").eq(2).hide();
	}); 
		
$(".c1div3b").eq(0).click(function(){
	$(this).hide();
	$(".c1div3a").eq(0).show();
	$(".c1div3a").eq(3).show();
	$(".c1div3b").eq(3).hide();
	$(".c1div3a").eq(1).show();
	$(".c1div3b").eq(1).hide();
	$(".c1div3a").eq(2).show();
	$(".c1div3b").eq(2).hide();
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

							
});

