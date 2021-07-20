/*- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  EXAMPLE:
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]
*/
function sumIndex(arrayA = [], arrayB = []) {
    let arrayAB = [];
    let x = 0;
    for (let i = 0; i < arrayA.length; i++) {
        arrayAB[x] = arrayA[i] + arrayB[i];
        x++;
    }
    return arrayAB;
}

sumIndex([1, 2, 3, 6], [3, 7, 2, 6]);
/*- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.*/
let arrayX = ['a', 'b', 'c'];
for (let i = 0; i < arrayX.length + 1; i++) {
    if (arrayX[i] === undefined) {
        arrayX[i] = 1;
        arrayX[i + 1] = 2;
        arrayX[i + 2] = 3;
        break;
    }
}
document.write(`${arrayX} `);
/*- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].*/
let arrayM = [1, 2, 3];
let arrayM2 = arrayM.sort((a, b) => {
    return b - a;
});
document.write(`<div>${arrayM2}</div>`);
/*- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.*/
let arrayN = [1, 2, 3];
arrayN.push(4, 5, 6);
document.write(`<div>${arrayN}</div>`);
/*- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.*/
let arrayK = [1, 2, 3];
arrayK.unshift(4, 5, 6);
document.write(`<div>${arrayK}</div>`);
/*- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].*/
let arrayL = [1, 2, 3, 4, 5];
arrayL.splice(0, 3);
document.write(`<div>${arrayL}</div>`);
/*- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].*/
let arrayF = [1, 2, 3, 4, 5];
arrayF.splice(2, 3);
document.write(`<div>${arrayF}</div>`);
/*- Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].*/
let arrayZ = [1, 2, 3, 4, 5];
arrayZ.splice(3, 2, 'a', 'b', 'c');
document.write(`<div>${arrayZ}</div>`);
/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayEvens = arrayNum.filter(function (x) {
    if (x % 2 === 0) {
        return x;
    }
})
console.log(arrayEvens);
/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/
let arrayNum2 = [];
let x = 0;
for (let i = 0; i < arrayNum.length; i++) {
    arrayNum2[x] = arrayNum[i];
    x++;
}
console.log(arrayNum2);

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/
let arrayStr = ['a', 'b', 'c'];
let slovo = arrayStr[0];
for (let i = 1; i < arrayStr.length; i++) {
    slovo = slovo + arrayStr[i];
}
console.log(slovo);
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
let slovo2 = arrayStr[0];
let i = 1;
while (i < arrayStr.length) {
    slovo2 = slovo2 + arrayStr[i];
    i++;
}
console.log(slovo2);
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/
let slovo3 = [];
for (let str of arrayStr) {
    slovo3 = slovo3 + str;
}
console.log(slovo3);

/*-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]*/
function change_index(arrayI = [], i) {
    for (let n = 0; n < arrayI.length; n++) {
        if (n === i) {
            let elem_i = arrayI[n];
            arrayI[n] = arrayI[n + 1];
            arrayI[n + 1] = elem_i;
        }
    }
    console.log(arrayI);
}

change_index([9, 8, 0, 4], 2);

/*- Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/
let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';

function normal_name(n) {
    let t = n.trim();
    let str = t.split(' ');
    let name = str.shift() + ' ' + str.pop();
    console.log(name);
}

normal_name(n1);
normal_name(n2);
normal_name(n3);

/*- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]*/
function elem_null(arrayElem = []) {
    for (let i = arrayElem.length - 1; i >= 0; i--) {
        if (arrayElem[i] === 0) {
            arrayElem.splice(i, 1);
            arrayElem.push(0);
        }
    }
    console.log(arrayElem);
}

elem_null([1, 8, 0, 0, 2, 0, 9]);