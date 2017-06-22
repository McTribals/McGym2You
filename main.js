let app = new Vue({
   el: '#app',
   data:{
      mostrarBoton: false,
      mostrarComponentes: false,
      mostrarPaquetes: false,
      hiperCaloricosText: `Los hipercalóricos son suplementos en polvo, generalmente destinados a la personas con dificultades para ganar masa muscular, que poseen un metabolismo alto y con un somatotipo delgado, son suplementos altamente calóricos y con cantidades medias de grasas, teniendo una importancia relevante para aquellos que deseen aumentar su masa muscular, están compuestos de mayores cantidades de carbohidratos, medianas cantidades de proteínas y lípidos contienen vitaminas, minerales y nutrientes indispensables para que los músculos crezcan en su nivel máximo`
   },
   methods: {
      setDescription(id){
         $('#mainModal .modal-body #content-modal').css("min-height","230px");
         if(id == 'hiper1'){$('#mainModal .modal-body #content-modal').html(`<p>Hipercalorico 1</p>`);
         }else if(id == 'hiper2'){$('#mainModal .modal-body #content-modal').html(`<p>Hipercalorico 2</p>`);
         }else if(id == 'hiper3'){$('#mainModal .modal-body #content-modal').html(`<p>Hipercalorico 3</p>`);
         }else if(id == 'hiper4'){$('#mainModal .modal-body #content-modal').html(`<p>Hipercalorico 4</p>`);
         }else if(id == 'hiper5'){$('#mainModal .modal-body #content-modal').html(`<p>Hipercalorico 5</p>`);
         }else if(id == 'hipo1'){$('#mainModal .modal-body #content-modal').html(`<p>Hipocalorico 1</p>`);
         }else if(id == 'hipo2'){$('#mainModal .modal-body #content-modal').html(`<p>Hipocalorico 2</p>`);
         }else if(id == 'hipo3'){$('#mainModal .modal-body #content-modal').html(`<p>Hipocalorico 3</p>`);
         }else if(id == 'hipo4'){$('#mainModal .modal-body #content-modal').html(`<p>Hipocalorico 4</p>`);
         }else if(id == 'hipo5'){$('#mainModal .modal-body #content-modal').html(`<p>Hipocalorico 5</p>`);}
      }
   }
})

const componentes = 'COMPONENTES';
const beneficios = 'BENEFICIOS';
const paquetes = 'PAQUETES';

/*PLANES*/
/*Titles PLans*/
const planPersonal = 'PLAN PERSONAL';
const planSemiPersonal = 'PLAN SEMI PERSONAL';
const planSemiGrupal = 'PLAN SEMI GRUPAL';
const pausasLaborales = 'PAUSAS LABORALES';
const nutricionYDietetica = 'NUTRICION Y DIETETICA';
const analisisMedicos = 'ANALISIS MEDICOS';
const terapiasFlorales ='TERAPIAS FLORALES';
const outsourcing = 'OUTSOURCING';

/*Image PLans*/
const planPersonalImage = 'images/Planes/PLAN%20PERSONAL.png';
const planSemiPersonalImage = 'images/Planes/PLAN%20SEMI%20PERSONAL.jpg';
const planSemiGrupalImage = 'images/Planes/PLAN%20SEMI%20GRUPAL.jpg';
const pausasLaboralesImage = 'images/Planes/PAUSAS%20LABORALES.jpg';
const nutricionYDieteticaImage = 'images/Planes/NUTRICION%20&%20DIETETICA.jpg';
const analisisMedicosImage = 'images/Planes/ANALISIS%20MEDICOS.jpg';
const terapiasFloralesImage ='images/Planes/TERAPIAS%20FLORALES.jpg';
const outsourcingImage = 'images/Planes/OUTSOURCING.jpg';

