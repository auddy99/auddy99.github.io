
$("#main-content").slideDown(2000);

window.addEventListener('scroll',function(){
	let scroll = window.pageYOffset;
	$('.scrolled').each(function(){
		$(this).css('transform','translateY(-'+parseInt($(this).attr('speed'))*scroll+'px)')		
		$(this).css('opacity',1-0.003*scroll)
	})
	
})
