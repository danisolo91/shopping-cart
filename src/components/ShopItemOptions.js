import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const ShopItemOptions = ({ product }) => {

    const [cart, setCart] = useContext(CartContext);

    const addItem = (p) => {
        setCart(prevState => {
            return {
                amount: prevState.amount + 1,
                products: prevState.products.map(prod => {
                    if(prod.id === p.id) prod.amount += 1;
                    return prod;
                }),
            };
        });
    };

    const substractItem = (p) => {
        setCart(prevState => {
            return {
                amount: prevState.amount - 1,
                products: prevState.products.map(prod => {
                    if(prod.id === p.id) prod.amount -= 1;
                    return prod;
                }),
            };
        });
    };

    const [productAmount, setProductAmount] = useState(0);

    useEffect(() => {
        cart.products.forEach(p => {
            if(p.id === product.id) {
                if(p.amount > 0) {
                    setProductAmount(p.amount);
                } else {
                    // if product amount 0 then remove from the cart
                    setCart(prevState => {
                        return {
                            amount: prevState.amount,
                            products: prevState.products.filter(prod => prod.id !== p.id),
                        };
                    });
                }
            }
        });
    }, [cart, product, setCart]);

    return (
        <div className="item-options">
            <div><div className="item-btn" onClick={() => substractItem(product)}>
                <i className="bi bi-dash"></i>
            </div></div>
            <div className="item-amount">{productAmount}</div>
            <div><div className="item-btn" onClick={() => addItem(product)}>
                <i className="bi bi-plus"></i>
            </div></div>
        </div>
    );
};

export default ShopItemOptions;