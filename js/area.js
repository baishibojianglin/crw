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





