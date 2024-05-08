import Product from "./Product "

export default function ListProduct() {
    const products = [
        {
            id: 1,
            name: "Bưởi da xanh",
            price: 200000,
            quantity: 10,
        },
        {
            id: 2,
            name: "Chuối",
            price: 300000,
            quantity: 7,
        },
        {
            id: 3,
            name: "Nho",
            price: 500000,
            quantity: 8,
        },
    ]
  return (
    <div>
        <Product products = {products}></Product>
    </div>
  )
}