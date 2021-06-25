$(document).ready(function () {
    var click = false;
    menuBlockCenter();
    $(".accordion-button").click(function () {
        menuBlockCenter();
    });

    function menuBlockCenter() {
        $("#menu-block").css("top", (($(document).height() - $("#menu-block").height()) / 40));
    }

    $("#open-close-btn").click(function () {
        if (click) {
            $("#open-close-menu").animate({left: '-305px'}, "slow");
            $("#menu-btn-svg").removeAttr("style");
            click = false;
            console.log(click);
        } else {
            $("#open-close-menu").animate({left: '0'}, "slow");
            $("#menu-btn-svg").css({'transform': 'rotate(-180deg)'});
            click = true;
            console.log(click);
        }
        console.log(click)

    });

});