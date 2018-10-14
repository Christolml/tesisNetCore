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
                    &#123;<br />
                     &#32;&#32;  if (env.IsDevelopment())<br />
                     &#32;&#32;  &#123;<br />
                     &#32;&#32;  app.UseDeveloperExceptionPage(); <br />
                    &#32;&#32; }<br />
               
                     &#32;&#32;  if (env.IsProduction() || env.IsStaging() || env.IsEnvironment("Staging_2"))<br />
                     &#32;&#32;  &#123;<br />
                     &#32;&#32;  app.UseExceptionHandler("/Error"); <br />
                     &#32;&#32;  app.UseHsts();<br />
                     &#32;&#32;  }
                    
                     &#32;&#32; app.UseHttpsRedirection();<br />
                     &#32;&#32; app.UseStaticFiles();<br />
                     &#32;&#32; app.UseCookiePolicy();<br />
                     &#32;&#32; app.UseMvc();<br />
            }
            
            
                </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}>  Environment Tag Helper utiliza el valor de IHostingEnvironment.EnvironmentName para incluir o excluir el marcado en el elemento: </p>

            <blockquote>
                <p></p>
                <pre>
                    public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />
                    &#123;<br />
                    &#32;&#32; @page<br />
                    &#32;&#32; @inject Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnv<br />
                    &#32;&#32; @model AboutModel<br />
                    &#32;&#32; @<br />
                     &#32;&#32;    ViewData["Title"] = "About";<br />
                    }<br />
                    &#32;&#32; &#60;h2>@ViewData["Title"]&#60;/h2><br />
                    &#32;&#32; &#60;h3>@Model.Message&#60;/h3><br />

                    &#32;&#32; <p> ASPNETCORE_ENVIRONMENT = @hostingEnv.EnvironmentName</p><br />
                   
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
                    &#123;<br />
                    &#32;&#32; public void ConfigureServices(IServiceCollection services)<br />
                    &#32;&#32;   &#123;<br />    
                        
                      &#32;&#32; }<br />

                    &#32;&#32; public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />
                    &#32;&#32;   &#123;<br />
                        
                       &#32;&#32; }<br />
                    }<br />
                
                    // Clase de inicio para usar en el entorno de producción<br />
                     public class StartupProduction<br />
                     &#123;<br />
                    &#32;&#32; public void ConfigureServices(IServiceCollection services)<br />
                    &#32;&#32; &#123;<br />
                  <br />
                   &#32;&#32; }<br />
                
                     &#32;&#32;  public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />
                     &#32;&#32;  &#123;<br />
                    <br />
                   &#32;&#32;  }<br />
                    }<br />
                    
                    // Clase de inicio de emergencia<br />
              
                   public class Startup<br />
                     &#123;<br />
                     &#32;&#32;  public void ConfigureServices(IServiceCollection services)<br />
                     &#32;&#32;  &#123;<br />
                    
                    &#32;&#32;  }<br />

                     &#32;&#32;  public void Configure(IApplicationBuilder app, IHostingEnvironment env)<br />
                     &#32;&#32;  &#123;<br />
                    
                  &#32;&#32;  }<br />
                    }<br />

                   
                   
                </pre>
            </blockquote>


        </div>;
    }
}