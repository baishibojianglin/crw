function showLocation(province , city , town) {
	
	var loc	= new Location();
	var title	= ['省份' , '地级市' , '市、县、区'];
	$.each(title , function(k , v) {
		title[k]	= '<option value="">'+v+'</option>';
	})
	
	$('#loc_province').append(title[0]);
	$('#loc_city').append(title[1]);
	$('#loc_town').append(title[2]);
	
	
	$('#loc_province').change(function() {
		$('#loc_city').empty();
		$('#loc_city').append(title[1]);
		loc.fillOption('loc_city' , '0,'+$('#loc_province').val());
		$('#loc_town').empty();
		$('#loc_town').append(title[2]);
		//$('input[@name=location_id]').val($(this).val());
	})
	
	$('#loc_city').change(function() {
		$('#loc_town').empty();
		$('#loc_town').append(title[2]);
		loc.fillOption('loc_town' , '0,' + $('#loc_province').val() + ',' + $('#loc_city').val());
		//$('input[@name=location_id]').val($(this).val());
	})
	
	$('#loc_town').change(function() {
		$('input[@name=location_id]').val($(this).val());
	})
	
	if (province) {
		loc.fillOption('loc_province' , '0' , province);
		
		if (city) {
			loc.fillOption('loc_city' , '0,'+province , city);
			
			if (town) {
				loc.fillOption('loc_town' , '0,'+province+','+city , town);
			}
		}
		
	} else {
		loc.fillOption('loc_province' , '0');
	}
		
}


$(function(){
	
     $(".fa15").eq(0).addClass("lbjiacsschushi"); 
     $(".fa15").eq(1).addClass("lbjiacss10");
	 $(".fa15").eq(2).addClass("lbjiacss20");
	 $(".fa15").eq(3).addClass("lbjiacss30");
	});


function lbhanshu(a)
{
	//变背景图
	if(a==0)
	{
     $(".fa15").eq(1).removeClass("lbjiacss1");
	 $(".fa15").eq(2).removeClass("lbjiacss2");
	 $(".fa15").eq(3).removeClass("lbjiacss3");
	 
	 $(".fa15").eq(1).addClass("lbjiacss10");
	 $(".fa15").eq(2).addClass("lbjiacss20");
	 $(".fa15").eq(3).addClass("lbjiacss30");
	  
	 for(i=0;i<=2;i++)
	{$(".fa16").eq(i).css({"color":"gray"});}
	
	}
	
   if(a==1)
	{
     $(".fa15").eq(1).removeClass("lbjiacss10");
	 $(".fa15").eq(1).addClass("lbjiacss1");
	
     $(".fa15").eq(2).removeClass("lbjiacss2");
	 $(".fa15").eq(3).removeClass("lbjiacss3");	

     $(".fa15").eq(2).addClass("lbjiacss20");
	 $(".fa15").eq(3).addClass("lbjiacss30"); 

	 $(".fa16").eq(0).css({"color":"red"}); 
	 for(i=1;i<=2;i++)
	{$(".fa16").eq(i).css({"color":"gray"});}
	
	}
	
	if(a==2)
	{
		
	  $(".fa15").eq(1).removeClass("lbjiacss10");
	  $(".fa15").eq(2).removeClass("lbjiacss20");	
		
		$(".fa15").eq(1).addClass("lbjiacss1");
		$(".fa15").eq(2).addClass("lbjiacss2");
		
	 $(".fa15").eq(3).removeClass("lbjiacss3");			
	 $(".fa15").eq(3).addClass("lbjiacss30");	

	 $(".fa16").eq(0).css({"color":"red"}); 
	 $(".fa16").eq(1).css({"color":"red"});
	  $(".fa16").eq(2).css({"color":"gray"});
	 
	}
	if(a==3)
	{
		$(".fa15").eq(1).removeClass("lbjiacss10");
	    $(".fa15").eq(2).removeClass("lbjiacss20");	
		$(".fa15").eq(3).removeClass("lbjiacss30");

		
		$(".fa15").eq(1).addClass("lbjiacss1");
		$(".fa15").eq(2).addClass("lbjiacss2");
		$(".fa15").eq(3).addClass("lbjiacss3");
 
	 	$(".fa16").eq(0).css({"color":"red"}); 
	    $(".fa16").eq(1).css({"color":"red"});
	    $(".fa16").eq(2).css({"color":"red"});
	}
//变字体色
}




//上传图片并预览特效


