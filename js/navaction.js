$(".nav a").each(function(){
        if($(this).attr('href') == location.href){
                $(this).css('background-color','#f00');

        }

})