//  Создайте переменную name и age.
// проверайте что переменная name содержит строковое значение и age - числовое значение
// если все верно - выведите сообщение "Все введено верно"
// если какой-то тип данных не совпадает - вызовите ошибку "Данные введены не верно"
let name = 'Tom',
	age = 17
if (typeof name === typeof 'name' && typeof age === typeof 10) {
	console.log('Все введено верно')
} else {
	console.log('"Данные введены не верно"')
}
// lowerCase
let text = 'Hello World'
console.log(text.toLowerCase()) //hello world
// uppercase скобки это вызов функции
console.log(text.toLocaleUpperCase()) //HELLO WORLD

// создайте переменную со строкой
// если регистр маленький переведите строку в верхний регистр,а если большой переведите в нижний
let str = 'STRING'
if (str === str.toLowerCase()) {
	console.log((str = str.toUpperCase()))
} else {
	console.log((str = str.toLowerCase()))
}

// 7
// создайте пременную lang и присвойте ей значение 'en' или 'ru' или 'de' или 'kg'
// изпользуя тернарный опертор выведите сообщение в зависимости от значения lang
// lang = 'en' выведет 'This is english'
// lang = 'ru' выведет 'Это русский'
// lang = 'de' выведет 'Das ist Deutsch'
// lang = 'kg' выведет 'Бул кыргыз тили'
let lang = 'de'
let langUse = lang === 'en' ? 'This is english' : lang == 'ru' ? 'Это русский' : lang == 'de' ? 'Das ist Deutsch' : lang == 'kg' ? 'Бул кыргыз тили' : 'hello'
console.log(langUse)
// 8
// создайте обьект { name : "Hello", age: 19 , status: "student",  сlass: "JS-54", school: "Makers" }
// если возраст больше или равен 20 и статус равен student и школа равна Makers, то выведите в консоль  сообщение
// "Привет, меня зовут {name} и я студент в {school} классе {class}"
// если нет то выведите в консоль
// "Привет, меня зовут {name} и мне {age} лет"
let user = {
	name: 'Tom',
	age: 19,
	status: 'student',
	class: 'JS-54',
	school: 'Makers',
}
if (user.age >= 20 && user.status === 'student' && user.school === 'Makers') {
	console.log(`Привет, меня зовут ${user.name} и я студент в ${user.school} классе ${user.class}`)
} else {
	console.log(`Привет, меня зовут ${user.name} и мне ${user.age} лет`)
}
// 9
// В переменной minute лежит число от 1 до 60. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
// Так же если число не находится в диапазоне от 1 до 60, то выведите "Число не верное"
let minute = 45
if (minute >= 0 && minute <= 15) {
	console.log(`Время ${minute} поподает в первую четверть `)
} else if (minute > 15 && minute < 30) {
	console.log(`Время ${minute} поподает в вторую четверти `)
} else if (minute >= 30 && minute < 45) {
	console.log(`Время ${minute} поподает в третьей четверти `)
} else if (minute <= 60 && minute >= 45) {
	console.log(`Время ${minute} поподает в четвертой четверти `)
}
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str1 = '123123'
let str2 = str1[0] + str1[1] + str1[2]
let str3 = str1[3] + str1[4] + str1[5]
if (str2 === str3) {
	console.log('да')
} else {
	console.log('нет')
}
let number = 23
if (number === 23) {
	console.log('Верно')
} else if (number !== 23) {
	console.log('Неверно')
}
let obj = {
	firstNum: 1,
	secondNum: 0,
}
if (obj.firstNum !== 0 && obj.secondNum !== 0) {
	console.log(obj.firstNum * obj.secondNum)
} else if (obj.firstNum == 0 || obj.secondNum == 0) {
	console.log(firstNum + secondNum)
} else if (obj.firstNum == 0 && obj.secondNum == 0) {
	console.log(false)
} else if (typeof secondNum === false) {
	console.log(firstNum + secondNum)
}

