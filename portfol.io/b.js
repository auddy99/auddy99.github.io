var sX = 0
var sY = 1580
$("#skills h4").css("display","none")
// $("#skills h4:nth-child(1)").css("display","block")
$("#skills h4").each(function(){
	$(this).css({'top':sY+parseInt($(this).attr('y'))+'px','left':sX+parseInt($(this).attr('x'))+'px'})
})

window.addEventListener('scroll',function(){
	scroll = window.pageYOffset;
	console.log(scroll)
	$('#front-page').css('opacity',1-scroll*0.002)
	if(scroll>200){$('#nav').addClass('navScroll');}
	else{$('#nav').removeClass('navScroll');}
	if(scroll>50){$("#main-content").slideDown(1000);}	
	if(scroll>600){$("#about-me").slideDown(1000);}
	if(scroll>1000){$("#skills").slideDown(1000);}
	if(scroll>1200){skillBegin();}
})

function skillBegin(){
	skillStart = 1
	setTimeout(function(){
		$("#skills h4:nth-child(2)").fadeIn(1000)
		$("#skills h4:nth-child(6)").fadeIn(1000)
		$("#skills h4:nth-child(7)").fadeIn(1000)
		$("#skills h4:nth-child(8)").fadeIn(1000)
	},1000)
	setTimeout(function(){
		$("#skills h4:nth-child(3)").fadeIn(1000)
		$("#skills h4:nth-child(9)").fadeIn(1000)
		$("#skills h4:nth-child(10)").fadeIn(1000)
		$("#skills h4:nth-child(11)").fadeIn(1000)
	},2000)
	setTimeout(function(){
		$("#skills h4:nth-child(4)").fadeIn(1000)
		$("#skills h4:nth-child(12)").fadeIn(1000)
		$("#skills h4:nth-child(13)").fadeIn(1000)
		$("#skills h4:nth-child(14)").fadeIn(1000)
	},3200)
	setTimeout(function(){
		$("#skills h4:nth-child(5)").fadeIn(1000)
		$("#skills h4:nth-child(15)").fadeIn(1000)
		$("#skills h4:nth-child(16)").fadeIn(1000)
		$("#skills h4:nth-child(17)").fadeIn(1000)
	},4300)
}