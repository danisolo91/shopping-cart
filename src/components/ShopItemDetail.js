import { useContext, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../context/CartContext";
import ShopAddToCart from './ShopAddToCartBtn';
import ShopItemOptions from './ShopItemOptions';
import ShopCartBtn from "./ShopCartBtn"

const ShopItemDetail = ({ products }) => {

    let { productId } = useParams(); // get productId from the URL
    const product = useState(products.filter(p => p.id === productId)[0])[0];

    const cart = useContext(CartContext)[0];
    // check if the product is in the cart
    const productInCart = (id) => cart.products.some(p => p.id === id);

    return (
        <>
            <ShopCartBtn />
            <h3>{product.name}</h3>
            <div className="item-detail">
                <div className="img-container">
                    <img src={`images/`+product.image} alt={product.name} />
                </div>
                <div>
                    <div className="detail">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque cupiditate omnis aspernatur incidunt temporibus eius, odio quis, reprehenderit voluptas magnam velit nihil fuga nam, esse maiores consequuntur consequatur adipisci cum. <br /><br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque cupiditate omnis aspernatur incidunt temporibus eius, odio quis, reprehenderit voluptas magnam velit nihil fuga nam, esse maiores consequuntur consequatur adipisci cum.</p>
                        <div className="item-price">{product.price.toFixed(2)}€</div>
                        {!productInCart(product.id) ?
                            <ShopAddToCart product={product} /> :
                            <ShopItemOptions product={product} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopItemDetail;