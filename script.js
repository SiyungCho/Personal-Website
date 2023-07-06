document.addEventListener("mousemove", function(event) {
    var glow = document.querySelector(".glow");
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
});

$(function(){
	var inputs = $('.timestamp');
	var paras = $('.timestamp-description').find('.timestamp-text');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});

$(document).ready(function(){
    $("#Main-Section-About").show()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").hide()
});

$('#About-Button').hover(function(){
    $("#Main-Section-About").show()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").hide()
});

$('#Projects-Button').hover(function(){
    $("#Main-Section-About").hide()
    $("#Main-Section-Projects").show()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").hide()
});

$('#Experience-Button').hover(function(){
    $("#Main-Section-About").hide()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").show()
    $("#Main-Section-Education").hide()
});

$('#Education-Button').hover(function(){
    $("#Main-Section-About").hide()
    $("#Main-Section-Projects").hide()
    $("#Main-Section-Experience").hide()
    $("#Main-Section-Education").show()
});

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("previous-button")){
        togglePrevious();
        updatePrev();
    }
    else if(e.target.classList.contains("next-button")){
        toggleNext();
        updateNext();
    }
})

function updateNext() {
    // Set the position of each item based on the current index
    const items = document.querySelectorAll('.item');
    items.forEach((item) => { let position = parseInt(item.style.order);
        console.log(position);
        if (position + 1 <= 4){
            position ++;
            item.style.order = position;
            console.log(position);
        } else {
            item.style.order = 0;
            console.log(position);
        } 
    });

    // Apply styles based on the position of each item
    items.forEach((item) => {
        let position2 = parseInt(item.style.order);
        if (position2 == 0) {
            item.classList.add('small-1');
            item.classList.remove('small-2');
        } else if (position2 == 1) {
            item.classList.add('medium-1');
            item.classList.remove('small-1');
        } else if (position2 == 2) {
            item.classList.add('spotlight');
            item.classList.remove('medium-1');
        } else if (position2 == 3) {
            item.classList.add('medium-2');
            item.classList.remove('spotlight');
        } else if (position2 == 4) {
            item.classList.add('small-2');
            item.classList.remove('medium-2');
        }
    });
}

function updatePrev() {
    // Set the position of each item based on the current index
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        let position = parseInt(item.style.order);
        console.log(position);
        if (position - 1 >= 0){
            position --;
            item.style.order = position;
            console.log(position);
        } else {
            item.style.order = 4;
            console.log(position);
        }
    });
    // Apply styles based on the position of each item
    items.forEach((item) => {
        let position2 = parseInt(item.style.order);
        if (position2 == 0) {
            item.classList.add('small-1');
            item.classList.remove('medium-1');
        } else if (position2 == 1) {
            item.classList.add('medium-1');
            item.classList.remove('spotlight');
        } else if (position2 == 2) {
            item.classList.add('spotlight');
            item.classList.remove('medium-2');
        } else if (position2 == 3) {
            item.classList.add('medium-2');
            item.classList.remove('small-2');
        } else if (position2 == 4) {
            item.classList.add('small-2');
            item.classList.remove('small-1');
        } 
    });
}

function togglePrevious(){
    const currentActive = document.querySelector("div.activate");
    const currentIndex = parseInt(currentActive.dataset.index);
    //console.log(currentIndex);

    if(currentIndex - 1 >= 0){
        const previousChild = document.querySelector(`[data-index="${currentIndex-1}"]`);
        //console.log(previousChild)
        currentActive.classList.remove("activate");
        previousChild.classList.add("activate");
    }
    else{
        const previousChild = document.querySelector(`[data-index="${4}"]`);
        //console.log(previousChild)
        currentActive.classList.remove("activate");
        previousChild.classList.add("activate");
    }
}


function toggleNext(){
    const currentActive = document.querySelector("div.activate");
    const currentIndex = parseInt(currentActive.dataset.index);
    //console.log(currentIndex);

    if(currentIndex + 1 <= 4){
        const nextChild = document.querySelector(`[data-index="${currentIndex+1}"]`);
        //console.log(nextChild)
        currentActive.classList.remove("activate");
        nextChild.classList.add("activate");
    }
    else{
        const nextChild = document.querySelector(`[data-index="${0}"]`);
        //console.log(nextChild)
        currentActive.classList.remove("activate");
        nextChild.classList.add("activate");
    }
}