//localStorage.clear();
var defaultPage = localStorage.getItem("defaultPage");

if (!defaultPage){
	defaultPage = "template";
}

console.log(localStorage.getItem("defaultPage"));
$(function(){
	$("#include-content").load(defaultPage + ".html");
});

$(window).unload(function(){
  localStorage.clear();
});

function loadContent(element) {
	localStorage.setItem("defaultPage", element.textContent.replace(/\s/g, '').toLowerCase());
	$("#include-content").load(element.textContent.replace(/\s/g, '').toLowerCase() + ".html");
	
}
