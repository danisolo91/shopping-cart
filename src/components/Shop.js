import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import ShopAddToCart from './ShopAddToCart';
import ShopItemOptions from './ShopItemOptions';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);

    const addToCart = (id) => {
        setCart(prevState => prevState.concat({ id: id, amount: 1 }));
    };

    const productInCart = (id) => cart.some(p => p.id === id);

    const addItem = (id) => {
        setCart(prevState => prevState.map(product => {
            if(product.id === id) product.amount += 1;
            return product;
        }));
    };

    const substractItem = (id) => {
        setCart(prevState => prevState.map(product => {
            if(product.id === id) product.amount -= 1;
            return product;
        }));
    };

    useEffect(() => {
        let total = 0;
        cart.forEach(p => total += p.amount);
        setCartAmount(total);
    }, [cart]);

    return (
        <>
            <div className="shop-top">
                <a className="btn margin-left" href="cart.html"><i className="bi bi-cart4"></i> Cart ({cartAmount})</a>
            </div>
            <div className="shop-list">
                {products.map(product => {
                    return (
                        <div key={product.id} className="shop-item">
                            <Link to={'/shop/'+product.id}>
                                <div className="item-content">
                                    <div className="item-image">
                                        <img src={`images/${product.image}.png`} alt={product.name} />
                                    </div>
                                    <div className="item-name">{product.name}</div>
                                </div>
                            </Link>
                            {!productInCart(product.id) ?
                                <ShopAddToCart 
                                    productId={product.id}
                                    addToCart={addToCart} 
                                /> :
                                <ShopItemOptions 
                                    productId={product.id}
                                    cart={cart}
                                    addItem={addItem}
                                    substractItem={substractItem}
                                />
                            }
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Shop;