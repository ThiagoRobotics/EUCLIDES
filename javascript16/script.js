const cars = [
    "Volvo",
    "BMW",
    "Ford"
];

cars.push("Tesla");

cars.sort();

console.log(cars);
console.log(cars.length);

cars.length = 2;

console.log(cars.length);

const john = {
    nome : "Johwn",
    idade : 17,
    cars : [
        name="Tesla",
        model="S"
    ]
}

john.cars.at(0)
// cars.toString(); para converter para string no innerHTML ou coisa do tipo


const numbers = [20, 10 , 30, 40];
let txt = "";

numbers.forEach(myFunction);

function myFunction(value, index, array){
    txt += value + "<br>"
}