$(function() {
    /* Automatically moves the carousel at 2 seconds*/
    $(".carousel").carousel( { interval: 2000 } );
    /* When button click check if it is a pauase. If pause, stop the carousel with pause funtion */
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            /* Change the pause to play button */
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            /* Otherwise keep cycling because it is already a play button */
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            /* Remove play button and add pause button*/
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    
    /* When clicking on reserve button, show the modal relevant to their ids */
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('show')
    });

    $("#loginButton").click(function(){
        $('#loginModal').modal('show')
    });

});

