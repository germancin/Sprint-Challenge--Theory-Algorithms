// Find regexes that match the following.
// (e.g. find a single regex that matches
// both `antelope` and `antelopes`.)

const words = ['antelope', 'antelopes'];
const res = words.map(w => (w.match(/\w+/g))? true: false );

console.log('Both should be true:', res);