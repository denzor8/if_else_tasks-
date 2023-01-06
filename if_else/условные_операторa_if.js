// Условные операторы
// if/ else if/ else - в противном случае
// если (что) -if() то-{}
// -- if конструкция
let age = +prompt('Enter age')
if (age >= 18) {
	alert('Досутпа разрешен ')
} else if (age === 17) {
	alert('Осталось немного')
} else {
	alert('Доступ заблокириван')
}
const adminUserName = 'superadmin',
	adminPassword = 'pass123'
let userName = prompt('Enter userName')

if (userName === adminUserName) {
	let password = prompt('Enter Password')
	if (password === adminPassword) {
		alert('Доступ разрешен ')
	} else {
		alert('Почти админ ')
	}
} else {
	alert('Доступ запрещен')
}

let name = prompt('enter name ')
let ageJack = +prompt('enter age')
if (name === 'jack' && age >= 60) {
	alert('Hello Jack')
}
if (true) {
	console.log('Hello World')
} else if (name) {
	alert('Hello, Vlad')
}
if (false) {
	console.log()
}

if (false) console.log('Hello MAkers')
if (true) console.log('Hello World')

if (true) {
	let name = 'Vlad'
	name = 'Makers'
	console.log('Hello', name)
}
