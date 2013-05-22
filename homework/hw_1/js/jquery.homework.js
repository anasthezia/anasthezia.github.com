$(document).ready(function(){
  	$("#log-link").click(function(){
  		$(".login").fadeIn(300);
  		$(".page").css("-webkit-filter","blur(3px) contrast(30%)");
  			$("#log_cancel").click(function(){
	  			$(".login").fadeOut(300);
	  			$(".page").css("-webkit-filter", "none");
  			});

  	});
});