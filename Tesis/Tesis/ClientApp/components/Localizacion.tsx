import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const img1 = require('../img/avanzado6img1.png');

export class Localizacion extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Globalización y Localización</h1>
            <p>La creación de un sitio web multilingüe con ASP.NET Core permitirá que su sitio llegue a un público más amplio. ASP.NET Core proporciona servicios y middleware para ubicar en diferentes idiomas y culturas.</p>
            <p style={{ textAlign: 'justify' }} >La internacionalización implica globalización y localización. La globalización es el proceso de diseño de aplicaciones que admiten diferentes culturas. La globalización agrega soporte para la entrada, visualización y salida de un conjunto definido de scripts de lenguaje que se relacionan con áreas geográficas específicas.</p>
            <hr />

            <h2>Aplicación de contenido de localización</h2>


            <p style={{ textAlign: 'justify' }} >IStringLocalizer e IStringLocalizer se diseñaron para mejorar la productividad al desarrollar aplicaciones localizadas. IStringLocalizer usa ResourceManager y ResourceReader para proporcionar recursos específicos de cultura en tiempo de ejecución. La interfaz simple tiene un indexador y un IEnumerable para devolver cadenas localizadas. IStringLocalizer no requiere que almacene las cadenas de idioma predeterminadas en un archivo de recursos. Puede desarrollar una aplicación destinada a la localización y no necesita crear archivos de recursos al principio del desarrollo. El siguiente código muestra cómo ajustar la cadena "Acerca del título" para la localización.</p>
            <hr />

            <blockquote>

                <pre>

                    using Microsoft.AspNetCore.Mvc;<br />
                    using Microsoft.Extensions.Localization;<br />

                    namespace Localization.StarterWeb.Controllers<br />
                    &#123;<br />
                    &#32;&#32; [Route("api/[controller]")] < br />
                    &#32;&#32; public class AboutController : Controller<br />
                    &#32;&#32;  &#123;<br />
                  &#32;&#32;  &#32;&#32;  private readonly IStringLocalizer&lt;AboutController> _localizer;<br />
                   
                  &#32;&#32;  &#32;&#32;  public AboutController(IStringLocalizer&lt;AboutController> localizer)<br />
                  &#32;&#32;  &#32;&#32;  &#123;<br />
                  &#32;&#32;  &#32;&#32;  _localizer = localizer; <br />
                  &#32;&#32;  &#32;&#32;  }<br />

                 &#32;&#32;   &#32;&#32;  [HttpGet]<br />
                  &#32;&#32;  &#32;&#32;  public string Get()<br />
                    &#32;&#32;  &#123;<br />
                  &#32;&#32;   &#32;&#32; return _localizer["About Title"];<br />
                   &#32;&#32;  &#32;&#32; }<br />
                   &#32;&#32;  }<br />
                    }<br />
                              
                              
                </pre>
            </blockquote>

            <hr />

            <p style={{ textAlign: 'justify' }}> Use la implementación IHtmlLocalizer  para los recursos que contienen HTML. IHtmlLocalizer HTML codifica los argumentos formateados en la cadena de recursos, pero no codifica HTML la cadena de recursos en sí. En la muestra resaltada a continuación, solo el valor del parámetro de nombre está codificado en HTML. </p>


            <blockquote>

                <pre>

                    public class Program<br />

                    using System;<br />
                    using Microsoft.AspNetCore.Http;<br />
                    using Microsoft.AspNetCore.Localization;<br />
                    using Microsoft.AspNetCore.Mvc;<br />
                    using Microsoft.AspNetCore.Mvc.Localization;<br />

                    namespace Localization.StarterWeb.Controllers<br />
                    &#123;<br />
                   &#32;&#32; public class BookController : Controller<br />
                   &#32;&#32; &#123;<br />
                   &#32;&#32; private readonly IHtmlLocalizer&lt;BookController> _localizer;<br />

                   &#32;&#32; public BookController(IHtmlLocalizer&lt;BookController> localizer)<br />

                  &#32;&#32;  _localizer = localizer; <br />
                        &#32;&#32;  &#32;&#32;  }<br />
             
                       &#32;&#32;     public IActionResult Hello(string name)<br />

                 &#32;&#32;   ViewData["Message"] = _localizer["<b>Hello</b><i> {0}</i>", name]; <br />
                    <br />
                  &#32;&#32;  return View();<br />
                    }<br />


                </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}> En el nivel más bajo, puede obtener IStringLocalizerFactory fuera de Dependencia. </p>

            <blockquote>

                <pre>

                    public class Program<br />

                    <br />
                    public class TestController : Controller<br />
                    
                    private readonly IStringLocalizer _localizer;<br />
                    private readonly IStringLocalizer _localizer2;<br />
                    <br />
                    public TestController(IStringLocalizerFactory factory)<br />
                    &#123;<br />
                    &#32;&#32; var type = typeof(SharedResource);<br />
                    &#32;&#32; var assemblyName = new AssemblyName(type.GetTypeInfo().Assembly.FullName);<br />
                  &#32;&#32;   _localizer = factory.Create(type);<br />
                  &#32;&#32;   _localizer2 = factory.Create("SharedResource", assemblyName.Name);<br />
                    }<br />
               
                   &#32;&#32;  public IActionResult About()<br />

                   &#32;&#32;  ViewData["Message"] = _localizer["Your application description page."]<br />
                   &#32;&#32;  + " loc 2: " + _localizer2["Your application description page."];<br />

                </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}> Puede particionar sus cadenas localizadas por controlador, área o tener solo un contenedor. En la aplicación de ejemplo, se usa una clase ficticia llamada SharedResource para los recursos compartidos. </p>

            <blockquote>

                <pre>

                    namespace Localization.StarterWeb<br />
                    &#123;<br />
                    &#32;&#32; public class SharedResource<br />
                    &#32;&#32; &#123;<br />
                    &#32;&#32; }<br />
                    }<br />

                </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}> InfoController y SharedResource se utilizan para contener cadenas globales o compartidas.: </p>

            <blockquote>

                <pre>

                    public class InfoController : Controller<br />
                    &#123;<br />
                   &#32;&#32;  private readonly IStringLocalizer&lt;InfoController> _localizer;<br />
                   &#32;&#32;  private readonly IStringLocalizer&lt;SharedResource> _sharedLocalizer;<br />

                   &#32;&#32;  public InfoController(IStringLocalizer&lt;InfoController> localizer,<br />
                    &#32;&#32; IStringLocalizer&lt;SharedResource> sharedLocalizer)<br />
                   &#32;&#32;  &#123;<br />
                    &#32;&#32; _localizer = localizer;<br />
                    &#32;&#32; _sharedLocalizer = sharedLocalizer;<br />
                    &#32;&#32; }<br />
                   
                     &#32;&#32; public string TestLoc()<br />

                   &#32;&#32;  string msg = "Shared resx: " + _sharedLocalizer["Hello!"] +<br />
                    &#32;&#32; " Info resx " + _localizer["Hello!"];<br />
                    &#32;&#32; return msg;<br />
                    }
               
                </pre>
            </blockquote>

            <h2> Ver localización.</h2>
            <p style={{ textAlign: 'justify' }}>El servicio IViewLocalizer proporciona cadenas localizadas para una vista. La clase ViewLocalizer implementa esta interfaz y encuentra la ubicación del recurso desde la ruta del archivo de vista. El siguiente código muestra cómo usar la implementación predeterminada de IViewLocalizer:  </p>

            <blockquote>

                <pre>



                    @using Microsoft.AspNetCore.Mvc.Localization<br />

                    @inject IViewLocalizer Localizer<br />

                    @&#123;<br />
                    ViewData["Title"] = Localizer["About"];<br />
                    }<br />
                     &#60;h2>@ViewData["Title"]. &#60;/h2><br />
                     &#60;h3>@ViewData["Message"] &#60;/h3><br />

                    <p>@Localizer["Use this area to provide additional information."]</p><br />

                </pre>
            </blockquote>
            <br />
            <img alt='urlNet' src={String(img1)} />

        </div>;
    }
}
