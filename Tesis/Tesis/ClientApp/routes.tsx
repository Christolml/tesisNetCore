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

import { identity } from './components/Identity';
import { tagHelpers } from './components/tagHelpers';
import { EFC } from './components/EFC';
import { Autenticacion } from './components/Autenticacion';
import { AutenticacionExterna } from './components/AutenticacionExterna';
import { Autorizacion } from './components/Autorizacion';
import { WebAPI } from './components/WebAPI';  
import { Swagger } from './components/Swagger';

import { Middleware } from './components/Middleware';
import { ConfiguracionAvanzada } from './components/ConfiguracionAvanzada';
import { ViewComponent } from './components/ViewComponent';
import { Hosting } from './components/Hosting';
import { Enviroments } from './components/Enviroments';
import { Localizacion } from './components/Localizacion'; 








export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/netcore/PrimerosPasos' component={PrimerosPasos} />
    <Route path='/netcore/ComandosDotNet' component={ComandosDotNet} />
    <Route path='/netcore/RazorPages' component={RazorPages} />
    <Route path='/netcore/CRUD' component={CRUD} />
    <Route path='/netcore/Logging' component={Logging} />

    <Route path='/netcore/Identity' component={identity} />
    <Route path='/netcore/TagHelpers' component={tagHelpers} />
    <Route path='/netcore/EFC' component={EFC} />

    <Route path='/netcore/Autenticacion' component={Autenticacion} />
    <Route path='/netcore/AutenticacionExterna' component={AutenticacionExterna} />
    <Route path='/netcore/Autorizacion' component={Autorizacion} />
    <Route path='/netcore/WebAPI' component={WebAPI} />
    <Route path='/netcore/Swagger' component={Swagger} />
            
    <Route path='/netcore/Middleware' component={Middleware} />
    <Route path='/netcore/ConfiguracionAvzda' component={ConfiguracionAvanzada} />
    <Route path='/netcore/ViewComponent' component={ViewComponent} />
    <Route path='/netcore/Hosting' component={Hosting} />
    <Route path='/netcore/Enviroments' component={Enviroments} />
    <Route path='/netcore/Localizacion' component={Localizacion} />







</Layout>;
