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

// This is where jQuery code begins
$(document).ready(function(){
	$("#monster").hide();
	$("#watermelon").click(function(){
		$(this).effect("explode");
		$("#misery").text("You monster, you killed him.");
		console.log("Done");
	});
	$("#text-entry-submit").click(function(){ // WHen the entry button is pressed...
		$("#text-entry-result").text($("#text-entry").val());
	});
});