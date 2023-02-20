// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:


// sum(3) = 3
// sum(5) = 8
// sum(20) = 28


// function adder(num1) {
//     return function(num2) {
//         return num1 + num2;
//     }
// }

// let add3 = adder(3);
// let add5 = adder(5);
// let add8 = adder(8);

// console.log(add3);
// console.log(add3(5));
// console.log(add8(20));



function createSum () {
    let total = 0;
    return function sum(x) {
        return total += x;
    }
};


const result = createSum();


console.log(result(3));
console.log(result(5));
console.log(result(20));
