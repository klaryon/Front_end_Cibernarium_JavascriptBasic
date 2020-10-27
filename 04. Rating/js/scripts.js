const hearts = ['heart1', 'heart2', 'heart3', 'heart4', 'heart5']; /* we will search these items in index.html */
const arrayHearts = []; /* we will hearts id to an array*/

hearts.forEach(function(heart) {
    arrayHearts.push(document.getElementById(heart)); /* we search for id, and push each heart id to arrayHearts */ 
})

/* print to console, double check if array it's ok */
console.log(arrayHearts); 

/* resets hearts color */
function resetColor() {
    document.addEventListener('click', searchHeart); /* we will search in the document a <div> for the searchHeart function input */
}

 /* we are looking for a <div> id, so we use target */
function searchHeart(div) {
    if(div.target.id == 'heart_group') {
        arrayHearts.forEach(stylesHeart);
        arrayHearts.forEach(stylesTextShadow);
    }
}

/* styles the hearts to their original state */
function stylesHeart(heart) {
    heart.style.color = "salmon"; 
}

/* removes the shiny text shadow */
function stylesTextShadow(shadow) {
    shadow.style.textShadow = "none"; 
}

/* resets colors when window loads */
window.addEventListener('load', resetColor); 




