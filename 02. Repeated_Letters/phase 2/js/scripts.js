function repeat() { 
    let nameLetter = ['c', 'l', '4', 'r', 'i', 's', 's', 'a'];
    let nameList = new Array();

    for (let i = 0; i < nameLetter.length; i++) {
        nameList.push(nameLetter[i]);
    }

    for (i of nameList) {
        switch(i) {
            case "a":
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                document.getElementById("demo").innerHTML += "Letter " + i + " is a Vowel <br>";
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                document.getElementById("demo").innerHTML += "Letter " + i + " is a number, and people's name don't have numbers! <br>";
                break;

            default:
                document.getElementById("demo").innerHTML += "Letter " + i + " is a Consonant <br>";
                break;
        }
    }
}