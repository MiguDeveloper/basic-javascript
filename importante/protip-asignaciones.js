// Asignaciones con operadores
const regresaTrue = () => {
  console.log('regresa true');
  return true;
};
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'hola mundo' && 150; // false
const a2 = 'hola' && 'mundo' && soyFalse && true; // false
const a3 = soyFalse || 'Ya no soy false'; // 'Ya no soy false'
const a4 =
  soyFalse || soyUndefined || soyNull || 'Ya no soy false de nuevo' || true; // 'Ya no soy false de nuevo'
const a5 =
  soyFalse ||
  soyUndefined ||
  regresaTrue() ||
  'Ya no soy false de nuevo' ||
  true; // true
console.log({ a1, a2, a3, a4, a5 });
