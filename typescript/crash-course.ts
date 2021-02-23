console.log('typescript advance');

const sum = (...numbers: number[]) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

console.log(sum(1, 2, 3, 4));

// string
const cadena = 'una cadena';
// explicit
let otraCadena: string;

enum ManufacturerMake {
  TESLA = 'Tesla',
  AUDI = 'Audi',
  MERCEDES = 'Mercedes',
  VOLVO = 'Volvo',
  BMW = 'Bmw',
}

const myCar = {
  year: 2021,
  make: ManufacturerMake.VOLVO,
};

console.log(myCar.make);
console.log(ManufacturerMake.TESLA);
console.log(ManufacturerMake.AUDI);
