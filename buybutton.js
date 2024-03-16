let buy = document.getElementById("buybtn");
let header = document.getElementById("header");
let main = document.getElementById("main");
let mainmenu = document.getElementById("mainmenu");
buy.addEventListener("click", function(){
	main.style.backgroundColor = "red";
	main.style.filter = "blur(25px)";
	header.style.zIndex = "7";
	header.style.opacity = "70%";
	mainmenu.classList.add("menu");
	mainmenu.classList.remove("menuhidden");
})
