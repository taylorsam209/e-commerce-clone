import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Account from './components/Account/Account';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/account' component={Account} />
        <Route path='/cart' component={Cart} />
        <Route path='/roduct' component={Product} />
    </Switch>
)