const slides = document.getElementsByClassName('box');

let counter = 1;

slider(counter);

function plusslide(n){
    slider(counter += n);
    console.log(slides.length);
}
function slider(n){
    let i;
    
    if(n > slides.length){
        counter = 1;
    }
    if(n < 1){
        counter = slides.length;
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[counter - 1].style.display = "block";
}
