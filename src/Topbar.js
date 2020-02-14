import React from 'react';

import classes from './Topbar.module.css';

const Topbar = (props) => {
    return(
        <div className={classes.Top}>
            <h1>Like: {props.like}</h1>
            <h1>Dislike: {props.dislike}</h1>
        </div>
    );
}
export default Topbar;