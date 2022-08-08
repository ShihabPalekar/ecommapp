import "./style.css"

const ShoppingCart = ({ cart, navigate,setCart }) => {

    const placeOrder = () => {
        setCart([])
        navigate("/order-placed")
    }

    if (cart.length === 0) {
        return <h3 className="cart-empty-msg"><i>No proucts added to cart.</i></h3>
    }
    return (
        <div className="cart">
            <h3>Shopping Cart</h3>
            <div className="product-tabs-wrapper">
                {cart.map(i => (
                    <div key={i.id} className="product-tab">
                        <img className="product-img" src={i.image.url} alt="product-img" />
                        <div className="info">
                            <div>
                                <p>{i.name}</p>
                                <p><b>Qty: </b>{i.qty}</p>
                                <p><b>Cost: </b>{i.price}</p>
                            </div>
                            <p><b>Total: </b>{i.total}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bottom-tabs-wrapper">
                <div className="cart-total">
                    <h4>Cart Total: </h4>
                    <p> {cart.reduce((num, i) => { return i.total + num }, 0)}</p>
                </div>
                <div className="place-order" onClick={placeOrder}>
                    <h4>Place Order</h4>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart