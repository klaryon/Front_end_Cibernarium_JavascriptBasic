function repeat() { 
    let nameLetter = ['c', 'l', 'a', 'r', 'i', 's', 's', 'a'];

    for (let i = 0; i < nameLetter.length; i++) {
        document.getElementById("demo").innerHTML += nameLetter[i];
    }
}