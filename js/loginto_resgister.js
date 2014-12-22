// JavaScript Document
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

		
		
		//根据窗口大小选择布局大小	
		$(".lr1").css({"left":(winWidth-540)/2});
		$(".lr2").css({"left":(winWidth-540)/2});

	
		
	   
		});
	
}
hanshu();
window.onresize=hanshu;
//实时获取浏览器窗口大小并调整文本图片代码结束


$(function(){		
$(".dt1 span").eq(0).click(function(){
	$(".lr1").hide();
	$(".quan").hide();
	}); 
$(".dt1 span").eq(1).click(function(){
	$(".lr2").hide();
	$(".quan").hide();
	});		  
		});






function qingkong(a)
{
	$(a).val("");

}





function zhuce()
{
	$(".quan").fadeTo("0.5",0.6);
	$(".quan").show();
	$(".lr2").hide();
	$(".lr1").show();
	
}
function denglu()
{
	$(".quan").fadeTo("0.5",0.6);
	$(".quan").show();
	$(".lr1").hide();
	$(".lr2").show();
	
}