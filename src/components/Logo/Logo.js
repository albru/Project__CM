import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css';

const logo = props => {
    return (
        <div className={classes.Logo}>
            <Link to="/">CetusMedia</Link>
        </div>
    )
};

export default logo;