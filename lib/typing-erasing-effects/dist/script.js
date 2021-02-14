var captionLength = 0;
var capL = ['Full-Stack Web Developer',
           'Competitive Coder',
           'Data Scientist and<br>Analyst',
           'Python and C++ Programmer',
           'Consistent Kaggler'];

var caption = '';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 1500);
    captionEl = $('#caption');
    n = capL.length;
    i=0; p=0;
    console.log("you")
    while(p<5000){
        
        setTimeout(() => {
            testTypingEffect(capL[i]);
            i++;
            if(i==n){
                i=0;
            }
        },p*1000);  
        p+=3;
        setTimeout(() => {
            testErasingEffect();
        },p*1000);
        p+=2.5;
    }
});

function testTypingEffect(s) {
    caption = s;
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        $('#caption').html("Full-Stack Web Developer");
        setTimeout('testErasingEffect()', 1000);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }	
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'slow', 'swing').animate({
        opacity: 1
    }, 'slow', 'swing');
}