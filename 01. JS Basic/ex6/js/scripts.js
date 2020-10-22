let phrase = "Tinc un cotxe de color blau";

let newPhrase = phrase.split("blau").join("verd"); /* 1st splits string into pieces and searches: string.split(search); 2nd joins pieces by replacing = string.join(replace); */
console.log(newPhrase);

let phraseU = phrase.replaceAll('o', 'u'); /* replaces all string ocurrences: string.replaceAll(search, replaceWith) */
console.log(phraseU);