import { useEffect, useState } from "react"
import Loader from "../../components/Loader/Loader"
import "./style.css"

const SingleProductPage = ({ data, searchParams, navigate, setCart, cart }) => {
    const [count, setCount] = useState(1)
    const [product, setProduct] = useState({})

    useEffect(() => {
        const filteredProduct = data.filter(i => i.id == searchParams.get("id"))
        setProduct(filteredProduct[0])
    }, [])

    const decrease = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    }

    const increase = () => {
        if (count < 10) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const addToCart = () => {
        if (cart.some(i => i.id == searchParams.get("id"))) {
            setCart(prevCart => prevCart.map(i => (i.id == searchParams.get("id") ? { ...i, qty: i.qty + count, total: (i.qty + count) * i.price } : i)))
        } else {
            setCart([...cart, { ...product, qty: count, total: count * product.price }])
        }
        navigate("/cart")
    }

    const goBack = () => {
        navigate(-1)
    }

    if (product.id === undefined) {
        return <Loader />
    }

    return (
        <div className="single-product">
            <button className="backBTn" onClick={goBack}>BACK</button>
            <div className="single-product-wrapper">
                <div>
                    <img className="product_img" src={product.image.url} alt="product-img" />
                </div>
                <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <p>Cost: {product.price}</p>
                    <div className="product-counter">
                        <button className="minus" style={{ backgroundColor: count > 1 && "red" }} onClick={decrease}>
                            -</button>
                        <p className="count">{count}</p>
                        <button style={{ backgroundColor: count < 10 && "green" }} className="add" onClick={increase}>
                            +</button>
                    </div>
                    <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage