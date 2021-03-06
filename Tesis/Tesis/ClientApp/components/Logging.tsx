﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';



const img1 = require('../img/l4/1.png');
const img2 = require('../img/l4/2.png');
const img3 = require('../img/l4/3.png');
const img4 = require('../img/l4/4.png');
const img5 = require('../img/l4/5.png');
const img6 = require('../img/l4/6.png');
const img7 = require('../img/l4/7.png');
const img8 = require('../img/l4/8.png');
const img9 = require('../img/l4/9.png');



export class Logging extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <ul>
                <h1>Logging And Diagnósticos </h1>
                <p style={{ textAlign: 'justify' }}>ASP.NET Core es compatible con una API de registro que funciona con una variedad de proveedores de registros. Los proveedores integrados le permiten enviar registros a uno o más destinos, y puede conectar un marco de registro de terceros. Este artículo muestra cómo utilizar la API y los proveedores integrados de registro en su código.
    
                    El diagnóstico debe ayudar al usuario a comprender qué le sucede y, sobretodo, poder normalizar su situación. Si no cumple estos criterios es que el profesional está fallando y no está siendo capaz de captar las necesidades del usuario.
            </p>

                <hr />
            </ul>


            <ul>
                <h2>Como crear  Diagnósticos:</h2>
                <p style={{ textAlign: 'justify' }}> Crear una propiedad llamada mensaje y hacerla temporal. </p>

                <blockquote>
                    <p>Archivo: <i>csharp.cshtml</i></p>
                    <pre>

                        [TempData] <br />
                        Public String Message &#123; get; set;} <br />


                    </pre>
                </blockquote>

                <img alt='urlNet' src={String(img1)} />


                <p style={{ textAlign: 'justify' }}> Crear el mensaje en el método asíncrono task. </p>


                <blockquote>
                    <p>Archivo: <i>create.cs</i></p>
                    <pre>

                        public async Task  &lt;IActionResult> OnPostAsync() <br />
                        &#123; <br />

                        &#32;&#32; if(!ModelState.IsValid) <br />
                        &#32;&#32;   &#123; <br />

                        &#32;&#32;&#32;&#32;  return Page(); <br />
                        &#32;&#32;&#32;  }<br />
                        <br />
                        &#32;&#32;  _context.Peliculas.Add(Pelicula); <br />
                        &#32;&#32;  await _context.SaveChangesAsync(); <br />

                        &#32;&#32;  Message = $"Pelicula Pelicula.Nombre} Añadia"; <br />
                        <br />
                        &#32;&#32;  return RedirectToPage("./Index"); <br />
                        }


                    </pre>
                </blockquote>


                <img alt='urlNet' src={String(img2)} />

                

                <p style={{ textAlign: 'justify' }}> En el archivo .cshtml agregamos el mensaje. </p>



                <img alt='urlNet' src={String(img3)} />

                <p style={{ textAlign: 'justify' }}> En el archivo .cshtml agregamos el mensaje utilizando Razor Pages. </p>
                <img alt='urlNet' src={String(img4)} />


            </ul>
            <hr />

            <h2>Como crear  Logging :</h2>

            <ul>
                <p style={{ textAlign: 'justify' }}> Agregamos el servicio en ConfigureServices del archivo Startup.cs </p>
                <blockquote>
                    <p>Archivo: <i>Startup.cs</i></p>
                    <pre>

                        public void ConfigureServices(IServiceCollection services) <br />
                        &#123; <br />
                        &#32;&#32;   <code> services.AddDbContext &lt;AppDbContext>(options => <br />
                              &#32;&#32;   options.UseInMemoryDatabase("Pelicula")); <br />
                              &#32;&#32;  <br />
                              &#32;&#32;   services.AddLogging();<br />
                              &#32;&#32;   services.AddMvc();  <br /></code>

                        &#125; <br />

                    </pre>
                </blockquote>
                <img alt='urlNet' src={String(img5)} />

                <p style={{ textAlign: 'justify' }}> Agregamos el parámetro ILoggerFactory para poder tener información la consola y de debug. </p>



                <img alt='urlNet' src={String(img6)} />

                <p style={{ textAlign: 'justify' }}> Agregamos en la clase que queramos la propiedad ILogger y al constructor le agregamos un parámetro ILogger. </p>
                <blockquote>
                    <p>Archivo: <i>Startup.cs</i></p>
                    <pre>


                        public CreateModel(WebApplication1.AppDbContext context, ILogger &lt;CreateModel> log)<br />
                        &#123; <br />
                             &#32;&#32; <code>   _context = context;   <br />
                            &#32;&#32;  Log = log;  </code> <br />
                        &#125; <br />

                    </pre>
                </blockquote>
                <img alt='urlNet' src={String(img7)} />

                <p> Agregamos logCritical para obtener el mensaje y mostrarlo en la página. </p>


                <blockquote>
                    <p>Archivo: <i>create.cs</i></p>
                    <pre>

                        public async Task  &lt;IActionResult> OnPostAsync() <br />
                        &#123; <br />

                        &#32;&#32;  if(!ModelState.IsValid) <br />
                     &#32;&#32;   &#123; <br />
                        &#32;&#32;&#32;&#32;  return Page(); <br />
                     &#32;&#32;   } <br />

                       &#32;&#32;  _context.Peliculas.Add(Pelicula); <br />
                       &#32;&#32;  await _context.SaveChangesAsync(); <br />

                        <br />
                       &#32;&#32;  var msg = $"Pelicula Pelicula.Nombre} Añadia";   <br />
                       &#32;&#32;  Message = msg;   <br />
                       &#32;&#32;  Log.LogCritical(msg);   <br />
                       &#32;&#32;  return RedirectToPage("./Index"); <br />

                        &#125; <br />


                    </pre>
                </blockquote>

                <img alt='urlNet' src={String(img8)} />

                <p> Al agregar un dato nuevo nos mostrará el mensaje. </p>
                <img alt='urlNet' src={String(img9)} />



            </ul>
            <hr />

            <footer>
                <p>Footer</p>
            </footer>
        </div>;
    }
}
