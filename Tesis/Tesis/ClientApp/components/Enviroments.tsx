import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const img = require('../img/avanzado5img1.png');
const img2 = require('../img/avanzado5img2.png');

export class Enviroments extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Environments</h1>
            <p style={{ textAlign: 'justify' }}> ASP.NET Core lee la variable de entorno ASPNETCORE_ENVIRONMENT al inicio de la aplicación y almacena el valor en IHostingEnvironment.EnvironmentName. Puede establecer ASPNETCORE_ENVIRONMENT en cualquier valor, pero el marco admite tres valores: Desarrollo, Puesta en escena y Producción. Si ASPNETCORE_ENVIRONMENT no está configurado, su valor predeterminado es Producción.</p>


            <blockquote>
                <p></p>
                <pre>
                    public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />

                        if (env.IsDevelopment())<br />
    
                        app.UseDeveloperExceptionPage(); <br />
                    }
                
                    if (env.IsProduction() || env.IsStaging() || env.IsEnvironment("Staging_2"))<br />
    
                        app.UseExceptionHandler("/Error"); <br />
                    app.UseHsts();<br />
                }
                
                app.UseHttpsRedirection();<br />
                    app.UseStaticFiles();<br />
                    app.UseCookiePolicy();<br />
                app.UseMvc();<br />
            }
            
            
                </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}>  Environment Tag Helper utiliza el valor de IHostingEnvironment.EnvironmentName para incluir o excluir el marcado en el elemento: </p>

            <blockquote>
                <p></p>
                <pre>
                    public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />

                    @page<br />
                    @inject Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnv<br />
                    @model AboutModel<br />
                    @br />
                        ViewData["Title"] = "About";<br />
                    }
                    <h2>@ViewData["Title"]</h2><br />
                    <h3>@Model.Message</h3><br />

                    <p> ASPNETCORE_ENVIRONMENT = @hostingEnv.EnvironmentName</p><br />
                   
                </pre>
            </blockquote>


            <hr />

            <h2> Entorno de desarrollo </h2>
            <p style={{ textAlign: 'justify' }}> El entorno de desarrollo puede habilitar características que no deberían exponerse en producción. Por ejemplo, las plantillas ASP.NET Core habilitan la página de excepción del desarrollador en el entorno de desarrollo.
    
                El entorno para el desarrollo de máquinas locales se puede establecer en el archivo Properties \ launchSettings.json del proyecto. Los valores de entorno establecidos en launchSettings.json anulan los valores establecidos en el entorno del sistema.

                El siguiente JSON muestra tres perfiles de un archivo launchSettings.json:</p>

            <p style={{ textAlign: 'justify' }}>El entorno para el desarrollo de máquinas locales se puede establecer en el archivo Properties \ launchSettings.json del proyecto. Los valores de entorno establecidos en launchSettings.json anulan los valores establecidos en el entorno del sistema. </p>
            <p style={{ textAlign: 'justify' }}>El siguiente JSON muestra tres perfiles de un archivo launchSettings.json: </p>

            <img alt='urlNet' src={String(img)} />

            <p style={{ textAlign: 'justify' }}> La pestaña Depuración de propiedades del proyecto de Visual Studio proporciona una GUI para editar el archivo launchSettings.json: </p> 

            <img alt='urlNet' src={String(img2)} />

            <hr />

            <h2>Environment-based Startup class </h2>

            <p style={{ textAlign: 'justify' }}>Cuando se inicia una aplicación ASP.NET Core, la clase de Startup inicia la aplicación. La aplicación puede definir clases de inicio separadas para diferentes entornos (por ejemplo, StartupDevelopment), y la clase de inicio apropiada se selecciona en el tiempo de ejecución. La clase cuyo sufijo de nombre coincide con el entorno actual tiene prioridad. Si no se encuentra una clase Startup  EnvironmentName  coincidente, se usa la clase Startup.</p>

            <blockquote>
                <p></p>
                <pre>
                    // Clase de inicio para usar en el entorno de desarrollo<br />
                    public class StartupDevelopment<br />

                    public void ConfigureServices(IServiceCollection services)<br />
    
                        ...
                    }

                    public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />
    
                        ...
                    }
                    }
                
                    // Clase de inicio para usar en el entorno de producción<br />
                    public class StartupProduction<br />

                    public void ConfigureServices(IServiceCollection services)<br />
    
                    ...<br />
                    }
                
                    public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />
    
                    ...<br />
                    }<br />
                    }<br />
                    
                    // Clase de inicio de emergencia<br />
              
                    public class Startup<br />

                    public void ConfigureServices(IServiceCollection services)<br />
    
                    ...<br />
                    }<br />

                    public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />
    
                    ...<br />
                    }<br />
                    }<br />

                   
                   
                </pre>
            </blockquote>


        </div>;
    }
}