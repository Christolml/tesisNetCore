import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { leccion1 } from './components/leccion1';
import { leccion2 } from './components/leccion2';
import { leccion3 } from './components/leccion3';
import { leccion3b } from './components/leccion3b';
import { leccion4 } from './components/leccion4';


export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/leccion1' component={leccion1} />
    <Route path='/leccion2' component={leccion2} />
    <Route path='/leccion3' component={leccion3} />
    <Route path='/leccion3b' component={leccion3b} />
    <Route path='/leccion4' component={leccion4} />


</Layout>;
