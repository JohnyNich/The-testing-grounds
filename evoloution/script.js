function changeText(element, text) { // This function will change the text of the given element.
	document.getElementById(element).innerHTML = text;
}

var clicks = 0
function doNotClick() {
	clicks += 1
	switch (clicks) {}
	if (clicks == 1){
		window.alert("Do not click this button. For clicking it is pointless.");
	} else if (clicks >= 100) {
		window.alert("Why are you still clicking? Are you expecting to find anything at 200 clicks? Current clicks: " + clicks)
	} else if (clicks >= 2) {
		window.alert("Clicking is pointless, and nothing happens when you get to 100 clicks. Current clicks: " + clicks);
	}
}
