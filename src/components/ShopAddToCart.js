const ShopAddToCart = (props) => {
    return (
        <div className="add-cart-btn" onClick={() => props.addToCart(props.productId)}>
            <i className="bi bi-plus-circle"></i> Add to cart
        </div>
    );
};

export default ShopAddToCart;