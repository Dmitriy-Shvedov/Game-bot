// let questionUsers = +prompt('Угадай число от 1 до 100')
let numUser
let num = 1


const isNumber = function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}

  const start = function () {
  num = Math.floor(Math.random() * 100);
  console.log('Загаданное число: ' + num);
  numUser = prompt('Проверь интуицию. Введи число от 1 до 100');
  const game = function () {
    if (numUser === null) {
      return alert('Игра окончена');
      
    }
    if (isNumber(numUser)) {
      const realNum = +numUser;
      if (realNum > num) {
        alert('Упс. У бота Число меньше');
        game()
      } else if (realNum < num) {
        alert('Упс. У бота Число больше');
        game()
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