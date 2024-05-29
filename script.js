//your JS code here. If required.
window.addEventListener("resize", getscreensize);

function getscreensize(){
	let element = document.getElementById("sizeInfo");
	let x = document.documentElement.clientWidth;
	let y = document.documentElement.clientHeight;
	element.innerHTML= `<h1>Width: ${x} and Height: ${y}</h1>`;
}