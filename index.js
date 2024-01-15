let user = {};
alert("Вам необходимо заполнить следующие данные!");
user.name = prompt("Ваше имя:", '');
user.age = prompt("Ваш возраст:", '');
user.gender = prompt("Ваш пол:", '');
confirm(`Пожалуйста подствердите свои данные: ${user.name}, ${user.age}, ${user.gender}`)

console.log(user);


let userNumber = prompt("Сколько вам лет?");

if(userNumber < 18) {
    alert("Данный сайт недоступен для вас!")
}
else {
    alert("Добро пожаловать!")
}


let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2 || 3:
        alert( '2,3' );
        break;
}

let sum = 0;
for(let i = 0; i <= 100; i+=2) {
    sum += i;
}
console.log(sum);


let i = 0;
while(i < 3) {
    alert( `number ${i}!` );
    i++;
}