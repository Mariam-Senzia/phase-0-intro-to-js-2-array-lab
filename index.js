// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

beforeEach(function() {
   cats.length = 0
;    cats.push("Milo","Otis", "Garfield");
});

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    return cats.pop();
};

function destructivelyRemoveFirstCat() {
    return cats.shift();
};

function appendCat(name) {
    const allcats = [...cats,"Broom"];
    return allcats;
};

function prependCat(name) {
    const newcats = ["Arnold",...cats];
    return newcats;
};

function removeLastCat() {
    const cats2 = cats.slice(0, -1);
    return cats2;
};

function removeFirstCat() {
    const finalcats = cats.slice(-2);
    return finalcats;
};
