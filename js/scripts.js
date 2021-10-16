$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        //This function checks for a pause button
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            // If it has the pasue button, pause the carousel and remove the pause  button to add play button
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            // Else it has a play button so cycle through play and replace play button with pause button
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});