/*Text PLans*/
const planPersonalText = 'Este plan de entrenamiento esta dirigido a tres ó cuatro personas máximo; se compone de una sesión de 55 minutos de actividad física dirigida por un entrenador titulado y aptamente capacitado, en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento. <br/>';
const planSemiPersonalText = 'Este plan de entrenamiento esta dirigido a tres ó cuatro personas máximo; se compone de una sesión de 55 minutos de actividad física, en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento.<br/>';
const planSemiGrupalText = 'Este plan de entrenamiento esta dirigido a tres ó cuatro personas máximo; se compone de una sesión de 55 minutos de actividad física, en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento. <br/>';
const pausasLaboralesText = 'Este es un servicio destinado a empresas e instituciones publicas o privadas que requieran llevar a cabo pausas activas o laborales, durante la ejecución de sus actividades diarias, según lo establecido por la ley Colombiana en el articulo XXX del 2016 y que deja por sentado que toda empresa conformada por mas de 5 empleados debe contar con un programa de ';
const nutricionYDieteticaText = `Día tras día se hace mas notable la gran importancia de una dieta alimenticia sana y saludable que permita alcanzar rápidamente los objetivos propuestos de la mano del ejercicio y los buenos hábitos diarios, puesto que se hace imprescindible la implementación de un plan nutricional personalizado que permita direccionar de manera adecuada las necesidades y objetivos de cada usuario.`;
const analisisMedicosText = `Mediante nuestro convenio institucional con la reconocida compañía IDIME S.A, ofrecemos a nuestros clientes y publico en general el servicio de análisis médico, laboratorio, radiografías y exámenes especializados.

Nuestro objetivo es utilizar todos los medios científicos existentes para garantizar un resultado eficaz y seguro en nuestros clientes, ya que consideramos vital el uso de la ciencia en procesos de nutrición, fisiología y análisis para asegurar el cumplimiento de los objetivos solicitados.`;
const terapiasFloralesText =`Desde hace algunos años, múltiples estudios científicos han evidenciado los grandes beneficios obtenidos en el ser humano a través de las esencias florales y sus terapias, incrementado notablemente la salud y el desempeño físico en el deportista junto con un balance optimo en la parte emocional y psicológica lo cual influye en el buen desempeño del mismo y en su armoniosa interacción con el medio social.`;
const outsourcingText = 'Necesitas organizar un evento deportivo, administrar ungimnasio ó zona deportiva, no cuentas con el personal requerido o calificado paradichas actividades, nosotros te proporcionamos personal altamente calificado bajo la modalidad de outsourcing para satisfacer las necesidades requeridas por nuestros usuarios.';

/*Components*/
const componentePlanes = ` <b>COMPONENTES DEL PLAN </b> <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/> Creación de ficha clínica deportiva. ( Anamnesis ) <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Toma de mediciones corporales. ( Antropometría )<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Registro fotográfico para estudio comparativo.<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Valoración postural para identificación de patologías.<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Programa de adaptación para todo tipo de población.<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Plan de entrenamiento individualizado según objetivos.<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Programa de orientación nutricional y tips generales.<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Toma de cargas maximales. ( Casos específicos )<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Entrenador Personal TITULADO con amplia experiencia.<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Firma de contrato de servicios para garantía del usuario.<br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Servicio a domicilio en casa, oficina, parque o GYM del conjunto.`;

const componenteLaboral = ` <b>COMPONENTES DEL PLAN </b> <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Presentación y proceso motivacional. <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Calentamiento general. <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Calentamiento especifico. <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Activación articular. <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Ejecución de ejercicios específicos. <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Actividad de integración laboral. <br/>`;
const beneficioLaboral = ` <b>BENEFICIOS DEL PLAN </b><br/>
                           <img src="images/Logo/maps-and-flags.png"/>	Reducción del estrés en los trabajadores. <br/>
                           <img src="images/Logo/maps-and-flags.png"/>	Mejora el desempeño a nivel laboral. <br/>
                           <img src="images/Logo/maps-and-flags.png"/>	Disminución de riesgo de enfermedades profesionales. <br/>
                           <img src="images/Logo/maps-and-flags.png"/>	Motiva y mejora las relaciones interpersonales. <br/>
                           <img src="images/Logo/maps-and-flags.png"/>	Incita al trabajo en equipo a través de actividades lúdicas. <br/>
                           <img src="images/Logo/maps-and-flags.png"/>	Promueve las buenas posturas corporales. <br/>
                           <img src="images/Logo/maps-and-flags.png"/>	Favorece la autoestima y aumenta la concentración.`;
