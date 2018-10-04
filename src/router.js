import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Landing from './components/Pages/Landing/Landing';
import About from './components/Pages/About/About';
import Account from './components/Pages/Account/Account';
import Cart from './components/Pages/Cart/Cart';
// import Product from './components/Product/Product';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/account' component={Account} />
        <Route path='/cart' component={Cart} />
        {/* <Route path='/product' component={Product} /> */}
    </Switch>
)