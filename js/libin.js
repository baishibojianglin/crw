<script>
$right1=$("#RightArr");	
$left1=$("#LeftArr");

$window1=$(".dao-1b1c");
	var lc1 = 0;
	var rc1 = 3;
	$left1.click(function(){
	
		if(lc1<1)
		{
			alert("");
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=287px'}, 3000);
		
		
	});
	
	
	$right1.click(function(){
		if (rc1 < 1)
		{
			alert("");
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=287px'}, 3000);
	});
</script>