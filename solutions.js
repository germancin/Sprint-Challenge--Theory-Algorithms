// Find regexes that match the following.
// (e.g. find a single regex that matches
// both `antelope` and `antelopes`.)

const words = ['antelope', 'antelopes'];
const res = words.map(w => (w.match(/\w+/g))? true: false );

console.log('Find regexes that match the following. (e.g. find a single regex that matches\n' + 'both `antelope` and `antelopes`.)');
console.log(res);
console.log('');

// * Single regex that matches either of these:
// antelope rocks out
// antelopes rock out




// * Regex that matches either of:
// goat
// moat
// but not:
// boat

const wordsC = ['goat', 'moat', 'boat'];
const resC = wordsC.map(w => (w.match(/(goat|moat)/g))? true: false );

console.log('Regex that matches either of:');
console.log(resC);
console.log('');


