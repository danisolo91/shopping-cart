import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShopAddToCart = ({ productId }) => {

    const setCart = useContext(CartContext)[1];

    const addToCart = (id) => {
        setCart(prevState => {
            return {
                amount: prevState.amount + 1,
                products: [...prevState.products, { id: id, amount: 1 }],
            };
        });
    };

    return (
        <div className="add-cart-btn" onClick={() => addToCart(productId)}>
            <i className="bi bi-plus-circle"></i> Add to cart
        </div>
    );
};

export default ShopAddToCart;