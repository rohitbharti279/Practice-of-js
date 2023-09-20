const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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