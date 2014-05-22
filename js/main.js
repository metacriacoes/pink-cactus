/* Javascript */
(function(window, undefined){
	"use strict";
	var document = window.document;

	function vibrate(num){
		navigator.notification.vibrate(num);
	}

	function init(){

	}

	window.app = {
		vibrate : vibrate
	};
	window.onload = init;
})(window);