import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from '../Todos';
import Posts from '../Posts';
import TodoHistory from '../TodoHistory';
import Layout from '../Layout';

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
