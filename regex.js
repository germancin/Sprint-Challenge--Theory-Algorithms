/*************************************************************************/
// Find regexes that match the following.
// (e.g. find a single regex that matches
// both `antelope` and `antelopes`.)
/*************************************************************************/
const words = ['antelope', 'antelopes'];
const res = words.map(w => (w.match(/\w+/g))? true: false );

console.log('1.) Find regexes that match the following. (e.g. find a single regex that matches\n' + 'both `antelope` and `antelopes`.)');
console.log("['antelope', 'antelopes']");
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
console.log("['antelope rocks out', 'antelopes rock out']");
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
console.log("['goat', 'moat', 'boat']");
console.log(resC);
console.log('');



/*************************************************************************/
// * Regex that matches dates in YYYY-MM-DD format. (Year can be 1-4 digits, and
// month and day can each be 1-2 digits). This does not need to verify the date
// is correct (e.g 3333-33-33 can match).
// 2000-10-12
// 1999-1-20
// 1999-01-20
// 812-2-10
/*************************************************************************/
const wordsD = ['2000-10-12', '1999-1-20', '2009-11-1033434'];
const resD = wordsD.map(w => (w.match(/(\d{4}-\d{2}-\d{2}$)/g))? true: false );

console.log('4.) Regex that matches dates in YYYY-MM-DD format. (Year can be 1-4 digits, and month and day can each be 1-2 digits).');
console.log("['2000-10-12', '1999-1-20', '2009-11-1033434']");
console.log(resD);
console.log('');



