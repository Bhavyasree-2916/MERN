import { useParams } from "react-router-dom"

const ProductDetails = () => {
  const { id } = useParams()
    const products = [
        { id: 1, name: 'Mobile', desc: 'With call feature' },
        { id: 2, name: 'Laptop', desc: 'High performance device' },
        { id: 3, name: 'Keyboard', desc: 'Mechanical keyboard' }
    ]
    const product=products.find((p=>p.id===Number(id)))
  return (
    <div>
      <h1 className="w-100 text-center font-extrabold">Product Details</h1>
      <h3 className="font-bold">{product.name}</h3>
      <h3 className="font-bold">{product.desc}</h3>
    </div>
  )
}

export default ProductDetails