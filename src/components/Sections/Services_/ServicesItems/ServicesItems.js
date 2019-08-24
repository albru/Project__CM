import React from 'react';

import { servicesData } from '../../../../store/data/servicesData';
import ServicesItem from './ServicesItem/ServicesItem';
import classes from './ServicesItems.css';

const servicesItems = (props) => {

    const servicesItems = servicesData.map((item, index) => {
        return (
            <ServicesItem 
                key={index}
                title={item.title}
                href={item.href}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                desc={item.desc} />
        )
    })

    return (
        <ul className={classes.ServicesItems}>
            {servicesItems}
        </ul>
    )
};

export default servicesItems;