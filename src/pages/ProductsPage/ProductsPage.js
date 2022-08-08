import "./styles.css"
import ProductCard from "./ProductCard"
import Loader from "../../components/Loader/Loader"

const ProductsPage = ({ navigate, data }) => {

    if (data.length === 0) {
        return <Loader />
    }

    return (
        <div className="products-page">
            {data.map(i =>
                <ProductCard key={i.id} id={i.id} name={i.name} imageURL={i.image.url} price={i.price} navigate={navigate} />
            )}
        </div>
    )
}

export default ProductsPage