const paquetesNutricion = `<b>PAQUETES DEL PLAN</b><br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Nutrición Estándar <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Nutrición Optima <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	Nutrición Premium <br/>
                           <img src="images/Logo/chevron-sign-to-right.png" style="width: 15px;"/>	VIP Smart Pack`;
/*/PLANES*/

/*TENDENCIAS*/
/*Title Tendencias*/
const suspension = 'SUSPENSION';
const basesInestables = 'BASES INESTABLES';
const pesasRusas = 'PESAS RUSAS';
const crossfit = 'CROSSFIT';
const kickBoxing = 'KICK BOXING';
const theraBand = 'THERA BAND';
const gerontoGimnasia = 'GERONTO GIMNASIA';
const preNatal = 'PRE NATAL';
/*Images Tendencias*/

const suspensionImage = 'images/Tendencias/SUSPENSION_TRX.jpg';
const basesInestablesImage = 'images/Tendencias/BASES%20INESTABLES.jpeg';
const pesasRusasImage = 'images/Tendencias/PESAS%20RUSAS.jpg';
const crossfitImage = 'images/Tendencias/CROSSFIT.jpg';
const kickBoxingImage = 'images/Tendencias/KICK%20BOXING.jpg';
const theraBandImage = 'images/Tendencias/THERA%20BAND.jpg';
const gerontoGimnasiaImage = 'images/Tendencias/GERONTOGIMNASIA.jpg';
const preNatalImage = 'images/Tendencias/PRENATAL.jpg';

/*Text Tendencias*/
const suspensionText =  `<p style="font-size: 1em">El entrenamiento en Suspensión TRX surgió de la necesidad de los SEAL de mantener una condición física óptima, cuando las circunstancias de su labor implicaban que no tuvieran a su disposición ni el espacio ni los equipos necesarios para su entrenamiento.

El entrenamiento en suspensión es una forma de ejercicio físico funcional para cualquier actividad deportiva o de la vida cotidiana, que se lleva a cabo con un arnés en suspensión (sistema de cables y cintas) sujeto por un punto de anclaje este es ajustable y no elástico, fabricado de materiales diversos pero resistentes del punto de anclaje salen dos cuerdas con agarres mediante las cuales realizaremos los movimientos. Este entrenamiento permite realizar ejercicios multidimensionales, útiles, eficaces y seguros con el propio peso corporal y la fuerza de la gravedad, que desarrollan la fuerza y al mismo tiempo mejora la flexibilidad, equilibrio y la estabilidad de la parte central del cuerpo ( Core )

Randy Hetrick, ex miembro de los SEAL y fundador de Fitness Anywhere junto a sus compañeros crearon el primer modelo a partir de un cinturón de paracaídas cosido a mano con herramientas para la reparación de botes de goma y desarrollaron rápidamente una serie de ejercicios en los que utilizaban su peso corporal, en poco tiempo, Randy Hetrick y sus compañeros establecieron las bases de lo que seria una categoría completamente nueva y original de ejercicios funcionales, todo esto sucedió durante los años 90 y se comenzó a comercializar en 2005, este sistema es el perfeccionamiento de antiguas poleas que se utilizaban para la rehabilitación en el campo físico.</p>`;

