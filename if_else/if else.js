let user = prompt('Enter name ')
let age = +prompt('Enter age')
if (user) {
	alert(`${user},приветствую вас, спасибо вам что проверяете мою работу`)
}
if (age <= 13) {
	if (age >= 1) {
		alert('Советую к просмотру мультифильма "Граффити фолз"')
	} else if (age <= 0) {
		alert('Вы должны быть хотя бы старше 1 года')
	}
} else if (age >= 14) {
	if (age <= 17) {
		alert('Я думаю, что вам понравится сериал"Киберсталкер"')
	}
} else {
	alert('Ошибка, введите пожалуйста свой возраст')
}
if (age >= 18) {
	if (age >= 18) {
		alert('Советую к просмотру сериала "Мистер робот"')
	}
}
// CAR
let car = {
	color: 'green',
	maxSpeed: 250,
	audio: {
		brand: 'Sony',
		price: 200000,
		speakers: 12,
	},
}

if (car.color == 'red') {
	console.log('Автомобиль красный')
} else if (car.color == 'green') {
	console.log('Автомобиль зеленый')
} else {
	console.log('Цвет неопределен')
}

let auto = {
	color: 'blue',
	maxSpeed: 250,
	brand: {
		price: 250000,
		popular: 'middle',
	},
}
if (auto.maxSpeed >= 250) {
	console.log('Машина с вашей скоростью достаточна ')
} else if (auto.maxSpeed <= 249) {
	console.log('Машина с вашей скоростью не достаточна осталось совсем чуть-чуть ')
} else {
	console.log('Ваша машина вообще не подходит для игры поэтому покиньте поле :) ')
}
if (auto.brand.price && car.audio.price >= 200000) {
	console.log('Поздравляю ваша машина очень дорогая ')
} else if (auto.brand.price && car.audio.price <= 100000) {
	console.log('К сожалению ваша машина не достаточна дорогая')
} else {
	console.log('Купите себе машину')
}
// CAR END
let agge = 15
console.log(agge > 18 ? 'то ты красавчик ' : 'то ты младше 18 лет')
