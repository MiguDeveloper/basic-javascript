"use strict";
const UserBasic = {
    id: 233,
    description: '',
};
const UserSuscrip = {
    color: '#23l232',
    name: 'suscripcion',
};
const formDataUser = {
    id: 122,
    description: 'esta es la descripcion',
};
let userOnlyRead = {
    id: 212,
    name: 'Miguel',
    description: 'whatever',
    color: '#CCC',
};
let JhonsDrink;
JhonsDrink = 'Coffee';
let JanesDrink;
JanesDrink = 'Tea';
let JanesDrink2;
JanesDrink2 = 'Lemonade';
// evitamos que manden un null o undefined: paintStarship(1, undefined)
const paintStarhip = (id, color) => {
    return {
        id,
        color,
    };
};
paintStarhip(1, 'green');
// Partial examples: cuando queremos que los propiedades sean mas flexibles
const updateStarship = (id, starship) => { };
updateStarship(1, { name: 'Explorer' });
const createUser = (tipo, user) => { };
createUser('usario', { color: '' });
const formUser = {
    name: 'Miguel',
    description: 'Desarrollador frontend',
};
// Record examples
const starships = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperjump: true,
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperjump: false,
    },
};
const admins = {
    superadmin: {
        id: 232,
        color: 'verde',
    },
    admin: {
        id: 6363,
        description: 'descripcion del admin',
    },
};
const key = 'description';
