
//正文第一部分图片滑动特效
$(function(){
	var zong1= $('#bao1 .pic').size();
	var dx1=0;
	var dy1=zong1-4;	

$("#lhua1").click(function(){
if (dx1 < 1)
 {
			alert("已经是左边最后一页");
			return;
 }
		dx1--;
		dy1++;
		$("#bao1").animate({left:'+=300px'}, 1000);

});




$("#rhua1").click(function(){
	
		if (dy1< 1){
			alert("已经是右边最后一页");
			return;
		}
		dx1++;
		dy1--;
		$("#bao1").animate({left:'-=300px'}, 1000);
		
});	


});



//正文第二部分图片滑动特效
$(function(){
	var zong2=$('#bao2 .pic').size();
	var dx2=0;
	var dy2=zong2-4;	

$("#lhua2").click(function(){
if (dx2 < 1)
 {
			alert("已经是左边最后一页");
			return;
 }
		dx2--;
		dy2++;
		$("#bao2").animate({left:'+=300px'}, 1000);

});




$("#rhua2").click(function(){
	
		if (dy2< 1){
			alert("已经是右边最后一页");
			return;
		}
		dx2++;
		dy2--;
		$("#bao2").animate({left:'-=300px'}, 1000);
		
});	


});







//正文第三部分图片滑动特效
$(function(){
	var zong3=$('#bao3 .pic').size();
	var dx3=0;
	var dy3=zong3-4;	

$("#lhua3").click(function(){
if (dx3 < 1)
 {
			alert("已经是左边最后一页");
			return;
 }
		dx3--;
		dy3++;
		$("#bao3").animate({left:'+=300px'}, 1000);

});




$("#rhua3").click(function(){
	
		if (dy3< 1)
		{
			alert("已经是右边最后一页");
			return;
		}
		dx3++;
		dy3--;
		$("#bao3").animate({left:'-=300px'}, 1000);
		
});	


});



//正文第四部分图片滑动特效
$(function(){
	var zong4=$('#bao4 .pic').size();
	var dx4=0;
	var dy4=zong4-4;	

$("#lhua4").click(function(){
if (dx4 < 1)
 {
			alert("已经是左边最后一页");
			return;
 }
		dx4--;
		dy4++;
		$("#bao4").animate({left:'+=300px'}, 1000);

});




$("#rhua4").click(function(){
	
		if (dy4< 1)
		{
			alert("已经是右边最后一页");
			return;
		}
		dx4++;
		dy4--;
		$("#bao4").animate({left:'-=300px'}, 1000);
		
});	


});