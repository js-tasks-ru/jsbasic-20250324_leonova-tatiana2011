/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if ((name != null) && (name.length >= 4)) {
    let n = true;

    for (let char of name) {

      if (char == " ") {
        n = false;
      } 
      
      n&&=n;

    }
    return n;

  } else  {
    return false;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
