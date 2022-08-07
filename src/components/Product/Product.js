import "./style.css"

const Product = ({ name, price, imageURL }) => {
    return (
        <div className="product">
            <h3>{name}</h3>
            <img src={imageURL} alt="product-image" className="productImg"/>
            <p>Cost: {price}</p>
        </div>
    )
}

export default Product