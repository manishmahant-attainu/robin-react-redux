import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Layout.css';
const Layout = (props) => {
    const { children, location: {pathname} } = props;
    return (
        <Fragment>
            <div className="topnav">
                <Link className={pathname==='/'?'active':''} to="/">Todo</Link>
                <Link className={pathname==='/todo-history'?'active':''} to="/todo-history">Todo History</Link>
                <Link className={pathname==='/posts'?'active':''} to="/posts">Posts</Link>
            </div>
            <div style={{paddingLeft:'16px'}}>
                {children}
            </div>
        </Fragment>
    );
};

export default withRouter(React.memo(Layout))
