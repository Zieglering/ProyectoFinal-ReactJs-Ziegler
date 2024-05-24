import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const productExists = cart.some(cartProduct => cartProduct.product.id === product.id);

        if (productExists) {
            const updatedCart = cart.map(cartProduct =>
                cartProduct.product.id === product.id
                    ? { ...cartProduct, quantity: cartProduct.quantity + quantity }
                    : cartProduct
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };

    const updateCartItemQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map(cartProduct =>
            cartProduct.product.id === productId ? { ...cartProduct, quantity: newQuantity } : cartProduct
        );
        setCart(updatedCart);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(cartProduct => cartProduct.product.id !== productId);
        setCart(updatedCart);
    };

    const emptyCart = () => setCart([]);

    const getTotal = () => {
        const productPrice = cart.map(cartProduct => (cartProduct.product.price * cartProduct.quantity), 0);
        const total = productPrice.reduce((acc, current) => acc + current, 0);
        return total;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity, emptyCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}