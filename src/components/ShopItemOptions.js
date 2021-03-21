import { useEffect, useState } from "react";

const ShopItemOptions = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        props.cart.forEach(p => {
            if(p.id === props.productId) setProduct(p);
        });
    }, [props.cart, props.productId]);

    return (
        <div className="item-options">
            <div className="item-btn left" onClick={() => props.substractItem(product.id)}>-</div>
            <div className="item-amount">{product.amount}</div>
            <div className="item-btn right" onClick={() => props.addItem(product.id)}>+</div>
        </div>
    );
};

export default ShopItemOptions;