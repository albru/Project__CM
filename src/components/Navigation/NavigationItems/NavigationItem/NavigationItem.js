import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const NavigationItem = props => {

    return ( 
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.route}
                exact={props.exact}>{props.name}</NavLink>
        </li>
        )
};

export default NavigationItem;