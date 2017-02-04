$(document).ready(function(){
	//Aplica el fondo al banner
		$("#banner").css({"height":$(window).height() + "px"});

	//Ajustamos el div sroll al final de la página
		var height = $(window).height();
		ajustesiniciales();
		function ajustesiniciales() {
			$("section#scroll").css({"margin-top":height - 80 + "px"});

		}
// Aplicamos el efecto scroll de transición del icono al menu
	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("header").css({"background-color": "#fff"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});
				$("header").css({"background-color": "transparent"});

				flag = false;
			}
		}


	});

});
