		var directionsDisplay;
		var directionsService = new google.maps.DirectionsService();
		var map;

		var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};
		
		function calcRoute(start,end) {
		  var request = {
			origin:start,
			destination:end,
			travelMode: google.maps.TravelMode.DRIVING
		  };
		  directionsService.route(request, function(result, status) {
			if (status == google.maps.DirectionsStatus.OK) {
			  directionsDisplay.setDirections(result);
			}
		  });
		}
		
		function showLocation(position) {            
			var coords = position.coords;
			directionsDisplay = new google.maps.DirectionsRenderer();			
			var cefet =  new google.maps.LatLng(-19.9385953,-43.9999274); 
			var pm = new google.maps.LatLng(-19.9243838,-43.9350508); /*parque*/
			var sp = new google.maps.LatLng(-19.9286682,-43.947037); /*shopping*/
			var casa = new google.maps.LatLng(-19.9385236,-43.9907427); 
			var origem = new google.maps.LatLng(coords.latitude,coords.longitude);
			var diadasemana = new Array(7);
			diadasemana[0] = "Domingo";
			diadasemana[1] = "Segunda-feira";
			diadasemana[2] = "Terca-feira";
			diadasemana[3] = "Quarta-feira";
			diadasemana[4] = "Quinta-feira";
			diadasemana[5] = "Sexta-feira";
			diadasemana[6] = "Sabado";
			d = DiadeHoje()+4;
			var hoje = diadasemana[d];
			var hora = Dia().getHours();
			var minuto = Dia().getMinutes();	
			if (d>0 && d<6){
				alert('Hoje é '+hoje);
				if(hora>=7 && hora<18){
					destino = cefet;
				    alert('e a essa hora('+hora+':'+minuto+') pode me encontrar no CEFET');
				}
				if((hora>=18) || (hora>=0 && hora<7)){
					destino = casa;
				    alert('e a essa hora ('+hora+':'+minuto+') pode me encontrar em casa');
				}
			}
			else if (d==0){
				alert('Hoje é '+hoje+" pode me encontrar no shopping");
				destino = sp;
			}
			else if (d==6){
				alert('Hoje é '+hoje+" pode me encontrar no parque");
				destino = pm;
			}
			else{
				destino = cefet;
			}
			
			var mapOptions = {
			  center: destino,
			  zoom: 15,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			};			
			var mapDiv = document.getElementById('mapdiv');			
			map = new google.maps.Map(mapDiv, mapOptions);
			directionsDisplay.setMap(map);
			calcRoute(origem,destino);			
		}

         function errorHandler(err) {
            if(err.code == 1) {
               alert("Ocorreu um erro na Geolocalizacao: Acesso Negado");
            }else if( err.code == 2) {
               alert("Ocorreu um erro na Geolocalizacao: Posicao Indisponivel!");
            }
         }
			
         function getLocation(){
            if(navigator.geolocation){
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
            }else{
               window.location.href = 'http://browsehappy.com/';
            }
         }
		 		 
		 function DiadeHoje(){
			var D = new Date();			
			dia = D.getDay();			
			return dia;
		}
		function Dia(){
			var D = new Date();					
			return D;
		}
	
			
/*https://developers.google.com/maps/documentation/javascript/directions*/
