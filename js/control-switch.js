//图片滚动列表 mengjia 070816
var Speed = 1; //速度(毫秒)
var Space = 5; //每次移动(px)
var PageWidth = 1160; //翻页宽度
var fill = 0; //整体移位
var MoveLock = false;
var MoveTimeObj;
var Comp = 0;
var AutoPlayObj = null;
GetObj("List2").innerHTML = GetObj("List1").innerHTML;
GetObj('ISL_Cont').scrollLeft = fill;
GetObj("ISL_Cont").onmouseover = function(){clearInterval(AutoPlayObj);}
GetObj("ISL_Cont").onmouseout = function(){AutoPlay();}
AutoPlay();
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
/*function AutoPlay(){ //自动滚动
 clearInterval(AutoPlayObj);
 AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();',3000); //间隔时间
}*/
function ISL_GoUp(){ //上翻开始
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 MoveTimeObj = setInterval('ISL_ScrUp();',Speed);
}
function ISL_StopUp(){ //上翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0){
  Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrUp(){ //上翻动作
 if(GetObj('ISL_Cont').scrollLeft <= 0){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth}
 GetObj('ISL_Cont').scrollLeft -= Space ;
}
function ISL_GoDown(){ //下翻
 clearInterval(MoveTimeObj);
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 ISL_ScrDown();
 MoveTimeObj = setInterval('ISL_ScrDown()',Speed);
}
function ISL_StopDown(){ //下翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0 ){
  Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrDown(){ //下翻动作
 if(GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth;}
 GetObj('ISL_Cont').scrollLeft += Space ;
}
function CompScr(){
 var num;
 if(Comp == 0){MoveLock = false;return;}
 if(Comp < 0){ //上翻
  if(Comp < -Space){
   Comp += Space;
   num = Space;
  }else{
   num = -Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft -= num;
  setTimeout('CompScr()',Speed);
 }else{ //下翻
  if(Comp > Space){
   Comp -= Space;
   num = Space;
  }else{
   num = Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft += num;
  setTimeout('CompScr()',Speed);
 }
}


$right1=$(".RightBotton1");	
$left1=$(".LeftBotton1");
$window1=$("#ISL_Cont");
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
