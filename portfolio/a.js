var sX = 0
var sY = 1500
$("#skills h2").css("display","none")
$("#skills h2:nth-child(1)").css("display","block")
$("#skills h2").each(function(){
	$(this).css({'top':sY+parseInt($(this).attr('y'))+'px','left':sX+parseInt($(this).attr('x'))+'px'})
})

$("#main-content").slideDown(2000);

window.addEventListener('scroll',function(){
	let scroll = window.pageYOffset;
	console.log(scroll)
	if(scroll > 200){$('#nav').addClass('navScroll');}
	else{$('#nav').removeClass('navScroll');}
	if(scroll > 900){skillBegin()}
	if(scroll > 2500){
		$('head').append('<link rel="stylesheet" type="text/css" href="../simple-css-waves/dist/style.css">')
	}
	$('.scrolled').each(function(){
		$(this).css('transform','translateY(-'+parseInt($(this).attr('speed'))*scroll+'px)')		
		$(this).css('opacity',1-0.003*scroll)
	})
	
})



function skillBegin(){
	skillStart = 1
	setTimeout(function(){
		$("#skills h2:nth-child(2)").fadeIn(1000)
	},2500)
	setTimeout(function(){
		$("#skills h2:nth-child(3)").fadeIn(1000)
		$("#skills h2:nth-child(6)").fadeIn(1000)
	},4400)
	setTimeout(function(){
		$("#skills h2:nth-child(4)").fadeIn(1000)
		$("#skills h2:nth-child(7)").fadeIn(1000)
		$("#skills h2:nth-child(9)").fadeIn(1000)
	},6100)
	setTimeout(function(){
		$("#skills h2:nth-child(5)").fadeIn(1000)
		$("#skills h2:nth-child(8)").fadeIn(1000)
		$("#skills h2:nth-child(10)").fadeIn(1000)
		$("#skills h2:nth-child(12)").fadeIn(1000)
	},7900)
	setTimeout(function(){
		$("#skills h2:nth-child(11)").fadeIn(1000)
		$("#skills h2:nth-child(13)").fadeIn(1000)
		$("#skills h2:nth-child(15)").fadeIn(1000)
	},9700)
	setTimeout(function(){
		$("#skills h2:nth-child(14)").fadeIn(1000)
		$("#skills h2:nth-child(16)").fadeIn(1000)
	},11400)
	setTimeout(function(){
		$("#skills h2:nth-child(17)").fadeIn(1000)
	},13100)
}