/*************************************************************************/
// Find regexes that match the following.
// (e.g. find a single regex that matches
// both `antelope` and `antelopes`.)
/*************************************************************************/
const words = ['antelope', 'antelopes'];
const res = words.map(w => (w.match(/\w+/g))? true: false );

console.log('1.) Find regexes that match the following. (e.g. find a single regex that matches\n' + 'both `antelope` and `antelopes`.)');
console.log(res);
console.log('');




/*************************************************************************/
// * Single regex that matches either of these:
// antelope rocks out
// antelopes rock out
/*************************************************************************/
const wordsB = ['antelope rocks out', 'antelopes rock out'];
const resB = wordsB.map(w => (w.match(/(\w+)\s(\b\w+s\b)\s(\w+)/g))? true: false );

console.log('2.) Single regex that matches either of these:antelope rocks out ,antelopes rock out');
console.log(resB);
console.log('');




/*************************************************************************/
// * Regex that matches either of:
// goat
// moat
// but not:
// boat
/*************************************************************************/
const wordsC = ['goat', 'moat', 'boat'];
const resC = wordsC.map(w => (w.match(/(goat|moat)/g))? true: false );

console.log('3.) Regex that matches either of: goat, moat {but not} boat');
console.log(resC);
console.log('');


