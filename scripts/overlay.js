"use strict";
var overlay = document.getElementById("overlay");

function on() {
  overlay.style.display = "block";
	
	setTimeout(function() {
		overlay.style.opacity = 1;
	}, 10);
}

function off() {
	
	setTimeout(function () {
		overlay.style.display = "none";
	}, 200);
	
  overlay.style.opacity = 0;
}

window.onload = function () {
  off();
};