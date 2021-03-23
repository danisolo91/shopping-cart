import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ShopAddToCart from './ShopAddToCartBtn';
import ShopCartBtn from './ShopCartBtn';
import ShopItemOptions from './ShopItemOptions';

const Shop = ({ products }) => {

    const cart = useContext(CartContext)[0];

    // check if the product is in the cart
    const productInCart = (id) => cart.products.some(p => p.id === id);

    return (
        <>
            <ShopCartBtn />
            <div className="shop-list">
                {products.map(product => {
                    return (
                        <div key={product.id} className="shop-item">
                            <Link to={'/shop/'+product.id}>
                                <div className="item-content">
                                    <div className="item-image">
                                        <img src={`images/`+product.image} alt={product.name} />
                                    </div>
                                    <div className="item-name">{product.name}</div>
                                    <div className="item-price">{product.price.toFixed(2)} €</div>
                                </div>
                            </Link>
                            {!productInCart(product.id) ?
                                <ShopAddToCart product={product} /> :
                                <ShopItemOptions product={product} />
                            }
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Shop;