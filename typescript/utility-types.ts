interface Starship {
  name: string;
  enableHyperjump: boolean;
}

interface User {
  id: number;
  name: string;
  description: string;
  color: string;
}

// Pick examples: cuando queremos tomar solo ciertas propiedades que nos interesan
type StarshipNameOnly = Pick<Starship, 'name'>;
type UserMed = Pick<User, 'color' | 'name'>;

const UserBasic: Pick<User, 'id' | 'description'> = {
  id: 233,
  description: '',
};

const UserSuscrip: UserMed = {
  color: '#23l232',
  name: 'suscripcion',
};

// Omit: opuesto a Pick, ya que excluye las propiedades que le indiquemos
type StartShipOmit = Omit<Starship, 'enableHyperjump'>;

type PartialUser = Omit<User, 'color' | 'name'>;
const formDataUser: PartialUser = {
  id: 122,
  description: 'esta es la descripcion',
};

// Readonly: evitamos que se le asigne valores luego de la declaracion
type ReadonlyUser = Readonly<User>;

let userOnlyRead: ReadonlyUser = {
  id: 212,
  name: 'Miguel',
  description: 'whatever',
  color: '#CCC',
};
// con readonly la siguiente linea nos dara un error
// userOnlyRead.description = ''

// Exclude
type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';
let JhonsDrink: AvailableDrinks;
JhonsDrink = 'Coffee';

type DrinksJaneDoesntLike = 'Coffee' | 'Orange Juice';
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JanesDrink = 'Tea';

// extract
type DrinksJaneLikes = 'Tea' | 'Lemonade' | 'Mohito';
let JanesDrink2: Extract<AvailableDrinks, DrinksJaneLikes>;
JanesDrink2 = 'Lemonade';

// NonNullable
interface StarshipProperties {
  color?: 'blue' | 'red' | 'green';
}
// evitamos que manden un null o undefined: paintStarship(1, undefined)
const paintStarhip = (
  id: number,
  color: NonNullable<StarshipProperties['color']>
) => {
  return {
    id,
    color,
  };
};
paintStarhip(1, 'green');

// lo combinamos con el ReturnType
type PaintStarshipReturn = ReturnType<typeof paintStarhip>;

// Partial examples: cuando queremos que los propiedades sean mas flexibles
const updateStarship = (id: number, starship: Partial<Starship>) => {};
updateStarship(1, { name: 'Explorer' });

const createUser = (tipo: string, user: Partial<User>) => {};
createUser('usario', { color: '' });

const formUser: Partial<User> = {
  name: 'Miguel',
  description: 'Desarrollador frontend',
};

// Record examples
const starships: Record<string, Starship> = {
  Explorer1: {
    name: 'Explorer1',
    enableHyperjump: true,
  },
  Explorer2: {
    name: 'Explorer2',
    enableHyperjump: false,
  },
};

type Admins = 'superadmin' | 'admin';

const admins: Record<Admins, Partial<User>> = {
  superadmin: {
    id: 232,
    color: 'verde',
  },
  admin: {
    id: 6363,
    description: 'descripcion del admin',
  },
};

// keyof: para validar las keys de una objeto
type UserKey = keyof User;
const key: UserKey = 'description';
