
// 1
const gradeAverage = () => {
    const g1 = parseFloat(document.getElementById('primeiraNota').value) || 8;
    const g2 = parseFloat(document.getElementById('segundaNota').value) || 9;
    const g3 = parseFloat(document.getElementById('terceiraNota').value) || 7;
    let avg = (g1 + g2 + g3) / 3;
    document.getElementById('resultadoquestao1').innerText = "A média: " + avg.toFixed(2);
    console.log(avg)
};
//gradeAverage(7, 10, 1);


//2
const maxAndMinNumber = () => {

    const inputValues = document.getElementById('listaNumeros').value;

    let number_list;

    if (inputValues) {
        number_list = inputValues.split(",");
    } else {
        number_list = [15, 8, 90, 75, 102, 6, 2];
    }
    let min = number_list[0];
    let max = number_list[0];

    number_list.forEach(number => {
        let number_aux = Number(number);
        if (number_aux < min) {
            min = number_aux;
        } else if (number_aux > max) {
            max = number_aux;
        }
    });
    document.getElementById('resultadoquestao2').innerText = `Menor: ${min} e Maior: ${max}`;

    console.log(`Menor: ${min} - Maior: ${max}`)
};
//maxAndMinNumber([15, 8, 90, 75, 102, 6, 2]);

//3
const orderBottleNumbers = () => {

    const inputValues = document.getElementById('listaFrascos').value;
    let bottle_list;

    if (inputValues) {
        bottle_list = inputValues.split(",");
    } else {
        bottle_list = [12, 5, 23, 17, 8, 14, 3, 19];
    }
    const sortBottles = bottle_list.sort((a, b) => a - b);

    document.getElementById('resultadoquestao3').innerText = `Frascos ordenados: ${sortBottles}`;

    console.log(sortBottles);
};
//orderBottleNumbers([12, 5, 23, 17, 8, 14, 3, 19]);

//4
const findPrimeNumbers = () => {

    const inputValues = document.getElementById('listaDeNumeros').value;
    const prime_numbers = [];

    let number_list;

    if (inputValues) {
        number_list = inputValues.split(",");
    } else {
        number_list = [23, 16, 11, 8, 19, 14, 5, 21];
    }

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

    prime_numbers.sort((a, b) => a - b);

    document.getElementById('resultadoquestao4').innerText = `Numeros primos: ${prime_numbers}`;

    orderBottleNumbers(prime_numbers);
};
//findPrimeNumbers([23, 16, 11, 8, 19, 14, 5, 21]);

//5
const wordCounter = () => {

    const words = document.getElementById('phrase').value || "What is Lorem Ipsum?";

    word_list = words.split(" ");

    document.getElementById('resultadoquestao5').innerText = `A frase tem : ${word_list.length} palavra(s).`;

    console.log(word_list.length);
};

//wordCounter("What is Lorem Ipsum?");

//6
const factorial = () => {

    const number = document.getElementById('factorialNumber').value || 12;

    const calcFactorial = (numberToCalc) => {
        if (numberToCalc < 0) {
            return -1;
        } else if (numberToCalc == 0) {
            return 1;
        } else {
            return (numberToCalc * calcFactorial(numberToCalc - 1));
        };
    }

    const result = calcFactorial(number);
    document.getElementById('resultadoquestao6').innerText = ` Resultado da fatorial: ${result}`;

};
//console.log(factorial(5));

//7 
const valueTotal = () => {

    const value1 = parseFloat(document.getElementById('value1').value) || 2.50;
    const value2 = parseFloat(document.getElementById('value2').value) || 3.75;
    const value3 = parseFloat(document.getElementById('value3').value) || 1.99;

    let sum = value1 + value2 + value3;

    document.getElementById('resultadoquestao7').innerText = `Valor total:  R$ ${sum.toFixed(2)}`;

    console.log(`Valor total R$ ${sum.toFixed(2)}`)
};

//valueTotal(2.50, 3.75, 1.99);

//8
const valueFine = () => {

    const days = parseInt(document.getElementById('days').value) || 7;

    let fine = days * 0.5;

    document.getElementById('resultadoquestao8').innerText = `Valor da multa é: R$ ${fine.toFixed(2)}`;

    console.log(`Valor da multa é: R$ ${fine.toFixed(2)}`)
};

//valueFine(7);

//9
const remainHP = () => {

    const strikes = Number(document.getElementById('strikes').value) || 3;

    hp_left = 100 - (20 * strikes);

    if (hp_left <= 0) {
        hp_left = "0"
    }

    document.getElementById('resultadoquestao9').innerText = `Ainda resta:  ${hp_left} de HP.`;

    console.log(`Ainda resta:  ${hp_left} de HP.`)
};

//remainHP(3);


//10
const upCaseCounter = () => {
    const phrase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

    const words = document.getElementById('words').value || phrase;


    let total = 0;
    words.split(" ").forEach(word => {
        word.split("").forEach(char => {
            if (char.toUpperCase() == char) {
                total++;
            }
        });
    });


    document.getElementById('resultadoquestao10').innerText = `Total de letras maiúsculas :  ${total}`;

    console.log(total);
};
//upCaseCounter("LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY");

//11

const calculateAge = () => {

    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    

    const date = ` ${year}-${month}-${day}`;

    const birthDate = new Date(date);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    if(isNaN(age)){
        age = 0
    }

    document.getElementById('resultadoquestao11').innerText = `Idade :  ${age} anos.`;


    console.log(age);
};

//calculateAge("1996-08-30")