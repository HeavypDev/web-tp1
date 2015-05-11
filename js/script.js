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
			var destino = new google.maps.LatLng(coords.latitude,coords.longitude);
			
			var mapOptions = {
			  center: cefet,
			  zoom: 16,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			};			
			var mapDiv = document.getElementById('mapdiv');			
			map = new google.maps.Map(mapDiv, mapOptions);
			directionsDisplay.setMap(map);
			calcRoute(cefet,destino);			
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
 /*Minha Localizacao = Latitude : -19.938523699999998
 Longitude: -43.9907427*/
 
 /*Localizacao do Cefet = Latitude : -19.9385953
 Longitude: -43.9999274*/

/*https://developers.google.com/maps/documentation/javascript/directions*/