const basesInestableText = `<p style="font-size: 1em">En el ámbito del entrenamiento deportivo, se pueden utilizar las superficies inestables “Fitball, Bosu, etc.“ con diversas finalidades, su principal uso se da en desarrollar la propiocepción y el equilibrio. Es una herramienta imprescindible en la rehabilitación de lesiones, por ejemplo en un esguinces de tobillo, situación en la que médicos y fisioterapeutas recomiendan pisar con el tobillo en diferentes posturas sobre un Bosu, o caminar sobre campos labrados, para fortalecer el tobillo y mejorar su propiocepción, ya que el tobillo se queda “tonto” tras un esguince, y el organismo necesita volver a sentir esa articulación. Las superficies inestables mejoran la eficacia sensorial a nivel articular, tanto del tiempo de reacción muscular, como en la activación de la musculatura agonista-antagonista produciendo una mejora en la protección del complejo articular.

Donde también tiene un potencial importante, es en el trabajo de la sección media del cuerpo para la mejora del rendimiento deportivo o incluso para proteger la columna vertebral mediante el fortalecimiento del CORE, el rol principal de la musculatura de la región central es proveer estabilidad al cuerpo ya que una región central fuerte y estable proporciona el vínculo necesario para la transferencia de las tensiones que se transmiten desde el suelo, a través del tren inferior y por último a través del tren superior y de las extremidades superiores, es decir, necesitamos una sección media fuerte para correr, realizar fintas, saltar lanzar, golpear etc.</p> `;

const pesasRusasText = `Entrenar con pesas rusas también llamadas ‘kettlebell‘ es una manera divertida y diferente de completar tus rutinas de ejercicios en el gimnasio. Tanto si quieres potenciar tus músculos como quemar grasas, tener un par de kettlebells a mano es una de las mejores vías para preparar tu entrenamiento en casa, dado su fácil transporte y empleo. Sus efectos a la larga son de una gran flexibilidad y resistencia. Además, gracias a su amplia variedad de funciones (abdominales, musculación, cardio, etc.), se pueden usar para trabajar todas las partes del cuerpo.

Los ejercicios con pesas rusas nos obligan a poner en movimiento todo el cuerpo potenciando la fuerza global de la persona sin dejar ningún músculo desatendido esta manera de ejercitarse acaba modelando la figura y dando mucha más energía y vigor a los músculos que las máquinas tradicionales, sin debilidades en zonas que no se han trabajado, con un aporte mayor de movilidad.`;

const crossfitText = `El CrossFit es una técnica de entrenamiento que encadena movimientos de diferentes disciplinas al mismo tiempo, tales como la halterofilia, el entrenamiento metabólico y el gimnástico.

La meta es desarrollar las capacidades y habilidades tales como la resistencia cardiovascular y respiratoria, resistencia muscular, fuerza, flexibilidad, potencia velocidad, agilidad, coordinación , equilibrio y precisión, exponiendo a la persona a tantos escenarios y combinaciones de movimientos como sea posible se logra una adaptación que la prepara para lo desconocido y lo poco probable.`;

const kickBoxingText = `El Kick Boxing es una práctica que combina patadas y golpes de puño, al realizarlo, tu cuerpo entra en íntima relación con tu mente y se efectúa una quema de calorías constante, al practicarlo por lo menos dos días a la semana en clases de una hora, irás adquiriendo un buen aprendizaje y acondicionarás poco a poco tu cuerpo y tu mente".

Esta disciplina nació en Japón en 1969, de la unión del karate con el muay thai como se le conoce al Boxeo Tailandés, también ha ido evolucionando hasta transformarse en un programa de acondicionamiento físico en el cual se realiza una actividad aeróbica superior, razón por la cual muchas mujeres lo están practicando, pues es una excelente alternativa para las que no pueden bajar de peso y moldear su cuerpo al mismo tiempo.`;

const theraBandText = `Thera-Band, es un implemento para el desarrollo de ejercicios aplicado en todo el mundo que, sin necesidad de disponer de complicados artilugios, nos permite aprovechar métodos de terapia deportiva para el entrenamiento individual.

Los ejercicios sirven para conservar o restituir nuestra salud son utilizados en diversas metodologías de entrenamiento funcional y de gran ayuda en procesos de rehabilitación de lesiones, mejoras de la fuerza, adaptabilidad articular y muscular, a su vez también pueden ser utilizados como material didáctico en el entrenamiento con niños y personas de la tercera edad.`;

