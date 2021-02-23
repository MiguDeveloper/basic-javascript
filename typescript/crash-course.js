"use strict";
console.log('typescript advance');
const sum = (...numbers) => {
    return numbers.reduce((acc, cur) => acc + cur, 0);
};
console.log(sum(1, 2, 3, 4));
// string
const cadena = 'una cadena';
// explicit
let otraCadena;
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake["TESLA"] = "Tesla";
    ManufacturerMake["AUDI"] = "Audi";
    ManufacturerMake["MERCEDES"] = "Mercedes";
    ManufacturerMake["VOLVO"] = "Volvo";
    ManufacturerMake["BMW"] = "Bmw";
})(ManufacturerMake || (ManufacturerMake = {}));
const myCar = {
    year: 2021,
    make: ManufacturerMake.VOLVO,
};
console.log(myCar.make);
console.log(ManufacturerMake.TESLA);
console.log(ManufacturerMake.AUDI);
