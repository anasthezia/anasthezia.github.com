$(document).ready(function(){
	$(".com_answer").click (function(){
		$(".answer").remove(); 
		$(this)
		.parent()
		.after("<form class='add_comment answer clearfix' action='#'>"+
			"<input type='text' class='text com_field' name='Имя' placeholder='Представьтесь, пожалуйста'>"+
			"<textarea placeholder='Введите текст сообщения' value='' name='message' class='message com_field'></textarea>"+
			"<input  class='button js_send' type='submit' value='Добавить комментарий'></form>");
   	  return false;
   	});
  

		 $(".js_send").live("click", thanks);

		 function thanks(event){
		 	$("div.com_error").remove();
		 	$(".add_comment")
			.removeClass("current");
		 	$(this)
		 		.parent()
		 		.addClass("current");
		 	$fieldsCount=$(".current .com_field").length;	
		 	var $error = $fieldsCount;

		 	$(".current .com_field").each(function () {
				var valueLength = jQuery.trim($(this).val()).length;
				if(valueLength == ''){
					$(this).css('background','#FFEDEF');
				}
				else{
					$error = $error-1;
					$(this).css('background','#fff');
				};
			});

	 		if($error == '0'){
   	   	  	$(".answer").remove(); 
	    	 		alert("Благодарим за ваш комментарий! Он будет отображён на этой странице после проверки модератором.");
	    	 	}
	    	 	else{
	    	 		//alert("Вы забыли заполнить некоторые поля!")
	    	 		$(this) .after("<div class='com_error'><span>!</span>Вы забыли заполнить некоторые поля</div>");
	    	 		$(".com_error").animate({"left": "-22px"}, 1000);

	    	 	};	   
		return false;
		};

		$('.com_field').live ("focus", function(){
			$(this).css('background','#fff');
			$("div.com_error").remove();
		});
	  
});