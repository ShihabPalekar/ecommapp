import { useEffect, useState } from "react"
import Product from "../components/Product/Product"
import mockdata from "../mockdata"

const ProductsPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        // mocking API call
        setData(mockdata)
    }, [])

    if (data.length === 0) {
        return (
            <div className="lodaer">
                <h3>...loading</h3>
            </div>
        )
    }
    console.log(data)
    return (
        data.map(i =>
            <Product key={i.id} name={i.name} imageURL={i.image.url} price={i.price} />
        )
    )
}

export default ProductsPage