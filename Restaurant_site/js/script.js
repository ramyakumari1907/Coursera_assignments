/*$(function () {

$("#navbarToggle").blur(function(event){
	var screenwidth = window.innerWidth;
	if(screenwidth < 768)
	{
		$("#collapsable-nav").collapse('hide');
	}
 });
});

(function (global) {
	var dc = {};
	var homeHtml = "snippets/home-snippet.html";

	var insertHtml = function(selector,html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	}

	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/ajax-loader.gif'></div>";
		insertHtml(selector,html);
	}

	document.addEventListener("DOMContentLoaded",function(event) {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(homeHtml,function(responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
			},false);
	});
	global.$dc = dc;
})(window);*/
var switchMenuToActive = function(){
	var classes = document.querySelector("#navHomeButton").className;
	classes = classes.replace(new RegExp("active","g"),"");
	document.querySelector("#navHomeButton").className = classes;

	var classes = document.querySelector("#navMenuButton").className;
	if(classes.indexOf("active") == -1)
	{
		classes += " active";
		document.querySelector("#navMenuButton").className = classes;
	}
};