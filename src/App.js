import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import ShopCart from './components/ShopCart';
import ShopItemDetail from './components/ShopItemDetail';
import { CartProvider } from './context/CartContext';
import products from './products';

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="header">
                    <div className="container top">
                        <div className="logo">Shopping<b>Cart</b></div>
                        <nav>
                            <NavLink to="/" exact activeClassName="active">Home</NavLink>
                            <NavLink to="/shop" activeClassName="active">Shop</NavLink>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/shop"><Shop products={products} /></Route>
                        <Route exact path='/shop/cart'><ShopCart products={products} /></Route>
                        <Route path="/shop/:productId"><ShopItemDetail products={products} /></Route>
                    </Switch>
                    <div className="footer">
                    Created by <a href="detail.html">Daniel Solomon</a>
                    </div>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;