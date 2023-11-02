// Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ
//  будет равен элементу массива, а значение (элемент * 100)
// input: [1, 2, 3, 4, 5]
// output: {1: 100, 2: 200, 3: 300 ...}

// const num = [1, 2, 3, 4, 5];
// const sum = num.reduce(function (acc, key) {
//     acc[key] = key * 100;
//     return acc;
// }, {});
// console.log(sum);

// Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать.
// Написать функцию которая создает из массива skills объект с рандомными значениями от 1 до 100, использовать reduce и Math.random()
// input: ['hook', 'blackhole']
// output: {'hook': 20, 'blackhole: 100'}

// const skills = ['skill1', 'skill2', 'skilln'];
// const sum = skills.reduce(function (acc, key) {
//     acc[key] = Math.floor(Math.random() * 101);
//     return acc
// }, {});
// console.log(sum);


// // Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
// input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
// output: { even: 100, odd: 100 }       // 100 это для примера, сумма должна высчитываться.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300];

// const res = numbers.reduce((acc, keys) => {
//     if (keys % 2 === 0) {
//         acc.even += keys;
//     } else {
//         acc.odd += keys;
//     }
//     return acc;
// }, {even: 0, odd: 0});
// console.log(res);



// Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, { name: 'Cedric Diggory', house: 'Hufflepuff' }, 
// { name: 'Tonks', house: 'Hufflepuff' }, { name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger', house: 'Gryfindor' }]; 
// Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту задачу двуми способоами:
// // C помощью filter и map
// C помощью reduce

// const items = [
//     { name: "Harry Potter", house: "Gryffindor" },
//     { name: "Cedric Diggory", house: "Hufflepuff" },
//     { name: "Tonks", house: "Hufflepuff" },
//     { name: "Ronald Weasley", house: "Gryffindor" },
//     { name: "Hermione Granger", house: "Gryffindor" },
//   ];
  
//   const huffleNames = items
//     .filter(function (el) {
//       return el.house === "Hufflepuff";
//     })
//     .map(function (el) {
//       return el.name;
//     });
  
//   console.log(huffleNames);

// const huffle = items.reduce(function (acc, key){
//     if(key.house === "Hufflepuff") {
//         return acc.push (key.name);
//     }
// }, []);
// console.log(huffle);


//  Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
// От большего к меньшему
// От меньшего к большему

// const numbers = [3, 4, 1, 2, 7];

// const num1 = numbers.slice().sort((a, b) => b - a);
// const num2 = numbers.slice().sort((a, b) => a - b);

// console.log(num1);
// console.log(num2);



// Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки: 
// От A-Z
// От Z-A

// const str = ['A', 'B', 'C', 'D', 'E'];

// const key1 = str.slice().sort();
// const key2 = str.slice().sort().reverse();

// console.log(key1);
// console.log(key2);
