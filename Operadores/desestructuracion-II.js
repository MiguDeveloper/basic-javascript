const user = {
  id: 338,
  name: 'Miguel',
  age: 36,
};

// use alias
const { name: nombre } = user;

console.log(nombre);

// Return error de undefined
/*
const {
  education: { degree },
} = user;
*/

/* Obj completo
const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};
*/
// solution
const { education: { degree } = { degree: 'master' } } = user;

// nestting obj in destructuring
// first solution
const { education: { school: { name } = {} } = {} } = user;
// with initialization
const { education: { school: { name2 = 'FSE' } = {} } = {} } = user;

// Second solution
const { education: { school: { name3 } } = { school: {} } } = user;
// with initialization
const {
  education: { school: { name4 } } = { school: { name4: 'FSE' } },
} = user;

console.log(degree);

const heroes = [{ name: 'Batman' }, { name: 'Superman' }];

for (const { name } of heroes) {
  console.log(name);
}
