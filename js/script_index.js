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
			$("#content5").hide();
			$("#content6").hide();
			$(".peu_container").hide();
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
	// Aplicamos la funcion desenfocar (Blur)
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
	// Aplicamos la animación al menu
	$(document).ready(function() {
	    $('.post').addClass("hidden").viewportChecker({
	        classToAdd: 'visible animated bounceInRight',
	        offset: 100
	       });
	});
	// mostrar y ocultar los contenedores
	$(document).ready(function() {

		$("#uno").click(function(){
			$("#content1").show();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$(".peu_container").show();
		});
		$("#dos").click(function(){
			$("#content1").hide();
			$("#content2").show();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$(".peu_container").show();
		});
		$("#tres").click(function(){
			$("#content1").hide();
			$("#content2").hide();
			$("#content3").show();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$(".peu_container").show();
		});
		$("#cuatro").click(function(){
			$("#content1").hide();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").show();
			$("#content5").hide();
			$("#content6").hide();
			$(".peu_container").show();
		});
		$("#cinco").click(function(){
			$("#content1").hide();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").show();
			$("#content6").hide();
			$(".peu_container").show();
		});
		$("#seis").click(function(){
			$("#content1").hide();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").show();
			$(".peu_container").show();
		});
	});
// final del jquery sentencias
});
