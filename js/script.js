"use strict";
// 1. Реализовать запрос в API (используя fetch) - https://jsonplaceholder.typicode.com/users/1
// Успешный результат необходимо сохранить в localStorage.
// При перезагрузке страницы необходимо проверить, если данные находятся в localStorage - то вывести их, если данные отсутствуют - то сделать заново запрос в API.

// const user = localStorage.getItem("user");

// if (user !== null) {
//     console.log(JSON.parse(user));
// } else {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//         .then((response) => response.json())
//         .then((user) => {
//             localStorage.setItem("user", JSON.stringify(user));
//         })
//         .catch((error) => console.log(error))
//     }


// 2. Написать функцию isValidDateFormat(str) , которая бы проверяла валидный формат даты (YYYY/MM/DD HH:MM) или нет
// Функция не должна проверять что дата оригинальна(например можно ввести 32 день месяца)
//     - она должна проверять именно формат даты YYYY / MM / DD HH:MM) Для решения данной задачи используем регулярные выражения

const isValidDateFormat = (str) => {
    let regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;
    return regexp.test(str);
}
    
console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false


// 3. Написать функцию isAfter, которая будет принимать 2 аргумента даты(это может быть либо объект Date, либо timestamp).
//  Функция должна вернуть true, если первая переданная дата будет позже, чем вторая.Иначе вернуть false.


function isAfter(date, dateToCompare) {
  return date > dateToCompare; 
}

console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
console.log(isAfter(1648636135000, 1648549735000)); // true
console.log(isAfter(1648549735000, 1648636135000)); // false



