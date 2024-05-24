import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { createOrder } from "../firebase/db";
import Swal from 'sweetalert2';
import '../styles/CheckoutForm.css';

function CheckoutForm() {
    const { cart, getTotal, emptyCart } = useCart();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const [name, email, phone] = evt.target.elements;
        const newOrder = {
            buyer: {
                name: name.value,
                email: email.value,
                phone: phone.value
            },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        };
        const orderId = await createOrder(newOrder);
        emptyCart();
        Swal.fire({
            title: 'Orden Enviada',
            html: `
                <p>Thank you for your purchase, ${newOrder.buyer.name}!</p>
                <p>Order ID: ${orderId}</p>
                <div class="order-items">
                    ${newOrder.items.map(item => `
                        <div class="item" key=${item.product.id}>
                            <img src="${item.product.image}" alt="${item.product.title}" style="width: 50px; height: 50px;" />
                            <div class="item-details">
                                <span>${item.product.title}</span>
                                <span>$${item.product.price * item.quantity}</span>
                            </div>
                            <div class="item-quantity">
                                <span>Quantity: ${item.quantity}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="total">
                    <span>Total: </span>
                    <span>$${newOrder.total}</span>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className="checkout-container">
            <h2>Carrito</h2>
            {cart.map((item) => (
                <div className="item" key={item.product.id}>
                    <img src={item.product.image} alt={item.product.title} />
                    <div className="item-details">
                        <span>{item.product.title}</span>
                        <span>${item.product.price * item.quantity}</span>
                    </div>
                    <div className="item-quantity">
                        <span>{item.quantity}</span>
                    </div>
                </div>
            ))}
            <button className="clear-cart" onClick={emptyCart}>Borrar Carrito</button>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" name="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Número de teléfono</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Ingresa tu teléfono" name="phone" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Comentarios (Opcional)</label>
                    <textarea className="form-control" id="feedback" rows="4" placeholder="Dejanos algún comentario o instrucción para el envío"></textarea>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>${getTotal()}</span>
                </div>
                <button type="submit" className="checkout-button">Checkout</button>
            </form>
        </div>
    );
}

export default CheckoutForm;