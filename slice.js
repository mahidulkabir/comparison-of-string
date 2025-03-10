const goal = "assala mu alaikum";
let end ;
end = goal.slice(4,11);
console.log(end);
endd= goal.substring(4,11);
console.log(endd);

// slice e bujhay 4 theke suru kore 11 er ag prjnto slice kore nao 

const sentence = "I am a bad and lazy person";
const word = sentence.split(" ");
console.log(word);
console.log(word.join("/"));


// concate kore kono 2 ta alada string add kore fela jay

const a = 'first Name';
const b = 'second name';
const c = a + ' ' + b ;
console.log(c);


// concate kore o kora jay

const d = a.concat(' ').concat(b);
console.log(d);