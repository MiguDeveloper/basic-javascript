/*
 desestructuración 
*/

const medicos = {
  hospital: {
    _id: '601b76091c9dc81472be9b43',
    nombre: 'Hospital medavan',
    img: '7a0688ca-3cf7-40dc-afad-985cfc186b80.png',
  },
  _id: '601c39ad64de3209655499b8',
  usuario: {
    _id: '601b73111e134e14115c41ef',
    nombre: 'nuevo devuelve id',
  },
  nombre: 'Dr. Jorge Ch',
  img: '53633d4c-b637-4173-96b4-c051e1c33af2.png',
};

const {
  nombre,
  hospital: { _id },
} = medicos;

console.log({ nombre, _id });
