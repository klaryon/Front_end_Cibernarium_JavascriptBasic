function calculator(operator, value1, value2) {
    let result;

    switch (operator) {
        case "+":
        result = value1 + value2;
        break;
        case "-":
        result = value1 - value2;
        break;
        case "*":
        result = value1 * value2;
        break;
        case "/":
        result = value1 / value2;
        break;
    }

    return result;
}   

let calculate = calculator("-", 40, 20);
console.log(calculate);