function setImageBackview() { 
var imgb=document.getElementById("imgback"); 
var imgbackview=document.getElementById("backview");  
if(imgb.files && imgb.files[0]){ 
//火狐下，直接设img属性 
imgbackview.style.display = 'block'; 
imgbackview.style.width = '550px'; 
imgbackview.style.height = '300px'; 
//imgbackview.src = imgb.files[0].getAsDataURL(); 
//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式 
imgbackview.src = window.URL.createObjectURL(imgb.files[0]); 
}else{ 
//IE下，使用滤镜 
imgb.select(); 
var imgSrc = document.selection.createRange().text; 
var localImagId = document.getElementById("localImag"); 
//必须设置初始大小 
localImagId.style.width = "550px"; 
localImagId.style.height = "300px"; 
//图片异常的捕捉，防止用户修改后缀来伪造图片 
try{ 
localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"; 
localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc; 
}catch(e){ 
alert("您上传的图片格式不正确，请重新选择!"); 
return false; 
} 
imgbackview.style.display = 'none'; 
document.selection.empty(); 
} 
return true; 
} 


function setImagePreview() { 
var docObj=document.getElementById("imgfile"); 
var imgObjPreview=document.getElementById("preview"); 
if(docObj.files && docObj.files[0]){ 
//火狐下，直接设img属性 
imgObjPreview.style.display = 'block'; 
imgObjPreview.style.width = '550px'; 
imgObjPreview.style.height = '300px'; 
//imgObjPreview.src = docObj.files[0].getAsDataURL(); 
//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式 
imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]); 
}else{ 
//IE下，使用滤镜 
docObj.select(); 
var imgSrc = document.selection.createRange().text; 
var localImagId = document.getElementById("localImag"); 
//必须设置初始大小 
localImagId.style.width = "550px"; 
localImagId.style.height = "300px"; 
//图片异常的捕捉，防止用户修改后缀来伪造图片 
try{ 
localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"; 
localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc; 
}catch(e){ 
alert("您上传的图片格式不正确，请重新选择!"); 
return false; 
} 
imgObjPreview.style.display = 'none'; 
document.selection.empty(); 
} 
return true;
 
} //


$(function(){
	
     $(".admin_shtop201").eq(0).addClass("dlian1h"); 
     $(".admin_shtop201").eq(1).addClass("dlian2g");
	 $(".admin_shtop201").eq(2).addClass("dlian3g");
	 $(".admin_shtop201").eq(3).addClass("dlian4g");
	 $(".admin_shtop201").eq(4).addClass("dlian5g");
	});



