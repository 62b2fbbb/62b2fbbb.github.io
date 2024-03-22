let img1 = document.getElementById("img1");
let text1 = document.getElementById("figcaption1");
let text2 = document.getElementById("figcaption2");
let img2 = document.getElementById("img2");
let text3 = document.getElementById("figcaption3");
let img3 = document.getElementById("img3");
function textanimation(trigger,figcaption){
trigger.addEventListener("mouseenter", ()=>{
		console.log("textanimation in use");
		event.preventDefault();
		trigger.style.animationName = "upper";
		trigger.style.animationDuration = "1.0s";
		trigger.style.animationFillMode = "forwards";
		trigger.style.animationTimingFunction = "ease-out";
		trigger.style.pointerEvents = "none";
		trigger.style.cursor = "not-allowed"
		figcaption.style.animationName = "downer";
		figcaption.style.animationDuration = "0.8s";
		figcaption.style.animationFillMode = "forwards";
		figcaption.style.animationTimingFunction = "ease-out";
		setTimeout(function(){
			trigger.style.pointerEvents = "none";
		},2000)
	})
trigger.addEventListener("mouseleave", () => {
		setTimeout(function() {
			console.log("leave is ok");
		trigger.style.animationName = "returnimage";
		trigger.style.animationDuration = "1.0s";
		trigger.style.animationFillMode = "forwards";
		trigger.style.animationTimingFunction = "ease-out";
		
		trigger.style.cursor = "allowed"
		figcaption.style.animationName = "returntext"
		figcaption.style.animationDuration = "0.8s";
		figcaption.style.animationFillMode = "forwards";
		figcaption.style.animationTimingFunction = "ease-out";
		},1000)
		setTimeout(function(){
			trigger.style.pointerEvents = "auto";
		},4000)
})
}
function loader (){
	
	textanimation(img1,text1);
	textanimation(img2,text2);
	textanimation(img3,text3);
}
window.onload = loader();
