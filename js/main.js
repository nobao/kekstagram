function getRandomPositiveInteger (num1, num2) {
  let max, min;

  if (typeof num2 === 'undefined') { //  проверяем передан ли второй аргумент (максимальное число)
    max = Number(num1);              // приводим параметр min к числовому типу и присваиваем значение параметру max
    min = 0;                        // если вводится один аргумент при вызове функции, минимальному значению присваиваем 0
  } else {                          // если передаются два аргумента, приводим значения к числовому типу
    min = Number(num1);
    max = Number(num2);
  }

  if (num1 > num2) { // если минимальное значение больше максимального, меняем местами
    max = Number(num1);
    min = Number(num2);
  }

  if (isNaN(min) || isNaN(max)) { // если не удалось привести значения параметров к числовому виду, выводится ошибка
    throw new Error('Аргументы должны быть числами');
  }

  if (min === max) { // если минимальное значение больше или равно максимального, выводится ошибка
    throw new Error('Минимальное значение не должно быть равно максимальному');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; // "+ 1" – чтобы включить максимальное значение
}

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

getRandomPositiveInteger(10,25);
checkStringLength('Привет', 10);
