import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';



export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>Tesis</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>



                        <div id="MainMenu">
                            <div className="list-group panel">

                                <a href="#demo3" className="list-group-item list-group-item active" data-toggle="collapse" data-parent="#MainMenu">Weas de NET Core</a>
                                <div className="collapse" id="demo3">
                                    <a className="list-group-item">
                                        <NavLink to={'/'} exact activeClassName='active'>
                                            <span className='glyphicon glyphicon-home'></span> Home
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/counter'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-education'></span> Counter
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/fetchdata'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-th-list'></span> Fetch data
                                        </NavLink>
                                    </a>
                                </div>



                                <a href="#principiante" className="list-group-item list-group-item active" data-toggle="collapse" data-parent="#MainMenu">Principiante</a>
                                <div className="collapse" id="principiante">
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/PrimerosPasos'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 1.1 Primeros pasos
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/ComandosDotNet'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-flash'></span> 2.1 ASP.NET Web Application
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/RazorPages'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-th-list'></span>3.1 Razer Pages
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/CRUD'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-th-list'></span>3.2 CRUD
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Logging'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-th-list'></span>4.1 Logging And Diagnostics
                                        </NavLink>
                                    </a>
                                </div>


                                <a href="#intermedio" className="list-group-item list-group-item active" data-toggle="collapse" data-parent="#MainMenu">Intermedio</a>
                                <div className="collapse" id="intermedio">
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Identity'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 5.1 Internals
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/TagHelpers'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 6.1 Tag Helpers
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/EFC'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 7.1 Entity Framework Core 
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Autenticacion'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 8.1 Autenticaci&#243;n 
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/AutenticacionExterna'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-flash'></span> 8.2 Autenticaci&#243;n externa
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Autorizacion'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-th-list'></span> 8.3 Autorizaci&#243;n
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/WebAPI'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-th-list'></span> 9.1 Web API 
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Swagger'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-th-list'></span> 9.2 Swagger 
                                        </NavLink>
                                    </a>
                                </div>              

                                <a href="#Avanzado" className="list-group-item list-group-item active" data-toggle="collapse" data-parent="#MainMenu">Avanzado</a>
                                <div className="collapse" id="Avanzado">
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Middleware'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 10.1 Middleware
                                        </NavLink>
                                    </a><a className="list-group-item">
                                        <NavLink to={'/netcore/ConfiguracionAvzda'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 10.2 Configuraci&#243;n Avanzada
                                        </NavLink>
                                    </a><a className="list-group-item">
                                        <NavLink to={'/netcore/ViewComponent'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 10.3 View Components
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Hosting'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 10.4 Hosting
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Enviroments'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 11.1 Hosting
                                        </NavLink>
                                    </a>
                                    <a className="list-group-item">
                                        <NavLink to={'/netcore/Localizacion'} activeClassName='active'>
                                            <span className='glyphicon glyphicon-knight'></span> 12.1 Localizaci&#243;n
                                        </NavLink>
                                    </a>
                                    
                                </div>              


                            </div>
                        </div>










                    </ul>
                </div>
            </div>
        </div>;
    }

}
