let img1 = document.getElementById("img1");
let text1 = document.getElementById("figcaption1");
function textanimation(trigger,figcaption){
trigger.addEventListener("mouseover", ()=>{
		console.log("textanimation in use");
		figcaption.style.animationName = "downer";
		figcaption.style.animationDuration = "0.7s";
		figcaption.style.animationFillMode = "forwards";
		figcaption.style.animationTimingFunction = "ease-out";
		// figcaption.style.zIndex = "8";
	})
trigger.addEventListener("mouseleave", () => {
		console.log("leave is ok")
		figcaption.style.animationName = "return"
		figcaption.style.animationDuration = "0.7s";
		figcaption.style.animationFillMode = "forwards";
		figcaption.style.animationTimingFunction = "linear";
})
}
function loader (){
	
	textanimation(img1,text1)
}
window.onload = loader();
