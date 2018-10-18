import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Hosting extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>ASP.NET Core Hosting</h1>
            <p>Las aplicaciones ASP.NET Core se configuran y se inician en el host. El host es responsable del inicio de la aplicación y la administración de por vida. Como mínimo, el host configura un servidor y un canal de procesamiento de solicitud. Este tema cubre ASP.NET Core Web Host (IWebHostBuilder), que es útil para alojar aplicaciones web.</p>

            <hr />

            <h2>Configura un host:</h2>


            <p style={{ textAlign: 'justify' }} >Crea un host usando una instancia de IWebHostBuilder. Esto normalmente se realiza en el punto de entrada de la aplicación, el método Principal. En las plantillas de proyecto, Main se encuentra en Program.cs:</p>
            <hr />

            <blockquote>
                <p>Program.cs</p>
                <pre>

                    public class Program<br />
                    &#123;<br />
                    &#32;&#32; public static void Main(string[] args)<br />
                  &#32;&#32;   &#123;<br />
                    &#32;&#32; CreateWebHostBuilder(args).Build().Run();<br />
                    &#32;&#32;  }<br />
 
                   &#32;&#32;  public static IWebHostBuilder CreateWebHostBuilder(string[] args) => <br />
                    &#32;&#32; WebHost.CreateDefaultBuilder(args)<br />
                   &#32;&#32;  .UseStartup&lt;Startup>();<br />
                   }
                        
                   
                </pre>
            </blockquote>

            <hr />

            <h2>Sobreescrivbr información</h2>

            <p style={{ textAlign: 'justify' }}>Use Configuración para configurar el host web. En el siguiente ejemplo, la configuración del host se especifica opcionalmente en un archivo hostsettings.json. Cualquier configuración cargada desde el archivo hostsettings.json puede ser anulada por argumentos de línea de comandos. La configuración construida (en config) se usa para configurar el host con UseConfiguration. La configuración de IWebHostBuilder se agrega a la configuración de la aplicación, pero el inverso no es verdadero. ConfigureAppConfiguration no afecta la configuración de IWebHostBuilder. .</p>

            <p style={{ textAlign: 'justify' }}> Anulando la configuración proporcionada por UseUrls con la configuración de hostsettings.json primero, configuración de argumento de línea de comando segunda: </p>


            <blockquote>
                <p>PowerShell</p>
                <pre>

                   public class Program<br />
                   &#123;<br />
                   &#32;&#32;  public static void Main(string[] args)<br />
                   &#32;&#32;  &#123;<br />
                   &#32;&#32;  CreateWebHostBuilder(args).Build().Run();<br />
                   &#32;&#32;   }<br />

                   &#32;&#32;  public static IWebHostBuilder CreateWebHostBuilder(string[] args)<br />
                   &#32;&#32;  &#123;<br />
                   &#32;&#32;  var config = new ConfigurationBuilder()<br />
                   &#32;&#32;  .SetBasePath(Directory.GetCurrentDirectory())<br />
                   &#32;&#32; .AddJsonFile("hostsettings.json", optional: true)<br />
                   &#32;&#32;  .AddCommandLine(args)<br />
                   &#32;&#32;  .Build();<br />

                   &#32;&#32;   return WebHost.CreateDefaultBuilder(args)<br />
                   &#32;&#32;  .UseUrls("http://*:5000")<br />
                   &#32;&#32;  .UseConfiguration(config)<br />
                   &#32;&#32;  .Configure(app =><br />

                    &#32;&#32;  app.Run(context => &#123;<br />
                   &#32;&#32;  context.Response.WriteAsync("Hello, World!"));<br />
                   &#32;&#32;  })
                   &#32;&#32; .Build();<br />
                    &#32;&#32; }<br />
                 }
                              
                    </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}>hostsettings.json</p>

            <blockquote>
                <p>JSON</p>
                <pre>
                    &#123;<br />
                    urls: "http://*:5005"
                    }<br />
           
                </pre>
            </blockquote>


            <hr />


            <h2>Administrar el host</h2>
            <h4>Run</h4>
            <p style={{ textAlign: 'justify' }}> El método Run inicia la aplicación web y bloquea el hilo de llamada hasta que el host se cierre:. </p>

            <blockquote>
                <p></p>
                <pre>
                    host.Run();
                </pre>
            </blockquote>

            <h4>Start</h4>

            <p style={{ textAlign: 'justify' }}> Ejecute el host de forma no bloqueante llamando a su método de inicio(Start). </p>

            <blockquote>
                <p></p>
                <pre>
                    &#123;<br />
                    using (host)<br />

                    host.Start();<br />
                    Console.ReadLine();<br />
                    }
                </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}>Si se pasa una lista de URL al método de inicio, escucha en las URL especificadas:  </p>


            <blockquote>
                <p></p>
                <pre>
                    using (host)<br />
                    &#123;<br />
                   &#32;&#32;  var urls = new List&lt;string>()<br />

                    &#32;&#32; "http://*:5000",<br />
                    &#32;&#32; "http://localhost:5001"<br />
                   &#32;&#32;  };
 
                   &#32;&#32;  var host = new WebHostBuilder()<br />
                   &#32;&#32;  &#123;<br />
                     &#32;&#32;.UseKestrel()<br />
                     &#32;&#32;.UseStartup&lt;Startup>()<br />
                     &#32;&#32;.Start(urls.ToArray());<br />

                    &#32;&#32; using (host)<br />

                    &#32;&#32; Console.ReadLine();<br />
                    }



                </pre>
            </blockquote>

            <h4>Start(string url, RequestDelegate app):</h4>

            <p style={{ textAlign: 'justify' }}> Comience con una URL y RequestDelegate:</p>

            <blockquote>
                <p></p>
                <pre>
                    using (var host = WebHost.Start("http://localhost:8080", app => app.Response.WriteAsync("Hello, World!")))<br />
                    &#123;<br />
                    &#32;&#32;  Console.WriteLine("Use Ctrl-C to shutdown the host...");<br />
                    &#32;&#32;  host.WaitForShutdown();<br />
                    }
                </pre>
            </blockquote>

        </div>;
    }
}