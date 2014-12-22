// JavaScript Document

$(function(){

$right1=$("#righthui");	
$left1=$("#lefthui");
$window1=$(".m1_b0_right_3b_bao");
var huijishu=$(".c3div3b-1a").size();
	var lc1hui = 0;
	var rc1hui = huijishu;
	
	$left1.click(function(){
		if (lc1hui < 1) {
			alert("已到左边最后一个项目");
			return;
		}
		lc1hui--;
		rc1hui++;
		$window1.animate({left:'+=300px'}, 1000);
	});

	$right1.click(function(){
		if (rc1hui < 4){
			alert("已到右边最后一个项目");
			return;
		}
		lc1hui++;
		rc1hui--;
		$window1.animate({left:'-=300px'}, 1000);
	});

//设置
$(".top2c-1a").click(function(){
	 $(".jiadivsss").toggle();
 });

//进度条
var a=200;
$(".jindutiao1").css("width",a);
$(".jindutiao2").css("width",243-a);









});



function huiyuanjl(a)
{ 
	$(a).css({"background-color":"#36F","color":"#fff"});
}

function huiyuanjl1(a)
{ 
$(a).css({"background-color":"#fff","color":"#666"});
}


