import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className="nav-container">
            <img src="react-proyecto-1\src\img\icono.png" className="navbar-logo"/>
            <h3>🐱‍💻</h3>
            
        <div className="nav-links">

<button>Cascos</button>
<button>Armaduras</button>
<button>Guantes</button>


        </div>
        <div className="cart-widget-container">
                <CartWidget />
            </div>
        </nav>
    );
};
