import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ShopItemOptions from './ShopItemOptions';

const ShopCart = ({ products }) => {

    const cart = useContext(CartContext)[0];

    // store in cartProducts local state the entire product 
    // object from products array if it exists in the cart
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        let items = [];
        cart.products.forEach(product => {
            products.forEach(p => {
                if(p.id === product.id) {
                    p.totalPrice = product.amount * p.price;
                    items = items.concat(p);
                }
            });
        });
        setCartProducts(items);
    }, [cart, products, setCartProducts]);

    // calculate the total cost when cartProducts updates
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if(cartProducts.length > 0) {
            let total = 0;
            cartProducts.forEach(p => total += p.totalPrice);
            setTotal(total);
        }
    }, [cartProducts]);

    return (
        <>
            <h3>Cart <span>({cart.amount} items)</span></h3>
            <div className="cart">
                {cartProducts.length > 0 ?
                    <>
                        {cartProducts.map(product => {
                            return (
                                <div key={product.id} className="cart-item">
                                    <div>
                                        <div className="cart-item-name">{product.name}</div>
                                        <div className="cart-item-options">
                                            <ShopItemOptions product={product} />
                                        </div>
                                    </div>
                                    <div className="cart-item-price"><span>{product.totalPrice.toFixed(2)} €</span></div>
                                </div>
                            );
                        })}
                        <div className="pay-total">
                            
                            <div className="btn pay-now"><i className="bi bi-credit-card"></i> Pay now!</div>
                            <div className="total-price">{total.toFixed(2)} €</div>
                        </div>
                    </> : 
                    <p>The cart is empty!</p>
                }
            </div>
        </>
    );
};

export default ShopCart;