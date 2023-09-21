const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
document.getElementById("demo").innerHTML = arr;

const findFound = arr.find((element) => element > 2);
console.log(findFound);

const filterFound = arr.filter((ele) => ele > 2);
console.log(filterFound);

// const deepcopy = arr.slice(0,-1)
const deepcopy = arr.slice(0, arr.length)
console.log(deepcopy);
console.log(deepcopy.pop());
console.log(deepcopy);
console.log(arr);

const shallowCopy = arr; //reference
console.log(shallowCopy);
console.log(shallowCopy.pop());
console.log(shallowCopy);
console.log(arr);

// const spliceElement = arr.splice(0,3);
// console.log(spliceElement)
const spliceElement = arr.splice(0, 3, 99, 98, 97, "rohit");
console.log(spliceElement)
console.log(arr)

//forEach return the element
const foreach = arr.forEach((ele) => console.log(ele * 5))


//map return the array
const maps = arr.map((ele) => ele * 2)
console.log(maps)

const obj = {
    firstName: "Rohit",
    lastName: "Bharti",
    age: 22,
    id: 510519041,
    cars: {
        car1: "bmw",
        car2: "suzuki",
        car3: "ford"
    }
};

console.log(obj)
console.log(obj.firstName)
/* console.log(JSON.stringify(obj, 4)) */
/* Object.keys(obj).forEach((ele) => console.log(ele)) */

// spread operator
const array = [1, 2, 3, 4, 5];
const arr2 = [...array];
console.log(arr2);
console.log([...array, ...arr2])

function sum(a, b) {
    return a + b;
}
console.log(sum(3, 33));
console.log(sum(3, 33, 2, 3)); // its output is 36 but i want 41 as output


// rest operator
function sum(...num) {
    total = 0;
    for (let n of num) {
        total += n;
    }
    return total;
}
console.log(sum(3, 33, 2, 3))
console.log(sum(1, 2, 3, 4, 5, 6));

/* setTimeout(function, milliseconds) */

for (let i = 0; i < 5; i++) {
    /* setTimeout(function(){
    console.log(i);
    }, i*2000) */

    setTimeout(() => {
        console.log(i);
    }, i * 3000)
}

const arrr = [1.2, 3, 4, 5]
const add = arrr.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(add);

const add1 = arrr.reduce((acc, curr) => acc + curr, 0)
console.log(add1);

/* IIFE immediately invoked function expression */
(function fn1() {
    console.log("hello");
})();

((name) => {
    console.log(name);
})("rohit bharti");

//difference between parameters and arguments
function fn22(parameters) {
    console.log(parameters);
}
fn22("arguments");

//call back function
function fn1(name, callback) {
    console.log(name);
    callback();
}

function callme() {
    console.log("I am Call Back function")
}

fn1("india", callme);

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(typeof arr5);
console.log(Array.isArray(arr5)); //true