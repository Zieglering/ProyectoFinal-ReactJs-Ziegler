import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import '../styles/Cart.css';
import Swal from "sweetalert2";


function Cart() {
    const { cart, getTotal, emptyCart } = useCart();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (cart) {
            setLoading(false);
        }
    }, [cart]);

    const handleEmptyCart = () => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: '¡Esta acción removerá todos los elementos de tu carrito!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Vaciar el carrito!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCart();
                Swal.fire(
                    '¡Carrito Vaciado!',
                    'Los productos fueron quitados del carrito correctamente.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="cart-container">
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div>
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <h2>El carrito está vacío</h2>
                            <Link to="/" className="back-to-shop">Volver a la página principal</Link>
                        </div>
                    ) : (
                        <div>
                            <div className="cart-items">
                                <CartItem />
                            </div>
                            <div className="cart-summary">
                                <h2>Total: ${getTotal()}</h2>
                                <Link to='/checkout' className="checkout-button">Proceder al checkout</Link>
                            </div>
                            <button onClick={handleEmptyCart} className="clear-cart">Vaciar el carrito</button>
                        </div>

                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;
