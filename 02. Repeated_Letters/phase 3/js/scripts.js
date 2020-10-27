function repeat() { 
    let nameLetter = ['c', 'l', 'a', 'r', 'i', 's', 's', 'a'];
    let nameList = new Array();

    for (let i = 0; i < nameLetter.length; i++) {
        nameList.push(nameLetter[i]);
    }

    let nameDicc = new Map();

    for (item of nameList) {
        if(!nameDicc.has(item)) {
        nameDicc.set(item, 1);
        }
        else {
        nameDicc.set(item, (nameDicc.get(item)) + 1);
        }
    }
    
    for (item of nameDicc) {
        document.getElementById("demo").innerHTML += (item + "<br>");
    }       
}