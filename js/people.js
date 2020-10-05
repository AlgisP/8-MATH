const people = [
{

    name: "Kristijonas",
    age: 68

},

{

    name: "Ona",
    age: 56
}

];

const kristijonas = people[0];
const ona = people[1];

console.log(kristijonas);
console.log(ona);


if (kristijonas.age > ona.age) {
    console.log(kristijonas.age, 'yra vyresnis');
} else {
    console.log(ona.age, 'yra vyresne');
}


const masyvas = [
    [1, 2],
    [3, 4, 5, 6]
];


const pirmasMasyvas = masyvas[0];
const antrasMasyvas = masyvas[1];


console.log(antrasMasyvas[1]);
console.log(masyvas[1][2]);