


window.addEventListener('scroll',function(){
	scroll = window.pageYOffset;
	// console.log(scroll)
	$('#front-page').css('opacity',1-scroll*0.002)
	if(scroll>200){
		$('#nav').addClass('navScroll');
	}
	else{
		$('#nav').removeClass('navScroll');
	}
	if(scroll>50){
		$("#main-content").slideDown(2000);
	}	
	if(scroll>600){
		$("#about-me").slideDown(2000);
	}
})
