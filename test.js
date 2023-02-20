// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:


// sum(3) = 3
// sum(5) = 8
// sum(20) = 28


function adder() {
    let sum = 0;
    return function(num1) {
        return sum += (num1);
    }
};

const result  = adder();


console.log(result(3));
console.log(result(5));
console.log(result(20));
