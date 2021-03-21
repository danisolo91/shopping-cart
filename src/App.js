import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import ShopItemDetail from './components/ShopItemDetail';

const App = () => {
    return (
        <BrowserRouter>
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
                    <Route exact path="/shop" component={Shop} />
                    <Route path="/shop/:id" component={ShopItemDetail} />
                </Switch>
                <div className="footer">
                Created by <a href="detail.html">Daniel Solomon</a>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;