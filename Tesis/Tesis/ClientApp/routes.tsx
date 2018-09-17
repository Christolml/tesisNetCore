import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { PrimerosPasos } from './components/PrimerosPasos';
import { ComandosDotNet } from './components/ComandosDotNet';
import { RazorPages } from './components/RazorPages';
import { CRUD } from './components/CRUD';
import { Logging } from './components/Logging';
import { Autenticacion } from './components/Autenticacion';
import { AutenticacionExterna } from './components/AutenticacionExterna';
import { Autorizacion } from './components/Autorizacion';
import { WebAPI } from './components/WebAPI';  
import { Swagger } from './components/Swagger';  






export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/netcore/PrimerosPasos' component={PrimerosPasos} />
    <Route path='/netcore/ComandosDotNet' component={ComandosDotNet} />
    <Route path='/netcore/RazorPages' component={RazorPages} />
    <Route path='/netcore/CRUD' component={CRUD} />
    <Route path='/netcore/Logging' component={Logging} />
    <Route path='/netcore/Autenticacion' component={Autenticacion} />
    <Route path='/netcore/AutenticacionExterna' component={AutenticacionExterna} />
    <Route path='/netcore/Autorizacion' component={Autorizacion} />
    <Route path='/netcore/WebAPI' component={WebAPI} />
    <Route path='/netcore/Swagger' component={Swagger} />





</Layout>;
