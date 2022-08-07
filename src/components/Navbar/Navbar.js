import "./styles.css"
import {Home, Cart} from "../../images"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="logotxt">STYLE<span className="logotxt-Up">UP</span></h1>
            <div className="icons-wrapper">
                <img src={Home} alt="home-icon" className="home-icon"/>
                <img src={Cart} alt="cart-icon" className="cart-icon"/>
            </div>
        </div>
    )
}

export default Navbar