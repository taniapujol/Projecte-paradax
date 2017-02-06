$(document).ready(function(){
	//Ajustamos el div sroll al final de la página
		var height = $(window).height();

		ajustesiniciales();
		function ajustesiniciales(){
			$("#etiqueta_scroll").css({"margin-top":height - 70 + "px"});
			$("#logo").css({"margin-top": "150px", "width": "350px","height":"350px"});
			$("header").css({"background-color": "transparent"});
			$("nav li").css({"color":"transparent"});
			$("nav a").css({"color":"transparent"});
		};

	// Aplicamos el efecto scroll de transición del icono al menu
	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});
				$("header").css({"background-color":"#000"});
				$("nav li").css({"color":"#fff"});
				$("nav a").css({"color":"#fff"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "350px","height":"350px"});
				$("header").css({"background-color":"transparent"});
				$("nav li").css({"color":"transparent"});
				$("nav a").css({"color":"transparent"});

				flag = false;
			}
		}
	});
	$(document).scroll(function(){
			var scrollTop = $(this).scrollTop();
			var pixels = scrollTop / 70;

			if(scrollTop < height){
				$("section#contenedor_general").css({
					"-webkit-filter": "blur(" + pixels + "px)",
					"background-position": "center -" + pixels * 10 + "px"
				});

			};

	});
	$(document).ready(function() {
	    $('.post').addClass("hidden").viewportChecker({
	        classToAdd: 'visible animated bounceInRight',
	        offset: 100
	       });
	});

		// switch ($(".menu if uno").click()) {
		// 	case expression:
		//
		// 		break;
		// 	default:
		//
		// }
});
