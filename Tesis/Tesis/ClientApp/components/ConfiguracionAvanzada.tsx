import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const myConfiguration = require('../img/Avanzado/lConfig/myConfiguration.png');
const configureServices = require('../img/Avanzado/lConfig/configureServices.png');
const layout = require('../img/Avanzado/lConfig/layout.png');
const cambios = require('../img/Avanzado/lConfig/cambios.png');
const appsettings = require('../img/Avanzado/lConfig/appsettings.png');
const appsettingsDevelopment = require('../img/Avanzado/lConfig/appsettingsDevelopment.png');





export class ConfiguracionAvanzada extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Configuración avanzada</h2>
            <p style={{ textAlign: 'justify' }}>
                <i>Net Core</i> nos permite la configuración de nuestro proyecto de diversas maneras y en este apartado abordaremos unas
                pequeñas configuraciones que podemos hacer a un proyecto. Para este tema modificaremos el color de fondo y del texto
                de nuestro navbar, comenzamos creando una <i>web application</i> y en nuestra carpeta raíz creamos el archivo <i>MyConfiguration.cs</i> que
                nos servirá para que sea nuestra clase de configuración, dentro del archivo hemos agregado dos propiedades que nos sirven para
                especificar el color de fondo del <i>Menubar</i> y el color que tendrá el texto.
            </p>
            <img alt='myConfiguration' src={String(myConfiguration)} width="250" height="350" />
            <br />
            <br />
            <p><b>MyConfiguration.cs</b></p>
            <blockquote>
                <pre>
                    using System; <br/>
                    using System.Collections.Generic;<br />
                    using System.Linq;<br />
                    using System.Threading.Tasks;<br />
                    <br />
                    namespace Configure<br />
                    &#123;<br />
                    &#32;&#32;&#32;&#32;public class MyConfiguration<br />
                        &#32;&#32;&#32;&#32;&#123;<br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public string MenubarBgColor &#123; get; set; } = "black";<br/>
                    <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public string MenubarColor &#123; get; set; } = "white";<br/>
                        &#32;&#32;&#32;&#32;}<br/>
                    }
                </pre>
            </blockquote>
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro archivo <i>Startup.cs</i> en el método <i>ConfigureServices</i> debemos registrar una configuración a nuestra aplicación por
                medio de nuestra variable <i>Configuration</i> que viene por default en el archivo para realizar cambios a nuestra aplicación.
            </p>
            <img alt='configureServices' src={String(configureServices)} width="600" height="300" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Como estamos modificando un <i>Menubar</i> el cual deberá permanecer estático en nuestra aplicación debemos modificar el
                archivo <i>_Layout.cshtml</i> el cual contiene los elementos establecidos en nuestra aplicación web. Al principio del archivo
                establecemos algunas librerías de Microsoft que nos permite realizar configuraciones y definir una variable la cual
                está relacionada con nuestra clase de configuración que creamos al inicio. Creamos nuestro navbar y le modificamos
                propiedades de color y le asignamos a lo que está relacionada con nuestra variable de la clase de configuración, en
                nuestro footer utilizamos nuestra variable <i>Configuration</i> la cual nos permite obtener el nombre de la computadora local
                y lo mostramos.
            </p>
            <img alt='layout' src={String(layout)} width="600" height="450" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ejecutamos nuestra aplicación y podremos notar los cambios que le hemos hecho.
            </p>
            <img alt='cambios' src={String(cambios)} width="400" height="200" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Otra forma de establecer algunas configuraciones a nuestra aplicación es por medio de nuestro archivo <i>appsettings.json</i> en
                el cual las propiedades que tiene nuestra aplicación las leerá y las establecerá como una “nueva” configuración a nuestra
                aplicación sobreescribiendo los valores que habíamos configurado.
            </p>
            <br />
            <p><b>appsettings.json</b></p>
            <blockquote>
                <pre>
                    &#123;<br />
                      &#32;&#32;&#32;&#32;"MyConfiguration": &#123;<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"MenubarBgColor": "green",<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"MenubarColor":  "black"<br/>
                      &#32;&#32;&#32;&#32;},<br/>
                      &#32;&#32;&#32;&#32;"Logging": &#123;<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"IncludeScopes": false,<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"LogLevel": &#123;<br/>
                          &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"Default": "Warning"<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;}<br/>
                      &#32;&#32;&#32;&#32;}<br/>
                    }
                </pre>
            </blockquote>
            <br />
            <img alt='appsettings' src={String(appsettings)} width="400" height="200" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Nuestro siguiente paso es el uso del archivo <i>appsettings.Development.json</i> el cual va a sobreescribir en nuestro
                archivo <i>appsettings.json</i> ya que es por el que por default lee nuestro proyecto, cambiamos una propiedades y notamos
                los cambios en nuestra aplicación.
            </p>
            <br />
            <p><b>appsettings.Development.json</b></p>
            <blockquote>
                <pre>
                    &#123;<br />
                      &#32;&#32;&#32;&#32;"MyConfiguration": &#123;<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"MenubarBgColor": "green",<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"MenubarColor":  "black"<br/>
                      &#32;&#32;&#32;&#32;},<br/>
                      &#32;&#32;&#32;&#32;"Logging": &#123;<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"IncludeScopes": false,<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"LogLevel": &#123;<br/>
                          &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"Default": "Warning",<br/>
                          &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"System": "Information",<br/>
                          &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"Microsoft": "Information"<br/>
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;}<br/>
                      &#32;&#32;&#32;&#32;}<br/>
                    }
                </pre>
            </blockquote>
            <br />
            <img alt='appsettingsDevelopment' src={String(appsettingsDevelopment)} width="400" height="200" />
            <br />
            <br />

        </div>;
    }
}
