// 1.1. Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.

let arr1 = [1, 2, 3, 'abc', 'def', 'ghi', true, false ]
console.log(arr1)

// //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Harry Potter',
    pageCount: 450,
    genre: 'Fantastic',
}
console.log(book1)

let book2 = {
    title: 'jdoajhoiajh',
    pageCount: 260,
    genre: 'Classic',
}
console.log(book2)
let book3 = {
    title: 'rgnrvoww4',
    pageCount: 260,
    genre: 'Fantastic',
}
console.log(book3)

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// // Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books4 = {
    title: 'Harry Potter',
    pageCount: 450,
    genre: 'Fantastic',
    authors: [{name:'ghvjjdndejjtjt', age: 35}],
}
console.log(books4)

let books5 = {
    title: 'Hwhwhwksfkf',
    pageCount: 195,
    genre: 'Fantastic',
    authors: [{name:'ghvjjdndejjtjt', age: 35}],
}
console.log(books5)

let books6 = {
    title: 'Haeearvtayyv',
    pageCount: 357,
    genre: 'Classic',
    authors: [{name:'ghvjjdndejjtjt', age: 35}],
}
console.log(books6)

// //- Створити масив з 10 об'єктами які описують сутніть "користувач".
// // Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Vlad', username: 'Bubenko', password: '1356793'},
    {name: 'Robert', username: 'kjnklgjer', password: '64857357395'},
    {name: 'serhaerheah', username: 'aerhegeagfeawg', password: '857398593859'},
    {name: 'aehaerhabg', username: 'Brmrklgjlrkflr', password: '6485938493'},
    {name: 'aerhaerhgarg', username: 'rgknkrngkdmfdf', password: '68479589843'},
    {name: 'erhaerhrgarg', username: 'efkjekjfkejfkee', password: '768389583'},
    {name: 'arhaeaegaerg', username: 'kgkhkfjhejfhjeghe', password: '6847985045'},
    {name: 'eargfsgdergre', username: 'bfjbdnfkjnfkghie', password: '25346428734203'},
    {name: 'earbeargafaergaer', username: 'jhfgjehfkjefgeg', password: '36452782932'},
    {name: 'drgaegvrfgaerg', username: 'jgjenfkenfken', password: '87958605960954'},
]

console.log('Пароль користувача:', users[0]['password']);
console.log('Пароль користувача:', users[1]['password']);
console.log('Пароль користувача:', users[2]['password']);
console.log('Пароль користувача:', users[3]['password']);
console.log('Пароль користувача:', users[4]['password']);
console.log('Пароль користувача:', users[5]['password']);
console.log('Пароль користувача:', users[6]['password']);
console.log('Пароль користувача:', users[7]['password']);
console.log('Пароль користувача:', users[8]['password']);
console.log('Пароль користувача:', users[9]['password']);

// 1.2.
// Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть число');
if (x!==0 ) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число для перевірки декади:');
if (time >= 0 && time <=14){
    console.log('Перша декада');
}
else if (time >= 15 && time <=29) {
    console.log('Друга декада');
}
else if (time >= 30 && time <=44) {
    console.log('Третя декада');
}
else if (time >= 45 && time <=59) {
    console.log('Четверта декада');
}
else {
    console.log('Введіть коректне число');
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть число');
if (day >= 1 && day <=10){
    console.log('Перша декада');
}
else if (day >= 11 && day <=20) {
    console.log('Друга декада');
}
else if (day >= 21 && day <=31) {
    console.log('Третя декада');
}
else {
    console.log('Введіть коректне число');
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt('Введіть порядковий номер дня тижня');
let monday= {
    name: 'Monday',
    plans: ['Math', 'Programing', 'Physic']
}
let tuesday = {
    name: 'Tuesday',
    plans: ['English', 'French', 'Chemistry']
}
let wednesday = {
    name: 'Wednesday',
    plans: ['Drawing', 'Play Guitar', 'Cycle']
}
let thursday = {
    name: 'Thursday',
    plans: ['Ski', 'Football', 'Basketball']
}
let friday = {
    name: 'Friday',
    plans: ['Deutchland',  'errwhsth', 'rherhqrgt']
}
let saturday = {
    name: 'Saturday',
    plans: ['hahshshrsg', 'arhaerhehaehg', 'aerheabherg']
}
let sunday = {
    name: 'Sunday',
    plans: ['thsrhts', 'hasegrar', 'erhaehgafe']
}
switch (dayOfWeek){
    case (1):
        console.log(monday);
        break;
    case (2):
        console.log(tuesday);
        break;
    case (3):
        console.log(wednesday);
        break;
    case (4):
        console.log(thursday);
        break;
    case (5):
        console.log(friday);
        break;
    case (6):
        console.log(saturday);
        break;
    case (7):
        console.log(sunday);
        break;
    default:
        console.log('Введіть вірне число');
        break;
}

// 1.3.
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Введіть число 1')
let number2 = +prompt('Введіть число 2')
if (number1 > number2){
    console.log('Перше число більше за друге')
}
else if (number1 === number2){
    console.log('Числа рівні')
}
else {
    console.log('Друге число більше за перше')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = ''
x = x || 'Default'
console.log(x)

// 1.4.
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}