//9
let num1 = 1
let num2 = 2
if (num1 <= 1 && num2 >= 3) {
	console.log('Верно')
} else {
	console.log('Неверно')
}
//если сумма больше 10 и в то же время меньше 20 то, умножьте сумму на 5.
// если же сумма больше 20 и меньше 50, то разделите сумму на 3.
// в любых других случаях прибавьте к сумме 10.
//
// let firstNum = 10
// let secondNum = 5
sum = firstNum + secondNum
if (sum > 10 && sum < 20) {
	console.log(sum * 5)
} else if (sum > 20 && sum < 50) {
	console.log(sum / 3)
} else {
	console.log(sum + 10)
}
//11
let userName = 'ivan'
let password = 333
if (userName == 'ivan' && password == 333) {
	console.log('Добро пожаловать')
} else {
	console.log('Пользователь не найден ')
}
//12
// let firstNum = 5
// let secondNum = 3
let thirdNum = 16
if (firstNum > secondNum && firstNum > thirdNum) {
	console.log(`Максимальное число ${firstNum}`)
} else if (secondNum > firstNum && secondNum > thirdNum) {
	console.log(`Максимальное число ${secondNum}`)
} else if (thirdNum > firstNum && thirdNum > secondNum) {
	console.log(`Максимальное число ${thirdNum}`)
} else {
	console.log('НИКАКОЕ ЧИСЛО НЕ ПОДХОДИТ ')
}

//13
let firstNum = 25
let secondNum = 10
let sum = firstNum + secondNum
let age = 22
if (firstNum + secondNum > age) {
	console.log(`Сумма чисел ${sum} больше моего возраста ${age}`)
}

//14
// let num = -1
if (num >= 0) {
	console.log('Положительное')
} else {
	console.log('Отрицательное')
}
//15
// let num = 2
if (num % 2 == 0) {
	console.log('четное')
} else if (num % 2 !== 0) {
	console.log('нечетное')
}
//7
let favDrink = 'Алкоголь'
let beer = 'Алкоголь' //'Пиво'
let vodka = 'Алкоголь' //'Водка'
let coffee = 'Кофе'
let milk = 'Молоко'
switch (favDrink == beer || favDrink == vodka) {
	case 'Алкоголь':
		console.log('Чрезмерное употребление алкоголя вредит вашему здоровью ')
		break;
	case
}

//16
// Создайте переменную variable проверьте на тип данных если значение равняется объекту то выведите консоль
//"тип {тип переменной} является примитивным типом данных"
// "объект является ссылочным типом данных"
// let number = 23
if (number == 23) {
	console.log('Верно')
} else {
	console.log('Неверно')
}

let number = -1
if (number >= 0) {
	console.log('Положительное')
} else {
	console.log('Отрицательное ')
}
let num = 3
if (num % 2 === 0) {
	console.log('Четное')
} else {
	console.log('Нечетное')
}
//создайте переменную
// проверьте на тип данных если значение ровняется объекту то выведите консоль "объект является ссылочным типом данных" иначе выведите консоль "тип {тип переменной} является примитивным типом данных"

let test = {
	name: 'tom',
	color: 'blue',
}
if (typeof test) {
	console.log('объект является ссылочным типом данных')
} else {
	console.log(`тип ${test} является примитивным типом данных`)
}
let obj = {
	age: 18,
	name: 'Tom',
}
if (obj.age > 17) {
	console.log(`Привет, меня зовут ${obj.name} и это мой первый код`)
} else {
	console.log(`Привет, меня зовут ${obj.name} и я не совершеннолетний`)
}

// Создайте переменную name и age.
// проверайте что переменная name содержит строковое значение и age - числовое значение
// если все верно - выведите сообщение "Все введено верно"
// если какой-то тип данных не совпадает - вызовите ошибку "Данные введены не верно"
let userName = 'Tom'