function tlian(a){
	   if(a==0)
	{
	 $(".admin_shtop201").eq(0).addClass("dlian1h"); 
	 $(".admin_shtop201").eq(0).removeClass("dlian1bh");
	 $(".admin_shtop201").eq(0).removeClass("dlian1b");
	 
     $(".admin_shtop201").eq(1).addClass("dlian2g");
	 $(".admin_shtop201").eq(1).removeClass("dlian2hg");
	 $(".admin_shtop201").eq(1).removeClass("dlian2bh");
	 $(".admin_shtop201").eq(1).removeClass("dlian2b");
	 
	 $(".admin_shtop201").eq(2).addClass("dlian3g");
	 $(".admin_shtop201").eq(2).removeClass("dlian3hg");
	 $(".admin_shtop201").eq(2).removeClass("dlian3bh");
	 $(".admin_shtop201").eq(2).removeClass("dlian3b");

	 $(".admin_shtop201").eq(3).addClass("dlian4g");
	 $(".admin_shtop201").eq(3).removeClass("dlian4hg");
	 $(".admin_shtop201").eq(3).removeClass("dlian4bh");

	 $(".admin_shtop201").eq(4).addClass("dlian5g");
	 $(".admin_shtop201").eq(4).removeClass("dlian5h");
	 

	}
	if(a==1)
	{
	 $(".admin_shtop201").eq(0).addClass("dlian1bh"); 
	 $(".admin_shtop201").eq(0).removeClass("dlian1h");
	 $(".admin_shtop201").eq(0).removeClass("dlian1b");
	 
     $(".admin_shtop201").eq(1).addClass("dlian2hg");
	 $(".admin_shtop201").eq(1).removeClass("dlian2g");
	 $(".admin_shtop201").eq(1).removeClass("dlian2bh");
	 $(".admin_shtop201").eq(1).removeClass("dlian2b");
	 
	 $(".admin_shtop201").eq(2).addClass("dlian3g");
	 $(".admin_shtop201").eq(2).removeClass("dlian3hg");
	 $(".admin_shtop201").eq(2).removeClass("dlian3bh");
	 $(".admin_shtop201").eq(2).removeClass("dlian3b");

	 $(".admin_shtop201").eq(3).addClass("dlian4g");
	 $(".admin_shtop201").eq(3).removeClass("dlian4hg");
	 $(".admin_shtop201").eq(3).removeClass("dlian4bh");

	 $(".admin_shtop201").eq(4).addClass("dlian5g");
	 $(".admin_shtop201").eq(4).removeClass("dlian5h");
	}

	
	if(a==2)
	{
	 $(".admin_shtop201").eq(0).addClass("dlian1b"); 
	 $(".admin_shtop201").eq(0).removeClass("dlian1h");
	 $(".admin_shtop201").eq(0).removeClass("dlian1bh");
	 
     $(".admin_shtop201").eq(1).addClass("dlian2bh");
	 $(".admin_shtop201").eq(1).removeClass("dlian2g");
	 $(".admin_shtop201").eq(1).removeClass("dlian2hg");
	 $(".admin_shtop201").eq(1).removeClass("dlian2b");
	 
	 $(".admin_shtop201").eq(2).addClass("dlian3hg");
	 $(".admin_shtop201").eq(2).removeClass("dlian3g");
	 $(".admin_shtop201").eq(2).removeClass("dlian3bh");
	 $(".admin_shtop201").eq(2).removeClass("dlian3b");

	 $(".admin_shtop201").eq(3).addClass("dlian4g");
	 $(".admin_shtop201").eq(3).removeClass("dlian4hg");
	 $(".admin_shtop201").eq(3).removeClass("dlian4bh");

	 $(".admin_shtop201").eq(4).addClass("dlian5g");
	 $(".admin_shtop201").eq(4).removeClass("dlian5h");
	}
	
	if(a==3)
	{
	 $(".admin_shtop201").eq(0).addClass("dlian1b"); 
	 $(".admin_shtop201").eq(0).removeClass("dlian1h");
	 $(".admin_shtop201").eq(0).removeClass("dlian1bh");
	 
     $(".admin_shtop201").eq(1).addClass("dlian2b");
	 $(".admin_shtop201").eq(1).removeClass("dlian2g");
	 $(".admin_shtop201").eq(1).removeClass("dlian2hg");
	 $(".admin_shtop201").eq(1).removeClass("dlian2bh");
	 
	 $(".admin_shtop201").eq(2).addClass("dlian3bh");
	 $(".admin_shtop201").eq(2).removeClass("dlian3g");
	 $(".admin_shtop201").eq(2).removeClass("dlian3hg");
	 $(".admin_shtop201").eq(2).removeClass("dlian3b");

	 $(".admin_shtop201").eq(3).addClass("dlian4hg");
	 $(".admin_shtop201").eq(3).removeClass("dlian4g");
	 $(".admin_shtop201").eq(3).removeClass("dlian4bh");

	 $(".admin_shtop201").eq(4).addClass("dlian5g");
	 $(".admin_shtop201").eq(4).removeClass("dlian5h");
	}
	
	if(a==4)
	{
	 $(".admin_shtop201").eq(0).addClass("dlian1b"); 
	 $(".admin_shtop201").eq(0).removeClass("dlian1h");
	 $(".admin_shtop201").eq(0).removeClass("dlian1bh");
	 
     $(".admin_shtop201").eq(1).addClass("dlian2b");
	 $(".admin_shtop201").eq(1).removeClass("dlian2g");
	 $(".admin_shtop201").eq(1).removeClass("dlian2hg");
	 $(".admin_shtop201").eq(1).removeClass("dlian2bh");
	 
	 $(".admin_shtop201").eq(2).addClass("dlian3b");
	 $(".admin_shtop201").eq(2).removeClass("dlian3g");
	 $(".admin_shtop201").eq(2).removeClass("dlian3hg");
	 $(".admin_shtop201").eq(2).removeClass("dlian3bh");

	 $(".admin_shtop201").eq(3).addClass("dlian4bh");
	 $(".admin_shtop201").eq(3).removeClass("dlian4g");
	 $(".admin_shtop201").eq(3).removeClass("dlian4hg");

	 $(".admin_shtop201").eq(4).addClass("dlian5h");
	 $(".admin_shtop201").eq(4).removeClass("dlian5g");
	}
}

