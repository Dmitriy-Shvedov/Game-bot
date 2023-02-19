// let questionUsers = +prompt('Угадай число от 1 до 100')

let num 
let item = 0;


const isNumber = function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}

  const start = function () {
  num = Math.floor(Math.random() * 100);
  console.log(num);
  let game = function () {
    numUser = prompt('Проверь интуицию. Введи число от 1 до 100');
    if (numUser === null) {
      return alert('Игра окончена');
    }
    if (isNumber(numUser)) {
      if (numUser > num) {
        alert('Упс. У бота Число меньше');
        game();
      } else if (numUser < num) {
        alert('Упс. У бота Число больше');
        game();
      } else {
        if (confirm('Угадали! Сыграем ещё?')) {
          start();
        } else {
          alert('Как хотите, до свидания!');
        }
      }
    } else {
      alert('Введите число');
      game();
    }
  };
  game();
};

start();