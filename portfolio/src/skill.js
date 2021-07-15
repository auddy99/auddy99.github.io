var X=0, Y=-30;
var skillList = [
	["<b>Machine Learning</b>", "ml", 602+X, 1793+Y],
	["Flask", "fl", 686+X, 2025+Y],
	["Deep Learning", "dl", 434+X, 1989+Y],
	["OpenCV", "oc", 392+X, 2167+Y],
	["Tensorflow", "nn", 585+X, 2166+Y],
	["Python", "py", 698+X, 1933+Y],
	["Kaggle", "kg", 418+X, 1852+Y],
	["<b>Languages</b>", "lg", 1077+X, 1844+Y],
	["C++", "cp", 891+X, 1937+Y],
	["Competitive Coding", "cc", 958+X, 2096+Y],	
	["C#", "cs", 1098+X, 2028+Y],
	["Java", "jv", 1180+X, 1950+Y],
	["<b>Development</b>", "dv", 827+X, 2210+Y],
	["XML", "xm", 1054+X, 2248+Y],
	["Web Dev", "wb", 680+X, 2295+Y],
	["HTML/CSS", "ht", 417+X, 2305+Y],
	["JavaScript", "js", 504+X, 2466+Y],
	["PHP", "ph", 692+X, 2469+Y],
	["MySQL", "sq", 771+X, 2385+Y],
	["Installer Setup", "it", 923+X, 2340+Y],
	["Wix Toolset", "wx", 981+X, 2437+Y]
];

skillList.forEach(addSkills);

for(i=0;i<7;i++){
	$("#"+skillList[i][1]).css("background","#a9fba9");
}
for(i=7;i<12;i++){
	$("#"+skillList[i][1]).css("background","#a3f9ed");
}
for(i=12;i<21;i++){
	$("#"+skillList[i][1]).css("background","#feffa3");
}


$(".skillBox").css("display","none")
function addSkills(skill){
	$("#skills").append(`
		<div id="`+skill[1]+`" class="skillBox"
		style="top:`+skill[3]+`px; left:`+skill[2]+`px">
			<img src="../img/skills/`+skill[1]+`.jpg">
			<span>`+skill[0]+`</span>
		</div>
	`);
}

function skillBegin(){
	skillStart = 1
	setTimeout(function(){
		$(".skillBox:nth-child(2)").fadeIn(1000)
		$(".skillBox:nth-child(9)").fadeIn(1000)
		$(".skillBox:nth-child(14)").fadeIn(1000)
	},2200)
	setTimeout(function(){
		$(".skillBox:nth-child(3)").fadeIn(1000)
		$(".skillBox:nth-child(4)").fadeIn(1000)
		$(".skillBox:nth-child(7)").fadeIn(1000)
		$(".skillBox:nth-child(8)").fadeIn(1000)
		
		$(".skillBox:nth-child(10)").fadeIn(1000)
		$(".skillBox:nth-child(12)").fadeIn(1000)
		$(".skillBox:nth-child(13)").fadeIn(1000)

		$(".skillBox:nth-child(16)").fadeIn(1000)
		$(".skillBox:nth-child(21)").fadeIn(1000)
	},3400)
	setTimeout(function(){
		$(".skillBox:nth-child(5)").fadeIn(1000)
		$(".skillBox:nth-child(6)").fadeIn(1000)
		$(".skillBox:nth-child(11)").fadeIn(1000)
		$(".skillBox:nth-child(15)").fadeIn(1000)
		$(".skillBox:nth-child(16)").fadeIn(1000)
		$(".skillBox:nth-child(17)").fadeIn(1000)
		$(".skillBox:nth-child(18)").fadeIn(1000)
		$(".skillBox:nth-child(19)").fadeIn(1000)
		$(".skillBox:nth-child(20)").fadeIn(1000)
		$(".skillBox:nth-child(22)").fadeIn(1000)
	},4600)
}

