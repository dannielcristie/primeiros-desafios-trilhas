// 1
const gradeAverage = (g1, g2, g3) => {
    let avg = (g1 + g2 + g3) / 3
    console.log(avg)
};
//gradeAverage(7, 10, 1);


//2
const maxAndMinNumber = (number_list) => {

    let min = number_list[0];
    let max = number_list[0];

    number_list.forEach(number => {
        if (number < min) {
            min = number;
        } else if (number > max) {
            max = number;
        }
    });

    console.log(`Menor: ${min} - Maior: ${max}`)
};
//maxAndMinNumber([15, 8, 90, 75, 102, 6, 2]);

//3
const orderBottleNumbers = (bottle_list) => {

    const sortBottles = bottle_list.sort((a, b) => a - b);
    console.log(sortBottles);
};
//orderBottleNumbers([12, 5, 23, 17, 8, 14, 3, 19]);

//4
const findPrimeNumbers = (number_list) => {

    const prime_numbers = [];

    number_list.forEach(number => {
        let prime_number = true;

        if (number <= 1) {
            prime_number = false;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    prime_number = false;
                    break;
                };
            };
        };

        if (prime_number) {
            prime_numbers.push(number);
        };
    });

    orderBottleNumbers(prime_numbers);
};
//findPrimeNumbers([23, 16, 11, 8, 19, 14, 5, 21]);

//5
const wordCounter = (words) => {
    word_list = words.split(" ");

    console.log(word_list.length);
};

//wordCounter("What is Lorem Ipsum?");

//6
const factorial = (number) => {

    if (number < 0) {
        return -1;
    } else if (number == 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    };

};
//console.log(factorial(5));

//7 
const valueTotal = (value1, value2, value3) => {
    let sum = value1 + value2 + value3;

    console.log(`Valor total ${sum.toFixed(2)}`)
};

//valueTotal(2.50, 3.75, 1.99);

//8
const valueFine = (days) => {
    let fine = days * 0.5;

    console.log(`Valor da multa é:  ${fine.toFixed(2)}`)
};

//valueFine(7);

const remainHP = (strikes) => {
    hp_left = 100 - (20 * strikes);

    console.log(`Ainda resta:  ${hp_left} de HP.`)
};

//remainHP(3);


//10
const upCaseCounter = (words) => {
    let total = 0;
    words.split(" ").forEach(word => {
        word.split("").forEach(char => {
            if (char.toUpperCase() == char) {
                total++;
            }
        });
    });

    console.log(total);
};
//upCaseCounter("LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY");

//11

const calculateAge = (date) => {

    const birthDate = new Date(date);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    console.log(age);
};

calculateAge("1996-08-30")