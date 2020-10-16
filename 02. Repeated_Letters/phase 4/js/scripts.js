function repeat() { 
        let nameLetter = ['c', 'l', 'a', 'r', 'i', 's', 's', 'a']; // separated variable for my name letters
        let surnameLetter = ['a', 'r', 'd', 'o', 'n']; // separated variable for my surname letters
        let nameList = new Array(); // separated array for my name letters
        let surNameList = new Array(); // separated array for my name letters
        let fullNameList = new Array(); // array unified with my name + surname letters

        //  adds characters to each of the arrays especified
        for (let i = 0; i < nameLetter.length; i++) {
            nameList.push(nameLetter[i]); 
        }

        for (let i = 0; i < surnameLetter.length; i++) {
            surNameList.push(surnameLetter[i]);
        }

        //  combines both my name + surname arrays into one array
        fullNameList.push(...nameList); // ( ... ) includes all elements of an array
        fullNameList.push(" ");
        fullNameList.push(...surNameList); // ( ... ) includes all elements of an array

        //  prints full name
        document.getElementById("demo").innerHTML += fullNameList;
    }

/*
WEB DONDE ME INDICA COMO COMBINAR ARRAYS IN JAVASCRIPT:
https://dzone.com/articles/ways-to-combine-arrays-in-javascript
*/