document.addEventListener("mousemove", function(event) {
    var glow = document.querySelector(".glow");
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
});