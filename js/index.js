function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(55.192091,36.774784),
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.192091,36.774784),
        map: map
    });
    var iw1 = new google.maps.InfoWindow({
        content: "<p class='incubator'>База отдыха «Головинка»</p> Калужская область<br><a href='http://baza-golovinka.ru/'>Головинка</a>"
    });

    iw1.open(map, marker);
    google.maps.event.addListener(marker, "click", function (e) {
        iw1.open(map, this);
    });
}
$(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
});
function toggle() {
    $('.hid').toggle();
    $('.more-gosti').toggle()
}

function cool(i) {
    $('.opisanie').css('display', 'block').css('bottom', '0').css('height', '320');

    if (i == 0) {
        $('.opisanie').css('background-color', 'rgb(81, 13, 129)');
        $('.programm-text').css('display', 'none');
        $('.cool_feature_text').css('display', 'none');
        $('.bio-text').css('display', 'none');
        $('.robot-text').css('display', 'block');
    }
    if (i == 1) {
        $('.opisanie').css('background-color', 'rgb(67, 180, 152)');
        $('.robot-text').css('display', 'none');
        $('.cool_feature_text').css('display', 'none');
        $('.bio-text').css('display', 'none');
        $('.programm-text').css('display', 'block');
    }
}

function ntcool(i) {
    $('.opisanie').css('display', 'block');

    if (i == 2) {
        $('.opisanie').css('background-color', 'rgb(238, 229, 58)');
        $('.programm-text').css('display', 'none');
        $('.cool_feature_text').css('display', 'block');
        $('.bio-text').css('display', 'none');
        $('.robot-text').css('display', 'none');
    }
    if (i == 3) {
        $('.opisanie').css('background-color', 'rgb(255, 140, 102)');
        $('.robot-text').css('display', 'none');
        $('.cool_feature_text').css('display', 'none');
        $('.bio-text').css('display', 'block');
        $('.programm-text').css('display', 'none');
    }
}

function awesome() {
    $('.opisanie').toggle().css('bottom', '').css('height', '305');
    $('.robot-text').css('display', 'none');
    $('.programm-text').css('display', 'none');
    $('.cool_feature_text').css('display', 'none');
    $('.bio-text').css('display', 'none');
}
