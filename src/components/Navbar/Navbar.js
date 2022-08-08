import "./styles.css"
import { Link } from "react-router-dom"
import { Home, Cart } from "../../images"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="logotxt">STYLE<span className="logotxt-Up">UP</span></h1>
            <div className="icons-wrapper">
                <Link to="/">
                    <img src={Home} alt="home-icon" className="home-icon" />
                </Link>
                <Link to="/cart">
                    <img src={Cart} alt="cart-icon" className="cart-icon" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar