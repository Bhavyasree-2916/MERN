let arr = [1, 2, 3, 4, 5, 0]
const addone = (num) => { return num + 1 }
let res = arr.map(addone)

let double = arr.map((num) => num * 2)
console.log(res)
console.log(double)

let arr1 = [5, 7, 4, 2, 3]
let value = arr1.map((num) => num * 5)
console.log(value)


//Array of objects
//map : returns new array after applying the function.
let products = [
    { id: 1, name: 'Laptop', price: 25000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 2, name: 'Keyboard', price: 1000 },

]
let productName = products.map((product) => { console.log(product.name) })

//filter: It will return the new array after applying the condition when the condition is satisfied then it will print those numbers in new array.
let arr3 = [1, 2, 3, 4, 5, 6]
let b = arr3.filter((num) => num > 3)
console.log(b);

let arr4 = [1, 2, 3, 4, 5, 6]
let b1 = arr4.filter((num) => num % 2 == 0)
console.log(b1);

let product = products.filter((p) => p.price > 6000)
console.log(product)


//reduce:reduce to one value.
let products1 = [
    { id: 1, name: 'Laptop', price: 25000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 2, name: 'Keyboard', price: 1000 },

]
let productName1 = products1.map((product) => { console.log(product.name) })
let totalprice = products1.reduce((total, curr) => {
    return total + curr.price;
}, 0);

console.log(totalprice);

//find: It returns first matching element
let a = products1.find((p) => p.id == 2)
console.log(a);

//Destructuring: Extracting values from array/object assigning it to the distinct variables.
let [x, y] = [5, 15];
console.log(x); // 5
console.log(y); // 15


let array = [11, 2, 23, 33, 56];
let [eleven, two, twentythree, thirtythree, fiftysix] = array;
console.log(eleven);        // 11
console.log(two);           // 2
console.log(twentythree);   // 23
console.log(thirtythree);   // 33
console.log(fiftysix);      // 56

let student = {
    name: "Hema",
    department: "CSE",
    age: 19
}
const { name, department } = student
console.log(name, department)

let car = {
    brand: "BMW",
    year: "2024"
}
const { brand } = car
console.log(brand)
//spread operators for objects:we can update the existing value and copy the values from one object to another object.
let newCar = { ...car, year: 2026 }
console.log(newCar);

const promise = new Promise((resolve, reject) => {
    let success=false
    if(success){
        resolve("data received Successfully")
    }else{
        reject("error fetching data")
    }
}
)
promise.then((data) => console.log(data)).catch((error) => console.log(error))
//Sprerad Operators for array elements: we can copy from one array to another array also we can add the values for previous array.
let arr5 = [11, 22, 33, 44, 55]
let arr6 = [...arr5, 66, 77]
console.log(arr6);

//Rest Operator:
let arr7 = [11, 22, 33, 44]
let [first, ...other] = arr7
console.log(other)

let arr8 = [66, 77]
let arr9 = [...arr7, ...arr8]
console.log(arr9);

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data)

        // Print all user emails
        data.map((user) => console.log(user.email))
        data.map((user) => console.log(user.address.city))

    } catch (error) {
        console.log(error)
    }
}

fetchData()