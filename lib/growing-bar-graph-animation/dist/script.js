$(".bar-button").click(function(){
	$(this).parent().append(
	`<svg width="300" height="120">
		<rect id="bar1a" y="0"/>
		<rect id="bar2a" y="40"/>
		<rect id="bar3a" y="80"/>
		<text class="bar-label" x="10" y="20">Label 1</text>
		<text class="bar-label" x="10" y="60">Label 2</text>
		<text class="bar-label" x="10" y="100">Label 3</text>
    </svg>`);

    var rectTag = $(this).parent().children("svg").children("rect")
    rectTag.attr("x","0");
	rectTag.attr("height","30");
	rectTag.attr("width",".9%");
})


