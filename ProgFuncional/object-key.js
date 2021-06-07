const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France',
};

const countries = Object.keys(cities).reduce(
  (acc, cur) => ((acc[cities[cur]] = [...(acc[cities[cur]] || []), cur]), acc),
  {}
);

const countries3 = Object.keys(cities);
console.log(countries3);

const countries2 = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = acc[country] || [];
  acc[country].push(k);
  return acc;
}, {});

console.log(countries);
console.log(countries2);

const arr = ['uno', 'dos'];
arr.push('tres');
arr.push('tres');
arr.push('uno');
console.log(arr);
