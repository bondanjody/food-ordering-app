import React from 'react';
import classes from './Header.module.css';
import mealPics from '../../assets/meals.jpg';

const Header = () => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Bondan Meals</h1>
        </header>
        <div className={classes['main-image']}>
            <img src={mealPics} alt="mealpics.jpg" />
        </div>
    </React.Fragment>
}

export default Header;