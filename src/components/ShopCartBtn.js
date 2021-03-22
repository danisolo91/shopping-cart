import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

const ShopCartBtn = () => {

    const cart = useContext(CartContext)[0];

    return (
        <>
            <div className="shop-top">
                <Link className="btn margin-left" to="/shop/cart"><i className="bi bi-cart4"></i> Cart ({cart.amount})</Link>
            </div>
        </>
    );
};

export default ShopCartBtn;