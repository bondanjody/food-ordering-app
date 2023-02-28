import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemove = id => {

    }

    const cartItemAdd = item => {

    }

    const cartItem = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item => <li><CartItem  key={item.id} amount={item.amount} price={item.price} name={item.name} onRemove={cartItemRemove.bind(null, item.id)} onAdd={cartItemAdd.bind(null, item)} /></li>)
            }
    </ul>;

    return <Modal onHideCart={props.onHideCart}>
        {cartItem}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};

export default Cart;