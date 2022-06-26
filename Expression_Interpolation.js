
// Examples of Expression Interpolation

// 1. Menggunakan concatenate
let a = 10;
let b = 15;
console.log('Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ' + (a + b) + ', bukan ' + (2 * a + b));

// output:
// "Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : 25, bukan 35"

// 2. Menggunakan back tick

let a1 = 10;
let b1 = 15;
console.log(`Jika a1 = 10 dan b1 = 15, maka hasil penjumlahannya adalah : ${a1 + b1}, bukan ${ 2 * a1 + b1}`);

// output:
// "Jika a1 = 10 dan b1 = 15, maka hasil penjumlahannya adalah : 25, bukan 35"
