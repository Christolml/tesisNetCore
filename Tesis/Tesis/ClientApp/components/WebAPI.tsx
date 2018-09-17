import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const elegirAPI = require('../img/Intermedio/lWebAPI/elegirAPI.png');
const valuesController = require('../img/Intermedio/lWebAPI/valuesController.png');
const navegadorValues = require('../img/Intermedio/lWebAPI/navegadorValues.png');
const postman = require('../img/Intermedio/lWebAPI/postman.png');
const addTicketItem = require('../img/Intermedio/lWebAPI/addTicketItem.png');
const addControlador = require('../img/Intermedio/lWebAPI/addControlador.png');
const controllerEmpty = require('../img/Intermedio/lWebAPI/controllerEmpty.png');
const rutaController = require('../img/Intermedio/lWebAPI/rutaController.png');
const apiTicket = require('../img/Intermedio/lWebAPI/apiTicket.png');
const getTicket = require('../img/Intermedio/lWebAPI/getTicket.png');
const postTicket = require('../img/Intermedio/lWebAPI/postTicket.png');
const createTicket = require('../img/Intermedio/lWebAPI/createTicket.png');
const putTicket = require('../img/Intermedio/lWebAPI/putTicket.png');






export class WebAPI extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Primeros pasos con Web API.</h2>
            <p style={{ textAlign: 'justify' }}>
                En esta sección se abordará como podemos construir una Web API con .Net Core 2.0, para empezar vamos a definir lo que
                trata una Web API, en términos sencillos la API es algún tipo de interfaz que tiene un conjunto de funciones que
                permiten a los programadores acceder a determinadas funciones o datos de una aplicación, el sistema operativo u otros
                servicios. Web API como el nombre sugiere, es una API a través de la web a la que se puede acceder mediante el
                protocolo HTTP.
                <br/>
                Comenzamos creando nuestro proyecto Web Application del tipo API y nos generara nuestro proyecto junto con la
                estructura API y algunos valores por default.

            </p>
            <img alt='elegirAPI' src={String(elegirAPI)} width="650" height="450" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestra carpeta <i>Controllers</i> tenemos un archivo con unos controladores ya predefinidos y notamos que tiene como
                ruta establecida <i>/api/values</i> y que al acceder a esa ruta por la petición <i>get</i> del protocolo http nos devuelve un array.
            </p>
            <img alt='valuesController' src={String(valuesController)} width="650" height="450" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ejecutamos nuestra aplicación y accedemos a nuestro navegador y nos debe mostrar algo parecido a la siguiente imagen.
            </p>
            <img alt='navegadorValues' src={String(navegadorValues)} width="600" height="170" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Aparte de nuestro navegador con el cual hemos usado para testear nuestra aplicación, vamos a utilizar el programa <i>postman</i>
                que nos permite probar servicios web fácilmente, basta con indicar en la url el método HTTP (POST, GET, DELETE, PUT, etc.)
                y los parámetros de la petición. Podemos obtener <i>postman</i> de forma gratuita del siguiente enlace <a href="https://www.getpostman.com">https://www.getpostman.com</a>.
                Siguiendo con nuestra aplicación la debemos tener corriendo y abrir el programa de <i>postman</i> y poner la url que teníamos en
                nuestro navegador y notamos que nos devuelve exactamente lo mismo e información extra a la brevedad que nos ayuda cuando
                estamos construyendo una API. 
            </p>
            <img alt='postman' src={String(postman)} width="700" height="380" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                El objetivo de esta lección es construir un manejador de tickets de conciertos haciendo una Web API en la cual abordaremos
                las ventajas de utilizar una API. Comenzamos agregando una nueva clase a nuestro proyecto la cual le hemos puesto el
                nombre <i>TicketItem.cs</i> y nos servirá para formar la estructura de nuestro ticket la cual usará nuestra base de datos en
                memoria.
            </p> 
            <img alt='addTicketItem' src={String(addTicketItem)} width="600" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el archivo <i>TicketItem.cs</i> ocupamos declarar que vamos a ocupar <i>EntityFrameworkCore</i> de Microsoft para poder usar
                nuestra base de datos en memoria y dentro de la clase agregamos las propiedades que tendrá nuestro ticket, también
                agregamos <i>TicketContext</i> cuya función será la de manejar la conexión a nuestra base de datos gracias a la instancia
                de <i>DbContext</i> la cual representa una sesión con la base de datos que se puede utilizar para consultar y guardar instancias
                de sus entidades en una base de datos. Para usar <i>DbContext</i> en nuestra aplicación, necesitamos crear la clase que se
                deriva de <i>DbContext</i>, también conocida como clase de contexto. Esta clase de contexto por lo regular incluye propiedades
                DbSet &#60;TEntity> que nos sirve para consultar y guardar instancias de cada entidad en el modelo. 
            </p>
            <p><b>TicketItem.cs</b></p>
            <blockquote>
                <pre>
                    using System.Collections.Generic; <br/>
                    using System.Linq; <br />
                    using System.Threading.Tasks; <br />
                    using Microsoft.EntityFrameworkCore; <br />
                    <br />
                    namespace webApi <br />
                    &#123; <br />
                        &#32;&#32;&#32;&#32;public class TicketItem <br />
                        &#32;&#32;&#32;&#32;&#123; <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public long Id &#123; get; set; } <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public string Concert &#123; get; set; } <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public string Artist &#123; get; set; }<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public bool Available &#123; get; set; }<br />
                        &#32;&#32;&#32;&#32;}<br />
                    <br />
                    <br />
                        &#32;&#32;&#32;&#32;public class TicketContext : DbContext<br />
                        &#32;&#32;&#32;&#32;&#123;<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public TicketContext(DbContextOptions&#60;TicketContext> options) : base(options)<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123;<br />
                    <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;}<br />
                    <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public DbSet&#60;TicketItem> TicketItems &#123; get; set; }<br />
                        &#32;&#32;&#32;&#32;}<br />
                    <br />
                    }
                </pre>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
                Ahora procedemos a agregar el servicio de nuestra base de datos en memoria con el método de <i>ConfigureServices</i> en el
                archivo <i>Startup.cs</i>. Con el siguiente código estamos añadiendo la conexión entre nuestra aplicación con nuestro <i>DBContext </i>
                que hemos creado en nuestro archivo <i>TicketItem.cs</i> y estamos declarando que por medio del contexto de nuestro ticket le
                pasamos opciones la cual se encargará de crear nuestra base de datos en memoria y le damos el nombre de <i>TicketList</i> a
                nuestra base de datos.
            </p>
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                    public void ConfigureServices(IServiceCollection services)<br />
                    &#123;<br />
                        &#32;&#32;&#32;&#32;services.AddMvc();<br />
                        &#32;&#32;&#32;&#32;services.AddDbContext&#60;TicketContext>(opt => opt.UseInMemoryDatabase("TicketList"));<br />
                    }
                </pre>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
                Hecho lo anterior procedemos a crear nuestro controlador, el cual estará a cargo de estar manejando información de nuestra
                vista a la base de datos, a nuestro controlador lo hemos llamado <i>TicketController.cs</i>. Hay que procurar cuando nombremos
                algo lo hagamos con referencia a lo que hacen o a quien corresponde ya que así podemos identificar y comprender nuestro código. 
            </p> 
            <img alt='addControlador' src={String(addControlador)} width="600" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Seleccionamos <i>API Controller – Empty</i>.
            </p>
            <img alt='controllerEmpty' src={String(controllerEmpty)} width="600" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez que declaremos el nombre se nos abre el archivo de nuestro controlador y notamos que la ruta por default nos
                pone <i>api/Ticket</i> pero vamos a sustituir <i>Ticket</i> por <i>[controller]</i> y eso significa que la ruta será de acuerdo al nombre
                de nuestra clase y en este caso es <i>Ticket</i>, en poca palabras las dos formas significan lo mismo pero con <i>[controller]</i> es
                una forma clara y elegante. También notamos que nuestra aplicación la información la maneja como si fuera <i>json</i>.
            </p>
            <img alt='rutaController' src={String(rutaController)} width="700" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Nuestro <i>TicketController</i> va a necesitar el contexto de nuestra base de datos y para ello declaramos nuestra variable <i>_context</i> del
                tipo <i>TicketContext</i> y con ello ya podemos hacer uso de nuestra base de datos desde nuestro controlador. Dentro del constructor de
                nuestra clase se hará algo que no está correcto hacerlo pero por cuestiones de enseñanza se hará, lo que se va a hacer será la
                inserción de un boleto de concierto si en nuestra base de datos hay un total de registros de igual a 0.
            </p>
            <p><b>TicketController.cs</b></p>
            <blockquote>
                <pre>
                    [Produces("application/json")]<br />
                    [Route("api/[controller]")]<br />
                    public class TicketController : Controller<br />
                    &#123;<br />
                        &#32;&#32;&#32;&#32;private TicketContext _context;<br />
                    <br />
                        &#32;&#32;&#32;&#32;public TicketController(TicketContext context)<br />
                        &#32;&#32;&#32;&#32;&#123;<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;_context = context;<br />
                    <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;if (_context.TicketItems.Count() == 0)<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123;<br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;_context.TicketItems.Add(new TicketItem &#123; Concert = "El mike" });<br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;_context.SaveChanges();<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;}<br />
                        &#32;&#32;&#32;&#32;}<br />
                     }
                </pre>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
                La siguiente función nos está devolviendo todos nuestros tickets que tenemos registrados en nuestra base de datos y
                notamos que al principio tenemos <i>[HttpGet]</i> y esto debido a que le estamos indicando que nuestra función va a trabajar
                con el protocolo HTTP y una serie de peticiones posibles entre cliente y servidor ( GET, POST, PUT, DELETE, HEAD, etc )
                y en este caso ocupamos de <i>Get</i>.
            </p>
            <p><b>TicketController.cs</b></p>
            <blockquote>
                <pre>
                [HttpGet]<br />
                public IEnumerable&#60;TicketItem> GetAll()<br />
                &#123;<br />
                    &#32;&#32;&#32;&#32;return _context.TicketItems.AsNoTracking().ToList();<br />
                }
                </pre>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
                Corremos nuestra aplicación y en <i>postman</i> ejecutamos nuestra url de nuestro nuevo controlador y nos deberá aparece
                nuestro primer ticket que se creó en el constructor de nuestro controlador. Cabe recalcar que en el constructor
                solamente especificamos el nombre del <i>concert</i> y los demás campos que observamos son producto a que el <i>id</i> es
                autoincrementable gracias a <i>EntityFrameworkCore</i> y los últimos dos son los valores por default de ese tipo de variables.
            </p>
            <img alt='apiTicket' src={String(apiTicket)} width="650" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora procedemos a crear nuestra función para que nos devuelva un ticket por medio de su id el cual es pasado como
                parámetro en la url. Si el id no coincide con la información de la base de datos nos mostrara un <i>NotFound();</i> el cual
                el navegador lo va a representar como el código de estado 404, por el contrario si encuentra el registro lo que va a
                regresar será el objeto encontrado de la base de datos y el navegador lo va a representar como un código de estado 200.
            </p>
            <p><b>TicketController.cs</b></p>
            <blockquote>
                <pre>
                    [HttpGet("&#123;id}", Name = "GetTicket")]<br />
                    public IActionResult GetById(long id)<br />
                    &#123;<br />
                        &#32;&#32;&#32;&#32;var ticket = _context.TicketItems.FirstOrDefault(t => t.Id == id);<br />
                        &#32;&#32;&#32;&#32;if (ticket == null)<br />
                        &#32;&#32;&#32;&#32;&#123;<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return NotFound(); //404<br />
                        &#32;&#32;&#32;&#32;}<br />
                        &#32;&#32;&#32;&#32;return new ObjectResult(ticket); //200<br />
                    }
                </pre>
            </blockquote>
            <img alt='getTicket' src={String(getTicket)} width="700" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                La función <i>Create</i> se encargará de crear un nuevo ticket y para esto <i>postman</i> será de gran ayuda ya que en esta nueva función
                ocupamos el verbo <i>post</i> del protocolo http para poder mandar información de nuestro navegador a nuestra base de datos y <i>postman</i> nos
                permite hacerlo de forma sencilla. En los parámetros de nuestra función le estamos indicando que la información de nuestro nuevo
                <i> ticket</i> vendrá del <i>FromBody</i> el cual es de la información de nuestro <i>post</i>. Dentro de la función hacemos una verificación para saber
                si del <i>post</i> se le paso información, en caso de no se retorna un <i>BadRequest();</i> a nuestro navegador lo cual también puede ser
                interpretado como el código de estado 400, pero si a nuestro <i>post</i> si se le manda información nuestra función guarda nuestro nuevo
                ticket de acuerdo a la información y nos retorna a una nueva ruta la cual es nuestra función de retornar un ticket por medio de
                su <i>id</i> y muestra nuestro nuevo ticket en formato <i>json</i> con un código de estado 201 el cual significa que fue creado.
            </p>
            <p><b>TicketController.cs</b></p>
            <blockquote>
                <pre>
                    [HttpPost]<br />
                    public IActionResult Create([FromBody]TicketItem ticket)<br />
                    &#123;<br />
                        &#32;&#32;&#32;&#32;if (ticket == null)<br />
                        &#32;&#32;&#32;&#32;&#123;<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return BadRequest(); //400<br />
                        &#32;&#32;&#32;&#32;}<br />
                    <br />
                        &#32;&#32;&#32;&#32;_context.TicketItems.Add(ticket);<br />
                        &#32;&#32;&#32;&#32;_context.SaveChanges();<br />
                    <br />
                        &#32;&#32;&#32;&#32;return CreatedAtRoute("GetTicket", new &#123; id = ticket.Id }, ticket);<br />
                    }
                </pre>
            </blockquote>
            <img alt='postTicket' src={String(postTicket)} width="700" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Resultado de crear un nuevo ticket.
            </p>
            <img alt='createTicket' src={String(createTicket)} width="700" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Casi por finalizar tenemos nuestra función <i>Update</i> la cual al inicio tenemos que ocupa <i>Put</i> de http y dentro de los
                parámetros de la función tenemos el <i>id</i> del ticket que se quiere actualizar para poder buscar el ticket de la base de
                datos y guardar la nueva información del “nuevo” ticket que viene como segundo parámetro. Al principio verificamos si
                el ticket nuevo tiene información y si el <i>id</i> coincide con el que se paso para modificar el viejo ticket en caso de
                entrar en nuestro <i>if</i> se retorna un <i>BadRequest();</i> el cual se genera cuando el usuario manda datos erróneos. Si pasa
                nuestro <i>if</i> ahora lo que toca es traer nuestro ticket a modificar de la base de datos y sustituir los valores de sus
                campos por los del nuevo ticket y después actualizamos y guardamos cambios y nuestra aplicación regresara un código
                de estado 204 el cual significa que la operación fue exitosa y no tiene algún contenido que mostrar.
            </p>
            <p><b>TicketController.cs</b></p>
            <blockquote>
                <pre>
                    [HttpPut("&#123;id}")]<br />
                    public IActionResult Update(long id, [FromBody] TicketItem ticket)<br />
                    &#123;<br />
                        &#32;&#32;&#32;&#32;if (ticket == null || ticket.Id != id)<br />
                        &#32;&#32;&#32;&#32;&#123;<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return BadRequest();<br />
                        &#32;&#32;&#32;&#32;}<br />
                    <br />
                        &#32;&#32;&#32;&#32;var tic = _context.TicketItems.FirstOrDefault(t => t.Id == id);<br />
                        &#32;&#32;&#32;&#32;if (tic == null)<br />
                        &#32;&#32;&#32;&#32;&#123;<br />
                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return NotFound();<br />
                        &#32;&#32;&#32;&#32;}<br />
                        &#32;&#32;&#32;&#32;tic.Concert = ticket.Concert;<br />
                        &#32;&#32;&#32;&#32;tic.Available = ticket.Available;<br />
                        &#32;&#32;&#32;&#32;tic.Artist = ticket.Artist;<br />
                        &#32;&#32;&#32;&#32;_context.TicketItems.Update(tic);<br />
                        &#32;&#32;&#32;&#32;_context.SaveChanges();<br />
                        &#32;&#32;&#32;&#32;return new NoContentResult();<br />
                    <br />
                    }
                </pre>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
                Actualizando nuestro ticket con <i>id=2</i>.
            </p>
            <img alt='putTicket' src={String(putTicket)} width="700" height="300" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Por ultimo tenemos nuestra función <i>Delete</i> la cual elimina nuestro ticket con el <i>id</i> que está recibiendo como parámetro la
                función, primero hace una búsqueda del ticket en nuestra base de datos por medio del <i>id</i> si no lo encuentra regresa
                un <i>BadRequest();</i> pero si lo encuentra lo elimina de la base de datos y guarda los cambios y nos regresa a nuestro
                navegador un <i>NoContentResult();</i> el cual representa el código de estado 204 el cual quiere decir que la operación fue
                exitosa pero no hay contenido que mostrar.
            </p>
            <p><b>TicketController.cs</b></p>
            <blockquote>
                <pre>
                    [HttpDelete("&#123;id}")]<br />
                    public IActionResult Delete(long id)<br />
                    &#123;<br />
                        &#32;&#32;&#32;&#32;var tics = _context.TicketItems.FirstOrDefault(t => t.Id == id);<br />
                        &#32;&#32;&#32;&#32;if (tics == null)<br />
                        &#32;&#32;&#32;&#32;&#123;<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return BadRequest();<br />
                        &#32;&#32;&#32;&#32;}<br />
                        &#32;&#32;&#32;&#32;_context.TicketItems.Remove(tics);<br />
                        &#32;&#32;&#32;&#32;_context.SaveChanges();<br />
                        &#32;&#32;&#32;&#32;return new NoContentResult();<br />
                    }
                </pre>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
                Hemos terminado nuestra Web API y se ha  implementado nuestro pequeño sistema de manejador de tickets por medio del
                protocolo HTTP y su serie de peticiones posibles entre cliente y servidor ( GET, POST, PUT, DELETE, HEAD, etc ).
                De esta forma tenemos la lógica de nuestras páginas con una estructura sencilla y fácil de controlar.
            </p>
            <br />
            <br />

        </div>;
    }
}
