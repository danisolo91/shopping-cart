const ShopCartBtn = ({ cartAmount }) => {
    return (
        <>
            <div className="shop-top">
                <a className="btn margin-left" href="cart.html"><i className="bi bi-cart4"></i> Cart ({cartAmount})</a>
            </div>
        </>
    );
};

export default ShopCartBtn;