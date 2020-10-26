const hearts = ['heart1', 'heart2', 'heart3', 'heart4', 'heart5']; /* we will search these items in index.html */
const arrayHearts = []; /* we will save those items to an array*/

hearts.forEach(function(heart) {
    arrayHearts.push(document.getElementById(heart)); /* push to named each id hearts to arrayHearts */ 
})

console.log(arrayHearts); /* prints to console, double check if array it's ok */

function resetColor() {
    document.onclick = function(div) {
        if(div.target.id == 'heart_group') { /* we are looking for a <div> id, so we use target */
            arrayHearts.forEach(stylesHeart);
            arrayHearts.forEach(stylesTextShadow);
        }
    }
}

function stylesHeart(heart) {
    heart.style.color = "salmon"; /* we'll return the hearts to their original state */
}

function stylesTextShadow(shadow) {
    shadow.style.textShadow = "none"; /* we'll remove the shiny text shadow */
}

window.addEventListener('load', resetColor); /* starts when window loads */




/* --- BASIC REPETITIVE CODE ---

let heart1 = document.getElementById('heart1');
let heart2 = document.getElementById('heart2');
let heart3 = document.getElementById('heart3');
let heart4 = document.getElementById('heart4');
let heart5 = document.getElementById('heart5');

function resetColor() {
    document.onclick = function(div) {
        if(div.target.id == 'heart_group') { 
            heart1.style.color = "salmon"; 
            heart2.style.color = "salmon";
            heart3.style.color = "salmon";
            heart4.style.color = "salmon";
            heart5.style.color = "salmon";
            heart1.style.textShadow = 'none'; 
            heart2.style.textShadow = 'none';
            heart3.style.textShadow = 'none';
            heart4.style.textShadow = 'none';
            heart5.style.textShadow = 'none';
        }
    }
}
*/