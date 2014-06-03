'use strict';



// Create our module for the app and its dependencies
var contactsApp = angular.module('contactsApp', [
	'contactsControllers',
	'ngAnimate'
]);



function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {  
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {      
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
    ele.className=ele.className.replace(reg,' ');  
  }
}
 
 
// Example
 
var searchBtn = document.getElementById('filter-toggle-btn'),
	searchFilter = document.getElementById('search-filter');
 
searchBtn.onclick = function () {
	if (hasClass(searchBtn, 'opened')) {
		removeClass(searchFilter, 'open');
		removeClass(searchBtn, 'opened');
	} else {
		addClass(searchFilter, 'open');
		addClass(searchBtn, 'opened');
	}
}
