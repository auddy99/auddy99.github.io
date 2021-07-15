var sX = 0
var sY = 1500

$("#main-content").slideDown(2000);

window.addEventListener('scroll',function(){
	let scroll = window.pageYOffset;
	// console.log(scroll)
	if(scroll > 200){$('#nav').addClass('navScroll');}
	else{$('#nav').removeClass('navScroll');}
	if(scroll > 800){skillBegin()}
	$('.scrolled').each(function(){
		$(this).css('transform','translateY(-'+parseInt($(this).attr('speed'))*scroll+'px)')		
		$(this).css('opacity',1-0.003*scroll)
	})
	
})

$(".pieID").css("display","none")
$(".proj-item").mouseenter(function(){
	sno = $(this).attr("sno")
	$("#legend"+sno).css("display","block");
	$("#pie"+sno).css("display","block");
	$(this).css("grid-template-columns","70% 15% 15%")
	$(this).css("margin","0 10% 50px")
	$(this).css("background","#122027")
	createPie("#legend"+sno, "#pie"+sno);
})
$(".proj-item").mouseleave(function(){
	sno = $(this).attr("sno")
	$("#legend"+sno).css("display","none");
	$("#pie"+sno).css("display","none");
	$(this).css("grid-template-columns","100%")
	$(this).css("background","#0F1A20")
	$(this).css("margin","0 20% 50px")
	// createPie("#legend"+sno, "#pie"+sno);
})

$(".exp-r2").slideToggle();
$(".exp-item").mouseenter(function(){
	$(this).css("background","#122027");
	$(this).children(".exp-r2").slideToggle();
	$(this).children(".exp-r2").children(".exp-r2c2").children(".bar-button").click();
});
$(".exp-item").mouseleave(function(){
	$(this).css("background","#0F1A20");
	$(this).children(".exp-r2").slideToggle(400,function(){
		$(this).children(".exp-r2c2").children("svg").remove();
	});
})

