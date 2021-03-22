import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const ShopItemOptions = ({ productId }) => {

    const [cart, setCart] = useContext(CartContext);

    const addItem = (id) => {
        setCart(prevState => {
            return {
                amount: prevState.amount + 1,
                products: prevState.products.map(product => {
                    if(product.id === id) product.amount += 1;
                    return product;
                }),
            };
        });
    };

    const substractItem = (id) => {
        setCart(prevState => {
            return {
                amount: prevState.amount - 1,
                products: prevState.products.map(product => {
                    if(product.id === id) product.amount -= 1;
                    return product;
                }),
            };
        });
    };

    const [productAmount, setProductAmount] = useState(0);

    useEffect(() => {
        cart.products.forEach(p => {
            if(p.id === productId) {
                if(p.amount > 0) {
                    setProductAmount(p.amount);
                } else {
                    // if product amount 0 then remove from the cart
                    setCart(prevState => {
                        return {
                            amount: prevState.amount,
                            products: prevState.products.filter(product => product.id !== p.id),
                        };
                    });
                }
            }
        });
    }, [cart, productId, setCart]);

    return (
        <div className="item-options">
            <div className="item-btn left" onClick={() => substractItem(productId)}>-</div>
            <div className="item-amount">{productAmount}</div>
            <div className="item-btn right" onClick={() => addItem(productId)}>+</div>
        </div>
    );
};

export default ShopItemOptions;