const gerontoGimnasiaText= `La Gerontogimnasia tiene una función específica, la de introducir los hábitos y actitudes saludables del mundo de la gimnasia en la tercera edad, gracias a ella se mejora la forma física de aquellas personas que presentan algún tipo de deterioro físico o algún problema locomotor. La gimnasia fomenta una actitud positiva en la edad avanzada y contribuye a ver las cosas de un modo más optimista ante los problemas y limitaciones asociadas a la edad.

El objetivo principal de la Gerontogimnasia es mantener o aumentar la capacidad física y motora, y alcanzar un buen estado físico y mental además mejorar aquellas conductas psicomotrices para contrarrestar el progresivo deterioro natural del envejecimiento o el deterioro por enfermedad.`;

const preNatalText = `La gimnasia prenatal es un deporte hecho a medida para las embarazadas, y que satisface todas sus necesidades respetando siempre la salud de la mamá y del bebé. Practicar deporte durante el embarazo te ayudará a estar en forma físicamente, pero también mentalmente, y a estar mejor preparada para el parto y la llegada del bebé.

Mientras que deportes como el yoga o el método Pilates trabajan el lado físico y mental del ejercicio, con los ejercicios de gimnasia prenatal fortalecerás tu cuerpo y lo prepararás para dar a luz.`;

/*Beneficios Pre Natal*/

const preNatalBeneficios = `<b>BENEFICIOS DEL PLAN </b><br/>
<img src="images/Logo/maps-and-flags.png"/>  Realizando ejercicios prenatales te familiarizarás con las contracciones fortalecerás músculos, practicarás posiciones idóneas para el parto y aprenderás a conocer tu cuerpo para facilitar el alumbramiento. <br/>

<img src="images/Logo/maps-and-flags.png"/>  Con ejercicios para fortalecer la pelvis, podrás luchar contra molestias como la incontinencia urinaria durante el embarazo. <br/>

<img src="images/Logo/maps-and-flags.png"/>  Si trabajas la respiración mientras realizas tus ejercicios de gimnasia prenatal mejoraras la oxigenación de tu cuerpo y lograrás además sentirte más relajada.`;

/*/TENDENCIAS*/

/*SUPLEMENTOS Y ACCESORIOS*/

/*Title suplementos y accesorios*/
const hiperCaloricos = `HIPER CALORICOS`;
const hipoCaloricos = `HIPO CALORICOS`;
const ceroCarbohidratos = `CERO CARBOHIDRATOS`;
const quemadores = `QUEMADORES`;
const energia = `ENERGIA & RECUPERACION`;
const naturista = `LINEA NATURISTA`;
const geles = `GELES REDUCTORES`;
const accesoriosFitness = `ACCESORIOS FITNESS`;

/*Images suplementos y accesorios*/
const hiperCaloricosImages = 'images/Accesorio/HIPER%20CALORICOS.jpg';
const hipoCaloricosImages = 'images/Accesorio/HIPO%20CALORICOS.jpg';
const ceroCarbohidratosImages = 'images/Accesorio/CERO%20CARBOHIDRATOS.jpg';
const quemadoresImages = 'images/Accesorio/QUEMADORES.jpg';
const energiaImages = 'images/Accesorio/ENERGIA%20&%20RECUPERACION.jpg';
const naturistaImages = 'images/Accesorio/LINEA%20NATURISTA.jpg';
const gelesImages = 'images/Accesorio/GELES%20REDUCTORES.jpg';
const accesoriosFitnessImages = 'images/Accesorio/ACCESORIOS%20FITNESS.jpg';

/*Text suplementos y accesorios*/

