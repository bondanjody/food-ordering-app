import React from 'react';
import classes from './Header.module.css';
import mealPics from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Bondan Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} onHideCart={props.onHideCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealPics} alt="mealpics.jpg" />
        </div>
    </React.Fragment>
}

export default Header;