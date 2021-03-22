import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cart, setCart] = useState({
        amount: 0,
        products: [],
    });

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    );
};