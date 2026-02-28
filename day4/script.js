let arr = [1,2,3,4,5,6]
const addone=(num)=>{return num+1}
let res=arr.map(addone)

let double=arr.map((num)=>num*2)
console.log(double)

let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyboard',price:2000}
]
let product=products.map((product)=>{console.log(product.name,product.price,product.id)})
