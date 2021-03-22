import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ShopItemOptions from './ShopItemOptions';

const ShopCart = ({ products }) => {

    const [cart, setCart] = useContext(CartContext);

    const removeProduct = (id) => {
        let amount = 0;
        cart.products.forEach(p => { if(p.id === id) amount = p.amount});
        setCart(prevState => {
            return {
                amount: prevState.amount - amount,
                products: prevState.products.filter(product => product.id !== id),
            };
        });
    }

    // store in cartProducts local state the entire product 
    // object from products array if it exists in the cart
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        let items = [];
        cart.products.forEach(product => {
            items = items.concat(products.filter(p => p.id === product.id)[0]);
        });
        setCartProducts(items);
    }, [cart, products, setCartProducts]);

    return (
        <>
            <h3>Cart <span>({cart.amount} items)</span></h3>
            <div className="cart">
                {cartProducts.length > 0 ?
                    <>
                        {cartProducts.map(product => {
                            return (
                                <div key={product.id} className="cart-item">
                                    <div className="cart-item-name">{product.name}</div>
                                    <ShopItemOptions productId={product.id} />
                                    <div className="cart-item-delete" 
                                        onClick={() => removeProduct(product.id)}>
                                        <i className="bi bi-trash pointer"></i>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="btn pay-now"><i className="bi bi-credit-card"></i> Pay now!</div>
                    </> :                    
                    <p>The cart is empty!</p>
                }
            </div>
        </>
    );
};

export default ShopCart;