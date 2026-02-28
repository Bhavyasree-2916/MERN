let arr = [1,2,3,4,5,6]
const addone=(num)=>{return num+1}
let res=arr.map(addone)

let double=arr.map((num)=>num*2)
console.log(double)

let b=arr.filter((num)=>num>3)
console.log(b)

let c=arr.filter((num)=>num%2===0)
console.log(c)

let sum = arr.reduce((total,curr)=>{return total+curr},0)
console.log(sum)

let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyboard',price:2000}
]
let product=products.map((product)=>{console.log(product.name,product.price,product.id)})

let x = products.filter((p)=>p.price>6000)
console.log(x)

let p = products.reduce((total,product)=>total+product.price,0)
console.log(p)

let a = products.find((p)=>p.id>1)
console.log(a)

let student={
    name:"xyz",
    department:"CSE",
    age:22
}
const {name,department}=student
console.log(name,department)