
// Examples of Embedded Expression

const nama = 'Godam Perkasa';
let umur = 33;
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);
console.log(`${alert('Halo!')}`);

//output:
// Halo, perkenalkan nama saya Godam Perkasa, saya 33 tahun.
// undefined

// alert output:
// Halo!

// —-------------------------------------------------------------------------------------------

const nama = 'Godam Perkasa';
let umur = 33;
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);

// output:
// "Halo, perkenalkan nama saya Godam Perkasa, saya 33 tahun."

function halo(){
 return `${alert('Halo!')}`
}

halo();

// alert output:
// Halo!

// —---------------------------------------------------------------------------------------------

const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); // operator ternary

// output:
// genap
