import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from '../containers/Todos';
import Posts from '../containers/Posts';
import TodoHistory from '../containers/TodoHistory';
import Layout from '../containers/Layout';

const Routes = () => {
    return (
        <Switch>
            <Layout>
                <Route path='/' exact={true} component={Todos} />
                <Route path='/todo-history' exact={true} component={TodoHistory} />
                <Route path='/posts' exact={true} component={Posts} />
            </Layout>
        </Switch>
    )
};
export default Routes;
