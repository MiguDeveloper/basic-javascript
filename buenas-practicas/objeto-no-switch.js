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

const actionsUrl = {
  verify: ({ contactInfo, cifCode, secuenceNumber }) => {
    return `http:dev.preventor.com/${cifCode}/${contactInfo}/${secuenceNumber}`;
  },
  override: ({ contactInfo, cifCode, secuenceNumber }) => {
    return `http:dev.preventor.com/${cifCode}/${contactInfo}/${secuenceNumber}`;
  },
  replace: ({ contactInfo, cifCode, secuenceNumber }) => {
    return `http:dev.preventor.com/${cifCode}/${contactInfo}/${secuenceNumber}`;
  },
};

console.log(
  actionsUrl['verify']({
    contactInfo: 'email',
    cifCode: '633CodigoDeCliente',
  })
);
