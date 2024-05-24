import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

function ItemCount({ detail }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const add = () => {
        setQuantity(quantity + 1);
    };

    const substract = () => {
        if (quantity === 1) { return 1; }
        setQuantity(quantity - 1);
    };

    return (
        <>
            <div>
                <p>Cantidad: {quantity}</p>
                <button className="itemCountButtons" type='button' onClick={substract}>-</button>
                <button className="itemCountButtons" type='button' onClick={add}>+</button>
            </div>
            <button type="button" className="btn btnAddToCart" onClick={() => addToCart(detail, quantity)} >Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;