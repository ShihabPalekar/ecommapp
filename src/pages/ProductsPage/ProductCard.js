const ProductCard = ({ id, name, price, imageURL, navigate }) => {
    const handleRoute = (id) => () => {
        navigate(`/product?id=${id}`)
    }
    return (
        <div className="product-card" onClick={handleRoute(id)}>
            <img src={imageURL} alt="product-image" className="productImg" />
            <p className="product-name">{name}</p>
            <p className="product-cost">Cost: {price}</p>
        </div>
    )
}

export default ProductCard