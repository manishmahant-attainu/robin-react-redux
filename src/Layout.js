import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Layout.css';
const Layout = ({children}) => {
    return (
        <Fragment>
            <div class="topnav">
                <Link to="/" active>Todo</Link>
                <Link to="/todo-history">Todo History</Link>
                <Link to="/posts">Post List</Link>
            </div>
            <div style={{paddingLeft:'16px'}}>
                {children}
            </div>
        </Fragment>
    );
};

export default Layout