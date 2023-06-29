document.addEventListener("mousemove", function(event) {
    var glow = document.querySelector(".glow");
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
});

$(document).ready(function(){
    $("#Main-Section-About").show()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").hide()
});

$('#About-Button').click(function(){
    $("#Main-Section-About").show()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").hide()
});

$('#Projects-Button').click(function(){
    $("#Main-Section-About").hide()
    $("#Main-Section-Projects").show()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").hide()
});

$('#Experience-Button').click(function(){
    $("#Main-Section-About").hide()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").show()
    $("#Main-Section-Education").hide()
});

$('#Education-Button').click(function(){
    $("#Main-Section-About").hide()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").show()
});