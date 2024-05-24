import { useCart } from "../context/CartContext";
import '../styles/CartItem.css';


function CartItem() {
    const { cart, removeFromCart, updateCartItemQuantity } = useCart();

    return (
        <div>
            {cart.map(cartProduct => (
                <div className="cart-item" key={cartProduct.product.id}>
                    <img src={cartProduct.product.image || "/assets/images/IMG_placeholder.jpg"} className="item-image" alt="" />
                    <div className="item-details">
                        <h5 className="item-title">{cartProduct.product.title}</h5>
                        <p className="item-description">{cartProduct.product.description}</p>
                        <div className="item-quantity">
                            <button onClick={() => updateCartItemQuantity(cartProduct.product.id, cartProduct.quantity - 1)}>-</button>
                            <span className="quantity">{cartProduct.quantity}</span>
                            <button onClick={() => updateCartItemQuantity(cartProduct.product.id, cartProduct.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <button onClick={() => removeFromCart(cartProduct.product.id)} className="remove-button">Quitar</button>
                </div>
            ))}
        </div>
    );
}

export default CartItem;