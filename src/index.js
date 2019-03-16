module.exports = function getZerosCount(number, base) {
  let remainder = base;
  let i = 1;
  let obj = {};

  //факторизуем базу и записываем данные в объект, 
  //где i - фактор и значение ключа, j - степень и название ключа
  do {
    i++;
    if (remainder % i) continue;

    let j = 0;
    do {
      remainder /= i
      j++;
    } while (!(remainder % i));

    obj[j] = i;

  } while ((i * i < base) && (remainder !== 1));

  if (remainder > 1) obj[1] = remainder;


  
  let arr = [];


  for (let key in obj) {
    i = 1;
    let sum = 0;
    let element = 0;

    while (true) {
      element = Math.floor(number / Math.pow(obj[key], i));

      if (element === 0) break;

      sum += element;
      i++;
    }

    arr.push( Math.floor(sum / +key) );



  }

   
   

  return Math.min(...arr);
}