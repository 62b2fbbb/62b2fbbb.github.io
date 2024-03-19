let img1 = document.getElementById("img1");
let text1 = document.getElementById("figcaption1");
function textanimation(trigger,figcaption){
trigger.addEventListener("mouseover", ()=>{
		console.log("textanimation in use");
		trigger.style.animationName = "upper";
		trigger.style.animationDuration = "1.0s";
		trigger.style.animationFillMode = "forwards";
		trigger.style.animationTimingFunction = "ease-out";
		figcaption.style.animationName = "downer";
		figcaption.style.animationDuration = "0.8s";
		figcaption.style.animationFillMode = "forwards";
		figcaption.style.animationTimingFunction = "ease-out";
	})
trigger.addEventListener("mouseleave", () => {
		setTimeout(function() {console.log("leave is ok");
		trigger.style.animationName = "returnimage";
		trigger.style.animationDuration = "1.0s";
		trigger.style.animationFillMode = "forwards";
		trigger.style.animationTimingFunction = "ease-out";
		figcaption.style.animationName = "returntext"
		figcaption.style.animationDuration = "0.8s";
		figcaption.style.animationFillMode = "forwards";
		figcaption.style.animationTimingFunction = "ease-out";
						},1000)
		
})
}
function loader (){
	
	textanimation(img1,text1)
}
window.onload = loader();