let hipoCaloricosText = `Son proteínas de más bajo aporte calórico por lo que se les considera como proteínas limpias ya que su contenido en carbohidratos y grasa tiende a ser muy bajo, este tipo son los más indicados para las personas que desean mantener la masa muscular en niveles de grasa muy bajos, siendo así una de las proteínas de mayor calidad para el crecimiento y fuerza muscular magra, es ideal para personas con tendencia a la endomorfia “ Subir de peso con facilidad ” o atletas que realizan dietas bajas en calorías en busca de un porcentaje de definición muscular.`;
let ceroCarbohidratosText = `Este tipo de suplementos se caracteriza por carecer de carbohidratos y azucares además de contener un alto perfil proteico, razón por la cual su contenido calórico es mínimo y este procede única y exclusivamente de las proteínas presentes en este, es ideal para personas diabéticas debido a su ausencia de azucares y carbohidratos, además contribuye con el desarrollo de la masa muscular limpia y es ideal en procesos de perdida de peso y definición muscular.`;
let quemadoresText = `Este tipo de suplementos están diseñados para incrementar la perdida de peso y específicamente la reducción de tejido graso, cabe notar que existen dos tipos de quemadores de grasa. `;
let energiaText = `Esta línea de suplementos permite proporcionar amplia energía que contribuyen con el buen desempeño físico, también contamos con una línea de suplementos recuperadores que contribuyen a la reparación de los tejidos musculares reducen la fatiga corporal.`;
let naturistaText = `Nuestra tienda en línea cuenta con una amplia variedad de productos dietéticos y naturistas de alta calidad, diseñados para satisfacer las necesidades de nuestros clientes a la vez que aportan bienestar y salud, aquí podrás encontrar vitaminas, minerales, oligoelementos y diuréticos, entre muchos otros productos de líneas naturales, libres de químicos y de procesos de tipo farmacéutico que garantizan resultados sin efectos secundarios para la salud.`;
let gelesText = `La línea reductora de SkinSlim fue científicamente desarrollada durante un proceso de 5 años de investigación y perfeccionamiento que garantizan óptimos resultados, sin generar efectos secundarios, es ideal para reafirmar el tejido muscular y mejorar los procesos de definición corporal.`;
let accesoriosFitnessText = `Contamos con una amplia gama de elementos para la realización de actividad física y accesorios deportivos, productos de alta calidad que garantizan su durabilidad, resistencia y ergonomía para la buena practica de actividades físico deportivas en la comodidad de su hogar o al aire libre.`;

/*Beneficios suplementos y accesorios*/

const hiperCaloricosBeneficio = `<p><b>ACCESORIOS</b></p><br/>
                                 <a id="hiper1" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/><p>Proporciona ganancia de peso para personas con metabolismo acelerado.</p></a><br/>
                                 <a id="hiper2" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/><p>Ayudan a la ganancia de volumen de masa muscular y peso.</p></a><br/>
                                 <a id="hiper3" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/><p>Suplen las necesidades de energía.</p></a><br/>
                                 <a id="hiper4" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/><p>Son una fuente importante de vitaminas y minerales.</p></a><br/>
                                 <a id="hiper5" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/><p>Acelera la recuperación Post-Entrenamiento.</p></a>`;

const hipoCaloricosBeneficio = ` <p><b>ACCESORIOS</b></p><br/>
                                 <a id="hipo1" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/> <p>Ideales para programas de perdida de peso.</p></a><br/>
                                 <a id="hipo2" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/> <p>Aportan altas dosis de proteína.</p></a><br/>
                                 <a id="hipo3" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/> <p>Muy bajos en grasa, azucares y carbohidratos.</p></a><br/>
                                 <a id="hipo4" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/> <p>Son una fuente importante de vitaminas y minerales.</p></a><br/>
                                 <a id="hipo5" href="#" onclick="setDescrip(this)" class="accesorios-p"><img src="images/Logo/maps-and-flags.png"/> <p>Contribuyen al crecimiento de la masa muscular limpia.</p></a>`;
