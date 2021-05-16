const adversario = 'Thor';
const DEFAULT = 'loki';

const DISFRACES = {
  'Iron-man': 'Magneto',
  Thor: 'Odin',
  hulk: 'Thanos',
  Lobezno: 'Magneto',
};

const loki = DISFRACES[adversario] || DEFAULT;

console.log(loki);
