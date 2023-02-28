import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0); 

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    // Destructuring
    const {items} = cartCtx;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        // reset
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        // clean up
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;