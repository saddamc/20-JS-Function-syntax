function vaatkhao(){
    console.log("hand wash kora aso")
    console.log("boso")
    console.log("plate e khabar dhabar nao")
    console.log("gopat gopat kore khao")
}

// vaatkhao();

// 3 --> 3*3 = 9
// 4 --> 4*4 = 16 
// 5 --> 5*5 = 25
// 11 --> 11*11 = 121

function square (number) {
    console.log('value of the number parameter: ', number);
    const borgo = number * number;
    console.log('square of the given number is: ', borgo);
}

square(4);   /*** 4 * 4 result = 16 ***/
console.log('------------- ');
square(12);
square(5);
square(405);

function add(num1, num2) {
    const sum = (num1 + num2);
    console.log(sum);
}

add(5, 71);
add(65, 31);

function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(total);
}
addAll(3, 4, 5, 6, 12); /*** result = 30  ***/
addAll(6, 7, 8, 9, 13); /*** result = 43  ***/