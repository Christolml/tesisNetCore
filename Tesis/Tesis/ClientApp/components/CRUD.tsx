import * as React from 'react';
import { RouteComponentProps } from 'react-router';


const img1 = require('../img/l3CRUD/1.png');
const img2 = require('../img/l3CRUD/2.png');
const img3 = require('../img/l3CRUD/3.png');
const img4 = require('../img/l3CRUD/4.png');
const img5 = require('../img/l3CRUD/5.png');
const img6 = require('../img/l3CRUD/6.png');
const img7 = require('../img/l3CRUD/7.png');
const img8 = require('../img/l3CRUD/8.png');
const img9 = require('../img/l3CRUD/9.png');


export class CRUD extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <ul>

                <h1>CRUD </h1>
                <p style={{ textAlign: 'justify' }}>En esta lección abordaremos el tema de CRUD utilizando ASP Net Core 2.0.</p>


                <hr />
                <h2>¿Que es CRUD?</h2>


                <p style={{ textAlign: 'justify' }}> CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar" (del original en inglés: Create, Read, Update and Delete), que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software. </p>

                <hr />

                <h2>Crear CRUD con Asp.Net</h2>


                <p style={{ textAlign: 'justify' }}> En el proyecto creado se tiene que crear una clase. </p>
                <img alt='urlNet' src={String(img1)} />

                <p style={{ textAlign: 'justify' }}> Creamos propiedades a la clase recientemente creada. </p>
                <blockquote>
                    <p>Archivo: <i>pelicula.cs</i></p>
                    <pre>

                        public class Pelicula<br />
                        {
                            <code>

                                public int  id
                                
                                <span> get </span>
                                ;
                                <span>set</span>
                                ;} <br />

                                public String Nombre
                              <span> get </span>
                                ;
                                <span>set</span>
                                ;}<br />


                                public String Genero
                              <span> get </span>
                                ;
                                <span>set</span>
                                ;}<br />

                                public int Año   <span> get </span>
                                ;
                                <span>set</span>
                                ;}<br />

                            </code>
                        }


                    </pre>
                </blockquote>


                <img alt='urlNet' src={String(img2)} />

                <p style={{ textAlign: 'justify' }}> En la clase de Startup creamos un servicio de Base de datos en la memoria. </p>

                <blockquote>
                    <p>Archivo: <i>csharp.cshtml</i></p>
                    <pre>

                        public void ConfigureServices(IServiceCollection services) <br />
                        {
                            <code> services.AddDbContext &lt;AppDbContext>(options =>
                                options.UseInMemoryDatabase("Pelicula")); <br />
                                services.AddMvc();  <br /></code>
                        }



                    </pre>
                </blockquote>


                <img alt='urlNet' src={String(img3)} />

                <p style={{ textAlign: 'justify' }}> Creamos la clase AppContext para crear la base de datos. </p>

                <blockquote>
                    <p>Archivo: <i>appDbContex.cs</i></p>
                    <pre>
                        <code>
                            public class AppDbContext : DbContext <br />

                            public AppDbContext(DbContextOptions options) <br />
                            : base(options)<br />

                            {

                            }
                            public DbSet &lt;Pelicula> Peliculas get; set; }<br />

                            }
                       
                         </code>
                    </pre>


                </blockquote>

                <img alt='urlNet' src={String(img4)} />


                <p style={{ textAlign: 'justify' }}> Creamos Páginas de Razor que usan Entity Freamwork(CRUD). </p>
                <img alt='urlNet' src={String(img5)} />

                <p style={{ textAlign: 'justify' }}> Seleccionamos la clase de modelo que creamos y la clase de contexto de datos. </p>
                <img alt='urlNet' src={String(img6)} />

                <p> Se crearán las clases eliminar,editar,crear,leer. </p>
                <img alt='urlNet' src={String(img7)} />

                <p style={{ textAlign: 'justify' }}> Presionar F5 para arrancar la aplicación en modo debug mode o Ctrl-F5 para arrancar sin el modo debugger y nos mostrara la pagina web funcionando. </p>
                <img alt='urlNet' src={String(img8)} />

                <p style={{ textAlign: 'justify' }}> Podrás crear ,editar,eliminar y visualizar los datos que usted ingrese </p>
                <img alt='urlNet' src={String(img9)} />

            </ul>


        </div>;
    }
}