function setDescrip(element){
   let id = element.id;
   console.log(id);
   app.setDescription(id);
}

function showModalPlans(element){
   console.log('Entro en metodo ' + element.id);
      let idElement = element.id;
      if(idElement == 'planPersonal'){displayModal(idElement, planPersonal, planPersonalImage, planPersonalText, componentePlanes);
      }else if(idElement == 'planSemiPersonal'){ displayModal(idElement, planSemiPersonal, planSemiPersonalImage, planSemiPersonalText, componentePlanes);
      }else if(idElement == 'planSemiGrupal'){ displayModal(idElement, planSemiGrupal, planSemiGrupalImage, planSemiGrupalText, componentePlanes);
      }else if(idElement == 'pausasLaborales'){ displayModal(idElement, pausasLaborales, pausasLaboralesImage, pausasLaboralesText, componenteLaboral,beneficioLaboral);
      }else if(idElement == 'nutricionYDietetica'){displayModal(idElement, nutricionYDietetica, nutricionYDieteticaImage, nutricionYDieteticaText, paquetesNutricion);
      }else if(idElement == 'analisisMedicos'){ displayModal(idElement, analisisMedicos, analisisMedicosImage, analisisMedicosText);
      }else if(idElement == 'terapiasFlorales'){displayModal(idElement, terapiasFlorales, terapiasFloralesImage, terapiasFloralesText);
      }else if(idElement == 'outsourcing'){displayModal(idElement, outsourcing, outsourcingImage, outsourcingText);
      }else if(idElement == 'suspension'){ displayModal(idElement, suspension, suspensionImage, suspensionText); setTop();
      }else if(idElement == 'basesInestables'){ displayModal(idElement, basesInestables, basesInestablesImage, basesInestableText);
      }else if(idElement == 'pesasRusas'){ displayModal(idElement, pesasRusas , pesasRusasImage, pesasRusasText);
      }else if(idElement == 'crossfit'){  displayModal(idElement, crossfit , crossfitImage, crossfitText);
      }else if(idElement == 'kickBoxing'){ displayModal(idElement, kickBoxing , kickBoxingImage, kickBoxingText);
      }else if(idElement == 'theraBand'){ displayModal(idElement, theraBand , theraBandImage, theraBandText);
      }else if(idElement == 'gerontoGimnasia'){  displayModal(idElement, gerontoGimnasia , gerontoGimnasiaImage, gerontoGimnasiaText);
      }else if(idElement == 'preNatal'){ displayModal(idElement, preNatal , preNatalImage, preNatalText, preNatalBeneficios);
      }else if(idElement == 'hiperCaloricos'){ displayModal(idElement, hiperCaloricos, hiperCaloricosImages, app.hiperCaloricosText, hiperCaloricosBeneficio);
      }else if(idElement == 'hipoCaloricos'){displayModal(idElement, hipoCaloricos, hipoCaloricosImages, hipoCaloricosText, hipoCaloricosBeneficio);
      }else if(idElement == 'ceroCarbo'){  displayModal(idElement, ceroCarbohidratos, ceroCarbohidratosImages, ceroCarbohidratosText);
      }else if(idElement == 'quemadores'){ displayModal(idElement, quemadores, quemadoresImages, quemadoresText);
      }else if(idElement == 'energia'){  displayModal(idElement, energia, energiaImages, energiaText);
      }else if(idElement == 'lineaNaturista'){  displayModal(idElement, naturista, naturistaImages, naturistaText);
      }else if(idElement == 'gelesReductores'){   displayModal(idElement, geles, gelesImages, gelesText);
      }else if(idElement == 'accesoriosFitness'){ displayModal(idElement, accesoriosFitness, accesoriosFitnessImages, accesoriosFitnessText);}
}

function setTop(){
   $('#mainModal').css("top","-35px");
}



