interface Starship {
  name: string;
  enableHyperjump: boolean;
}

// Pick
type StarshipNameOnly = Pick<Starship, 'name'>;

// Omit: opuesto a Pick
type StartShipOmit = Omit<Starship, 'enableHyperjump'>;

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

// Partial
const updateStarship = (id: number, starship: Partial<Starship>) => {};

updateStarship(1, { name: 'Explorer' });

// Record
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
