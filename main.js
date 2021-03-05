// 1) Отримати будь-яке число та вивести найбільшу цифру в цьому числі
function getMaxDigitOfNumber(number) {
    const spreadOfNumber = String(number).split('');
    const maxDigitOfNumber = Math.max(...spreadOfNumber);
    return maxDigitOfNumber;
}

// 2) Функція, яка визначає ступінь числа
function calcXToThePowerOfY(numberX, numberY) {
    let xToThePowerOfY;
    if (numberY === 0) {
        xToThePowerOfY = 1;
    } else if (numberY === 1) {
        xToThePowerOfY = numberX;
    } else if (numberY < 0) {
        xToThePowerOfY = (1 / calcXToThePowerOfY(numberX, -numberY - 1)).toFixed(10);
    } else {
        xToThePowerOfY = numberX * calcXToThePowerOfY(numberX, numberY - 1);
    }
    return xToThePowerOfY;
}

// 4) Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати
function calcSalaryAfterTaxes(salaryWithoutTaxes) {
    const tax1 = 18;
    const tax2 = 1.5;
    const salaryAfterTaxes = (salaryWithoutTaxes * (1 - (tax1 + tax2) * 0.01)).toFixed(2);
    return salaryAfterTaxes;
}

// 5) Функція, яка повертає випадкове ціле число в діапазоні від N до M
function getRandomNumberFromNToM(numberN, numberM) {
    const randomNumber = Math.random();
    const randomNumberFromNToM = Math.round(numberN + randomNumber * (numberM - numberN));
    return randomNumberFromNToM;
}

// 8) Функція генерації випадкового паролю
function getRandomPassword(numberOfDigitsInPassword = 8) {
    let randomNumber = Math.random();
    if (randomNumber < 0.1) {
        randomNumber = 1 - randomNumber;
    }
    randomPassword = Math.trunc(randomNumber * Math.pow(10, numberOfDigitsInPassword));
    return randomPassword;
}

// 10) Функція, яка перевіряє, чи є слово паліндромом
function isPalyndrom(palyndrom) {
    let palyndromWithoutSpaces = palyndrom.split(' ').join('').toLowerCase();
    let palyndromReverse = palyndromWithoutSpaces.split('').reverse().join('');
    return palyndromReverse == palyndromWithoutSpaces;
}

// Виклик функцій
console.log(
    `Виклик функцій:
    Функція №1: ${getMaxDigitOfNumber(123456789)};
    Функція №2: ${calcXToThePowerOfY(7, -2)};
    Функція №4: ${calcSalaryAfterTaxes(30000)};
    Функція №5: ${getRandomNumberFromNToM(1, 100)};
    Функція №8: ${getRandomPassword()};
    Функція №10: ${isPalyndrom("Я несу гусеня")}`
);