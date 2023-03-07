money = prompt("Сколько у вас есть денег?");
chocolate = prompt("Сколько стоит одна шоколадка?");
let sum =(money / chocolate);
let sum1 = Math.trunc(sum);
let sum2 =(chocolate * sum1);
let sum3 =(money - sum2);
alert('Можете купить' +sum1+ ' шоколадок и' +sum3+ ' грн сдачи');

moneyb = prompt("Какую сумму хотите вложить на 2 месяца под 5% годовых?");
let bsum =(moneyb * 0.0083);
alert('сумма насчитанных процентов составляет ' +bsum+ ' грн') ;


alert(2 && 0 && 3);
alert(2 || 0 || 3);
alert(2 && 0 || 3);

 