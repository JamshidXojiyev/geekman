$(document).ready(function () {
    // $("#map-img").css("left", ($("#map-block").width()-$("#map-img").width())/2);
    // $("map").css("left", ($("#map-block").width()-$("#map-img").width())/2);
    var btnMenu = true;
    $(".menu-open-closed").click(function(){
        console.log("qwer");
        if (btnMenu) {
            $("#btn-open-closed").css("transform", "rotate(180deg)");
            $("#buttons").css("display", "none");
            $("#buttons-block").css("height", "30px");
            btnMenu = false;               
        } else {
            $("#btn-open-closed").removeAttr('style');
            $("#buttons").removeAttr('style');
            $("#buttons-block").removeAttr('style');
            btnMenu = true;
        }
    });
});