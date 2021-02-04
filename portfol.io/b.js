


window.addEventListener('scroll',function(){
	yscroll = window.pageYOffset;
	console.log(yscroll)
	if(yscroll>50){
		$('#front-page').css('opacity',2-yscroll*0.01)
		$("#main-content").slideDown(2000);
	}	
	if(yscroll>600){
		$("#about-me").slideDown(2000);
	}
})
