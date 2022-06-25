// Mult-line String (HTML Fragments)

const mhs = {
 nama: 'Godam Perkasa',
 umur: 33,
 nrp: '0457321',
 email: 'godamperkasa@xmail.com'
};

// 1. Menggunakan concatenate:
let el = '';
el += '<div class="mhs">';
el += '<h2>' + mhs.nama + '<h2>';
el += '<span class ="nrp">' + mhs.nrp + '</span>';
el += '</div>';

console.log(el);

// output:
// <div class="mhs"><h2>Godam Perkasa<h2><span class ="nrp">0457321</span></div>

// 2. Menggunakan back tick:

let el1 = `<div class="mhs">
  <h2>${mhs.nama}>/h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el1);

// output:
// <div class="mhs">
//  <h2>Godam Perkasa>/h2>
//  <span class="nrp">0457321</span>
// </div>
