function showLocationDetails(event){
    var x= $(event).data("value");
    $(".location-information-container").css("display" , "none");
    $("#location"+x).css("display", "flex");
}