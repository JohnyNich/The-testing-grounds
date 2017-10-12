function changeText(element, text) { // This function will change the text of the given element.
	document.getElementById(element).innerHTML = text;
}

function playSound(id) {
	document.getElementById(id).play();
}

var clicks = 0;
function doNotClick() {
	clicks += 1;
	switch (clicks) {}
	if (clicks === 1){
		window.alert("Do not click this button. For clicking it is pointless.");
	} else if (clicks >= 100) {
		window.alert("Why are you still clicking? Are you expecting to find anything at 200 clicks? Current clicks: " + clicks);
	} else if (clicks >= 2) {
		window.alert("Clicking is pointless, and nothing happens when you get to 100 clicks. Current clicks: " + clicks);
	}
}

// Pre-jQuery variables
var clapping = false; // This is for the slow clap

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
	
	// This section deals with the slow clap
	$("#slow_clap").click(function(){
		if (clapping === false) {
			$("#slow_clap").click(function(){
				$(this).attr("src", "../assets/slow_clap.gif");
				clapping = true;
			});
		} else {
			$("#slow_clap").click(function(){
				$(this).attr("src", "../assets/slow_clap.jpg");
				clapping = false;	
				});
			}	
		});
		
	// This section deals with the tables
	$("#table1").click(function(){ // Table 1
		console.log ("Clicked");
		$("#table-result").text("Wrong table, you idiot");
	});
	$("#table2").click(function(){ // Table 2
		console.log("Clicked");
		$("#table-result").text("That's a ruddy maths thing. We don't deal with maths things here. They're boring.");
	});
	$("#table3").click(function(){ // Table 3
		console.log("Clicked");
		$("#table-result").text("That's a pear, you insolute sandwitch.");
	});
	
	// This section deals with the curtain
	$("#table4").click(function(){
		$(this).attr("src", "../assets/table-correct.png");
		playSound("zelda");
	});
});