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
	// ocultamos los contenidores
		ajustesinicialescontenidor();
		function ajustesinicialescontenidor() {
			$("#content1").hide();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
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
	$(document).ready(function() {

		$("#uno").click(function(){
			$("#content1").show();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
		});
		$("#dos").click(function(){
			$("#content1").hide();
			$("#content2").show();
			$("#content3").hide();
			$("#content4").hide();
		});
		$("#tres").click(function(){
			$("#content1").hide();
			$("#content2").hide();
			$("#content3").show();
			$("#content4").hide();
		});
		$("#cuatro").click(function(){
			$("#content1").hide();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").show();
		});
	});
// final del jquery sentencias
});
