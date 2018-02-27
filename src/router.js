import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Account from './components/Account/Account';
import Cart from './components/Account/Account';
import Product from './components/Product/Product';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/About' component={About} />
        <Route path='/Account' component={Account} />
        <Route path='/Cart' component={Cart} />
        <Route path='/Product' component={Product} />
    </Switch>
)