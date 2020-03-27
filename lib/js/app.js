"use strict";

const countdownDiv = document.getElementById("countdown");
const countdownOver = document.getElementById("countdown-over");
const target = document.getElementById("main-target");
const btnShowVideo = document.getElementById("btn-video");
const videoDiv = document.getElementById("video-div");

window.addEventListener("scroll", noscroll);

let deadline = new Date("mar 27, 2020 21:40:00").getTime();

let x = setInterval(function() {
	let now = new Date().getTime();
	let t = deadline - now;
	let days = Math.floor(t / (1000 * 60 * 60 * 24));
	let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((t % (1000 * 60)) / 1000);
	if (t < 0) {
		clearInterval(x);
		document.getElementById("day").innerHTML = "0";
		document.getElementById("hour").innerHTML = "0";
		document.getElementById("minute").innerHTML = "0";
		document.getElementById("second").innerHTML = "0";
		showWishes();
	} else {
		document.getElementById("day").innerHTML = days;
		document.getElementById("hour").innerHTML = hours;
		document.getElementById("minute").innerHTML = minutes;
		document.getElementById("second").innerHTML = seconds;
	}
}, 1000);

function showWishes() {
	countdownOver.innerHTML = `
      <h2> It's Your Birthday!! </h2>
    `;
	window.removeEventListener("scroll", noscroll);
	target.scrollIntoView({
		behavior: "smooth"
	});
	btnShowVideo.addEventListener("click", () => {
		videoDiv.scrollIntoView({
			behavior: "smooth"
		});
	});
}

function noscroll() {
	window.scroll(0, 0);
}
