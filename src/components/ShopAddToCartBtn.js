import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShopAddToCart = ({ product }) => {

    const setCart = useContext(CartContext)[1];

    const addToCart = (p) => {
        setCart(prevState => {
            return {
                amount: prevState.amount + 1,
                totalPrice: prevState.totalPrice + p.price,
                products: [...prevState.products, { id: p.id, amount: 1, }],
            };
        });
    };

    return (
        <div className="add-cart-btn" onClick={() => addToCart(product)}>
            <i className="bi bi-plus-circle"></i> Add to cart
        </div>
    );
};

export default ShopAddToCart;