function displayModal(id, plan, image, text, compo, bene){

   console.log(bene);
   let newId = id + 'Comp';
   $('#mainModal .modal-body #content-modal').css("min-height","0");
   $('#mainModal .modal-content').attr("id", newId);
   $('#mainModal .modal-header #tlModal').text(plan);
   $('#mainModal .modal-body #image-modal').html("<a class='team-image'><img class='img-rounded' src='"+image+"' width='100%' height='200px'/></a>");
   if(compo == undefined && bene == undefined ){
      $('#mainModal .modal-body #content-modal').html(`<p>${text}</p>`);
      $('#mainModal .modal-body #content-modal-text').html(`<p></p>`);
   }else{
      if(bene == undefined){
         $('#mainModal .modal-body #content-modal').html(`<p>${text}<hr></p>`);
         $('#mainModal .modal-body #content-modal-text').html(`<p>${compo}</p>`);
      }else{
         $('#mainModal .modal-body #content-modal').html(`<p>${text}<hr></p>`);
         $('#mainModal .modal-body #content-modal-text').html(`<p>${compo}${bene}</p>`);
      }
   }



   //populatePre('Holamama.txt');

   $('#btnMainModal').click();
}

function showModalComponents(element){
   console.log('Entro en metodo ' + element);
   let idParent = $(element).parent().parent().attr('id');
   let id = element.id;
   console.log(id);
   console.log(idParent);

   if(idParent == 'planPersonalComp'){ displayModalComponent(componentes,componentePlanes);
   }else if(idParent == 'planSemiPersonalComp'){ displayModalComponent(componentes,componentePlanes);
   }else if(idParent == 'planSemiGrupalComp'){ displayModalComponent(componentes,componentePlanes);
   }else if(idParent == 'pausasLaboralesComp'){ displayModalComponent(componentes, componenteLaboral, beneficios, beneficioLaboral, id);
   }else if(idParent == 'nutricionYDieteticaComp'){ displayModalComponent(paquetes, paquetesNutricion);
   }else if(idParent == 'analisisMedicosComp'){ displayModalComponent();
   }else if(idParent == 'terapiasFloralesComp'){ displayModalComponent();
   }else if(idParent == 'preNatalComp'){ displayModalComponent(beneficios, preNatalBeneficios, id);
   }else if(idParent == 'hiperCaloricosComp'){ displayModalComponent(beneficios, hiperCaloricosBeneficio, id);
   }else if(idParent == 'hipoCaloricosComp'){ displayModalComponent(beneficios, hipoCaloricosBeneficio, id);}
}

function displayModalComponent(titleComp, component, titleBenefi, beneficio, id){
   if(titleBenefi === null && beneficio === null){
      $('.bs-modal-medium .modal-header #tlModalComp').text(titleComp);
      $('.bs-modal-medium .modal-body #content-components').html(component);
      $('#componentModal').click();
   }else{
      if(id == 'beneficios'){
         $('.bs-modal-medium .modal-header #tlModalComp').text(titleBenefi);
         $('.bs-modal-medium .modal-body #content-components').html(beneficio);
         $('#componentModal').click();
      }else if(id == 'paquetes'){
         $('.bs-modal-medium .modal-header #tlModalComp').text(titleComp);
         $('.bs-modal-medium .modal-body #content-components').html(component);
         $('#componentModal').click();
      }else{
         $('.bs-modal-medium .modal-header #tlModalComp').text(titleComp);
         $('.bs-modal-medium .modal-body #content-components').html(component);
         $('#componentModal').click();
      }
   }

   $('#mainModal').css("display", "none");
   $('#mainModal').attr("aria-hideen", "true");
   $('#mainModal').removeClass('in');
}

function showModalMain(){
   $('#mainModal').css("display", "block");
   $('#mainModal').attr("aria-hideen", "false");
   $('#mainModal').addClass('in');
}

function displayModalSesion(){
   $('#sesion').click();
}




/*Read File But With a Server*/
/*function populatePre(url) {
   console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('content-modal').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}*/
