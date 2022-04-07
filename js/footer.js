document.querySelector("#site-title").addEventListener("click",function(){
		var list_img = ["","https://cdn.jsdelivr.net/gh/lingkawaii/PicGo/img/Sea1of1clouds1云海.jpg", "https://cdn.jsdelivr.net/gh/lingkawaii/PicGo/img/REMEMBER.png", "https://cdn.jsdelivr.net/gh/lingkawaii/PicGo/img/Red1Temple.jpg", "https://cdn.jsdelivr.net/gh/lingkawaii/PicGo/img/azur1lane.jpg"]
		var random = Math.ceil(Math.random()*4)
		
		document.querySelector("#page-header").attributes.style.value = "background-image: url(" + list_img[random] + ')'
});