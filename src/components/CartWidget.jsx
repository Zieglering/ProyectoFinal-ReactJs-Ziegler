import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartWidget() {
    const { cart } = useCart();
    const totalQuantity = cart.reduce((acc, cartProduct) => acc + cartProduct.quantity, 0);

    return (
        <Link to="/Cart">
            <button type="button" className="btn position-relative cartPos">
                <div>
                    <img className="cartSize" src='/assets/images/store/img_Carrito.png' alt="icono Carrito" />
                </div>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                    <span className="visually-hidden">Productos en carrito</span>
                </span>
            </button>
        </Link>
    );
}

export default CartWidget;