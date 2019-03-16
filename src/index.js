module.exports = function getZerosCount(number, base) {
  let remainder = base;
  let i = 1;
  let obj = {};

  //Факторизуем базу и записываем данные в объект, где свойство - фактор (i), а ключ - степень (j)
  //таким образом для одинаковых показателей степени (ключ) мы оставляем
  //только максимальные основания (свойство), т.к. они перезаписываются последними
  do {
    let j = 0;
    i++;
    if (remainder % i) continue;

    do {
      remainder /= i
      j++;
    } while (!(remainder % i));

    obj[j] = i;
  } while ((i * i < base) && (remainder !== 1));

  if (remainder > 1) obj[1] = remainder;

  let zeroArr = [];

  //По формуле Лежандра находим количество нулей
  for (let key in obj) {
    i = 1;
    let sum = 0;
    let step = 0;

    while (true) {
      step = Math.floor(number / Math.pow(obj[key], i));

      if (step === 0) break;

      sum += step;
      i++;
    }

    zeroArr.push( Math.floor(sum / +key) );
  }

  return Math.min(...zeroArr);
}