<script type="text/javascript">
    markers = [];
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(-28.484149376382238, -49.00650854970707),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADTYPE,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false
        };
        map = new google.maps.Map(document.getElementById("mapCanvas"),mapOptions);

        var marker0 = new google.maps.Marker({
            position: new google.maps.LatLng (-28.48579861813847,-49.0115761756897),
            map: map,
            icon: "http://10.0.0.1/arquivos/giassi_construtora/pecas/res_valencia/site/img/icons/icon_predio.png"
        });
        markers.push(marker0);
        var infowindow0 = new google.maps.InfoWindow({
            content: "<div class='infoWindow'>Residencial </div>",maxWidth: 350
        });
        google.maps.event.addListener(marker0, "click", function() {
            infowindow0.open(map,marker0);
        });

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng (-28.6970169,-49.3985382),
            map: map,
            icon: "http://10.0.0.1/arquivos/giassi_construtora/pecas/res_valencia/site/img/icons/icon_restaurante.png"
        });
        
        markers.push(marker1);
        var infowindow1 = new google.maps.InfoWindow({
            content: "<div class='infoWindow'>Restaurante </div>",maxWidth: 350
        });
        google.maps.event.addListener(marker1, "click", function() {
            infowindow1.open(map,marker1);
        });


    }
    google.maps.event.addDomListener(window, "load", initialize);

    $(document).ready(function()
    {
        $('#markerOptions li').on('click', function()
        {
            $('#markerOptions li').removeClass('selectedMarker');
            $(this).addClass('selectedMarker');
            var markerId = $(this).attr('data-marker');
            var lat = markers[markerId].position.lat();
            var lng = markers[markerId].position.lng();
            map.setCenter(new google.maps.LatLng(lat, lng));
            map.setZoom(16);
        });
    });