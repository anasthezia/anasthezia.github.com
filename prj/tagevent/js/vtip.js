$(document).ready(function(){

	//Hide (Collapse) the toggle containers on load
	$(".togglebox1").hide(); 

	//Slide up and down on hover
	$(".tb").click(function(){
		$(this).next(".togglebox1").slideToggle("slow");
	});

});