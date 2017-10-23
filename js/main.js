// Menu
$(".button-collapse").sideNav();
// Paralax
$(document).ready(function() {
  $('.parallax').parallax();
});
// Galeria
$(document).ready(function() {
  $('.slider').slider();
});
// Ampliar imagen
$(document).ready(function() {
  $('.materialboxed').materialbox();
});
// Toast
Materialize.toast('319 202 4120', 1000, 'rounded')
//Modal
$(document).ready(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

/*----------------------------------------------------
                  VARIABLES GENERALES
------------------------------------------------------*/
let planes = {
  planPersonal: {
    titulo: 'Plan Personal',
    cuerpo: `Este plan de entrenamiento esta dirigido a una persona, se compone de una sesión de 55 minutos de actividad física dirigida por un entrenador titulado y aptamente capacitado, en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento.`,
    componentes: ['Creación de ficha clínica deportiva. ( Anamnesis )', 'Toma de mediciones corporales. ( Antropometría )', '	Registro fotográfico para estudio comparativo.', 'Valoración postural para identificación de patologías', 'Programa de adaptación para todo tipo de población.', 'Plan de entrenamiento individualizado según objetivos.', 'Programa de orientación nutricional y tips generales.', 'Toma de cargas maximales. ( Casos específicos )', 'Entrenador Personal TITULADO con amplia experiencia.', 'Firma de contrato de servicios para garantía del usuario.', 'Servicio a domicilio en casa, oficina, parque o GYM del conjunto.']
  },
  planSemiPersonal: {
    titulo: 'Plan Semi Personal',
    cuerpo: `Este plan de entrenamiento esta dirigido a dos personas máximo; se compone de una sesión de 55 minutos de actividad física en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento.`,
  },
  planSemigrupal: {
    titulo: 'Plan Semi Grupal',
    cuerpo: `Este plan de entrenamiento esta dirigido a tres ó cuatro personas máximo; se compone de una sesión de 55 minutos de actividad física en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento.`,
  },
  pausasLaborales: {
    titulo: 'Pausas Laborales',
    cuerpo: `Este es un servicio destinado a empresas e instituciones publicas o privadas que requieran llevar a cabo pausas activas o laborales, durante la ejecución de sus actividades diarias, según lo establecido por la ley Colombiana en el articulo XXX del 2016 y que deja por sentado que toda empresa conformada por mas de 5 empleados debe contar con un programa de`,
    beneficios: ['Reducción del estrés en los trabajadores.', 'Mejora el desempeño a nivel laboral.', 'Disminución de riesgo de enfermedades profesionales.', 'Motiva y mejora las relaciones interpersonales.', 'Incita al trabajo en equipo a través de actividades lúdicas.', 'Promueve las buenas posturas corporales.', 'Favorece la autoestima y aumenta la concentración.'],
    componentes: ['Presentación y proceso motivacional.', 'Calentamiento general.', 'Calentamiento especifico.', 'Activación articular.', 'Ejecución de ejercicios específicos.', 'Actividad de integración laboral.', 'Realización de actividad mancomunada.']
  },
  nutricionDietetica: {
    titulo: 'Nutrición y Dietética',
    cuerpo: `Día tras día se hace mas notable, la gran importancia de una dieta alimenticia optima y saludable que permita alcanzar rápidamente los objetivos propuestos de la mano del ejercicio y los buenos hábitos diarios, puesto que se hace imprescindible la implementación de un plan nutricional personalizado que permita direccionar de manera adecuada las necesidades y objetivos de cada usuario.`,
    componentes: ['Nutrición Estándar', 'Nutrición Optima', 'Nutrición Premium', 'VIP Smart Pack']
  },
  analisisMedicos: {
    titulo: 'Analisis Médicos',
    cuerpo: `Mediante nuestro convenio institucional con la reconocida compañía IDIME S.A, ofrecemos a nuestros clientes y publico en general el servicio de análisis médico, laboratorio, radiografías y exámenes especializados. Nuestro objetivo es utilizar todos los medios científicos existentes para garantizar un resultado eficaz y seguro en nuestros clientes, ya que consideramos vital el uso de la ciencia en procesos de nutrición, fisiología y análisis para asegurar el cumplimiento de los objetivos solicitados.`
  },
  terapiasFlorales: {
    titulo: 'Terapias Florales',
    cuerpo: `Desde hace algunos años, múltiples estudios científicos han evidenciado los grandes beneficios obtenidos en el ser humano a través de las esencias florales y sus terapias, incrementado notablemente la salud y el desempeño físico en el deportista junto con un balance optimo en la parte emocional y psicológica lo cual influye en el buen desempeño del mismo y en su armoniosa interacción con el medio social.`
  },
  outsourcing: {
    titulo: 'Outsourcing',
    cuerpo: `Necesitas organizar un evento deportivo, administrar un gimnasio ó zona deportiva, no cuentas con el personal requerido o calificado para dichas actividades, nosotros te proporcionamos personal altamente calificado bajo la modalidad de outsourcing para satisfacer las necesidades requeridas por nuestros usuarios.`
  }
}

let tendencias = {
  suspension: {
    titulo: 'Suspensión / TRX',
    cuerpo: `El entrenamiento en suspensión es una forma de ejercicio físico funcional para cualquier actividad deportiva o de la vida cotidiana, que se lleva a cabo con un arnés en suspensión (sistema de cables y cintas) sujeto por un punto de anclaje este es ajustable y no elástico, fabricado de materiales diversos pero resistentes del punto de anclaje salen dos cuerdas con agarres mediante las cuales realizaremos los movimientos. Este entrenamiento permite realizar ejercicios multidimensionales, útiles, eficaces y seguros con el propio peso corporal y la fuerza de la gravedad, que desarrollan la fuerza y al mismo tiempo mejora la flexibilidad, equilibrio y la estabilidad de la parte central del cuerpo ( Core )`
  },
  basesInestables: {
    titulo: 'Bases Inestables',
    cuerpo: `En el ámbito del entrenamiento deportivo, se pueden utilizar las superficies inestables “Fitball, Bosu, etc.“ con diversas finalidades, su principal uso se da en desarrollar la propiocepción y el equilibrio. Es una herramienta imprescindible en la rehabilitación de lesiones, por ejemplo en un esguinces de tobillo, situación en la que médicos y fisioterapeutas recomiendan pisar con el tobillo en diferentes posturas sobre un Bosu, o caminar sobre campos labrados, para fortalecer el tobillo y mejorar su propiocepción, ya que el tobillo se queda “tonto” tras un esguince, y el organismo necesita volver a sentir esa articulación. Las superficies inestables mejoran la eficacia sensorial a nivel articular, tanto del tiempo de KICK BOXING THERA BAND GERONTO GIMNASIA PRE NATAL reacción muscular, como en la activación de la musculatura agonista-antagonista produciendo una mejora en la protección del complejo articular.`
  },
  pesasRusas: {
    titulo: 'Pesas Rusas',
    cuerpo: `Entrenar con pesas rusas también llamadas ‘kettlebell‘ es una manera divertida y diferente de completar tus rutinas de ejercicios en el gimnasio. Tanto si quieres potenciar tus músculos como quemar grasas, tener un par de kettlebells a mano es una de las mejores vías para preparar tu entrenamiento en casa, dado su fácil transporte y empleo. Sus efectos a la larga son de una gran flexibilidad y resistencia. Además, gracias a su amplia variedad de funciones (abdominales, musculación, cardio, etc.), se pueden usar para trabajar todas las partes del cuerpo.`
  },
  crossfit: {
    titulo: 'Crossfit',
    cuerpo: `El CrossFit es una técnica de entrenamiento que encadena movimientos de diferentes disciplinas al mismo tiempo, tales como la halterofilia, el entrenamiento metabólico y el gimnástico. La meta es desarrollar las capacidades y habilidades tales como la resistencia cardiovascular y respiratoria, resistencia muscular, fuerza, flexibilidad, potencia velocidad, agilidad, coordinación , equilibrio y precisión, exponiendo a la persona a tantos escenarios y combinaciones de movimientos como sea posible se logra una adaptación que la prepara para lo desconocido y lo poco probable.`
  },
  kickBoxing: {
    titulo: 'Kick Boxing',
    cuerpo: `El Kick Boxing es una práctica que combina patadas y golpes de puño, al realizarlo, tu cuerpo entra en íntima relación con tu mente y se efectúa una quema de calorías constante, al practicarlo por lo menos dos días a la semana en clases de una hora, irás adquiriendo un buen aprendizaje y acondicionarás poco a poco tu cuerpo y tu mente&quot;.`
  },
  theraBand: {
    titulo: 'Thera Band',
    cuerpo: `Thera-Band, es un implemento para el desarrollo de ejercicios aplicado en todo el mundo que, sin necesidad de disponer de complicados artilugios, nos permite aprovechar métodos de terapia deportiva para el entrenamiento individual. Los ejercicios sirven para conservar o restituir nuestra salud son utilizados en diversas metodologías de entrenamiento funcional y de gran ayuda en procesos de rehabilitación de lesiones, mejoras de la fuerza, adaptabilidad articular y muscular, a su vez también pueden ser utilizados como material didáctico en el entrenamiento con niños y personas de la tercera edad.`
  },
  gerontoGimnasia: {
    titulo: 'Geronto Gimnasia',
    cuuerpo: `La Gerontogimnasia tiene una función específica, la de introducir los hábitos y actitudes saludables del mundo de la gimnasia en la tercera edad, gracias a ella se mejora la forma física de aquellas personas que presentan algún tipo de deterioro físico o algún problema locomotor. La gimnasia fomenta una actitud positiva en la edad avanzada y contribuye a ver las cosas de un modo más optimista ante los problemas y limitaciones asociadas a la edad. El objetivo principal de la Gerontogimnasia es mantener o aumentar la capacidad física y motora, y alcanzar un buen estado físico y mental además mejorar aquellas conductas psicomotrices para contrarrestar el progresivo deterioro natural del envejecimiento o el deterioro por enfermedad.`
  },
  preNatal: {
    titulo: 'Pre Natal',
    cuerpo: `La gimnasia prenatal es un deporte hecho a medida para las embarazadas, y que satisface todas sus necesidades respetando siempre la salud de la mamá y del bebé. Practicar deporte durante el embarazo te ayudará a estar en forma físicamente, pero también mentalmente, y a estar mejor preparada para el parto y la llegada del bebé. Mientras que deportes como el yoga o el método Pilates trabajan el lado físico y mental del ejercicio, con los ejercicios de gimnasia prenatal fortalecerás tu cuerpo y lo prepararás para dar a luz.`,
    beneficios: ['Realizando ejercicios prenatales te familiarizarás con las contracciones fortalecerás músculos, practicarás posiciones idóneas para el parto y aprenderás a conocer tu cuerpo para facilitar el alumbramiento.', 'Con ejercicios para fortalecer la pelvis, podrás luchar contra molestias como la incontinencia urinaria durante el embarazo.', ' Si trabajas la respiración mientras realizas tus ejercicios de gimnasia prenatal mejoraras la oxigenación de tu cuerpo y lograrás además sentirte más relajada.']
  }
}

let accesorios = {
  hiperCaloricos: {
    titulo: 'Hiper Calóricos',
    cuerpo: `Los hipercalóricos son suplementos en polvo, generalmente destinados a la personas con dificultades para ganar masa muscular, que poseen un metabolismo alto y con un somatotipo delgado, son suplementos altamente calóricos y con cantidades medias de grasas, teniendo una importancia relevante para aquellos que deseen aumentar su masa muscular, están compuestos de mayores cantidades de carbohidratos, medianas cantidades de proteínas y lípidos contienen vitaminas, minerales y nutrientes indispensables para que los músculos crezcan en su nivel máximo.`,
    beneficio: ['Proporciona ganancia de peso para personas con metabolismo acelerado.', 'Ayudan a la ganancia de volumen de masa muscular y peso.', 'Suplen las necesidades de energía.', 'Son una fuente importante de vitaminas y minerales.', 'Acelera la recuperación Post-Entrenamiento.']
  },
  hipoCalorico: {
    titulo: 'Hipo Calóricos',
    cuerpo: `Son proteínas de más bajo aporte calórico por lo que se les considera como proteínas limpias ya que su contenido en carbohidratos y grasa tiende a ser muy bajo, este tipo son los más indicados para las personas que desean mantener la masa muscular en niveles de grasa muy bajos, siendo así una de las proteínas de mayor calidad para el crecimiento y fuerza muscular magra, es ideal para personas con tendencia a la endomorfia “ Subir de peso con facilidad ” o atletas que realizan dietas bajas en calorías en busca de un porcentaje de definición muscular.`,
    beneficio: ['Ideales para programas de perdida de peso.', 'Aportan altas dosis de proteína.', 'Muy bajos en grasa, azucares y carbohidratos.', 'Son una fuente importante de vitaminas y minerales.', 'Contribuyen al crecimiento de la masa muscular limpia.']
  },
  ceroCarbohidrato: {
    titulo: 'Cero Carbohidratos',
    cuerpo: `Este tipo de suplementos se caracteriza por carecer de carbohidratos y azucares además de contener un alto perfil proteico, razón por la cual su contenido calórico es mínimo y este procede única y exclusivamente de las proteínas presentes en este, es ideal para personas diabéticas debido a su ausencia de azucares y carbohidratos, además contribuye con el desarrollo de la masa muscular limpia y es ideal en procesos de perdida de peso y definición muscular.`
  },
  quemadores: {
    titulo: 'Quemadores',
    cuerpo: `Este tipo de suplementos están diseñados para incrementar la perdida de peso y específicamente la reducción de tejido graso, cabe notar que existen dos tipos de quemadores de grasa. `
  },
  energioRecuperacion: {
    titulo: 'Energia y Recuperación',
    cuerpo: `Esta línea de suplementos permite proporcionar amplia energía que contribuyen con el buen desempeño físico, también contamos con una línea de suplementos recuperadores que contribuyen a la reparación de los tejidos musculares reducen la fatiga corporal.`
  },
  lineaNaturias: {
    titulo: 'Linea Naturista',
    cuerpo: `Nuestra tienda en línea cuenta con una amplia variedad de productos dietéticos y naturistas de alta calidad, diseñados para satisfacer las necesidades de nuestros clientes a la vez que aportan bienestar y salud, aquí podrás encontrar vitaminas, minerales, oligoelementos y diuréticos, entre muchos otros productos de líneas naturales, libres de químicos y de procesos de tipo farmacéutico que garantizan resultados sin efectos secundarios para la salud.`
  },
  gelesREductores: {
    titulo: 'Geles Reductores',
    cuerpo: `La línea reductora de SkinSlim fue científicamente desarrollada durante un proceso de 5 años de investigación y perfeccionamiento que garantizan óptimos resultados, sin generar efectos secundarios, es ideal para reafirmar el tejido muscular y mejorar los procesos de definición corporal.`
  },
  accesoriosFitness: {
    titulo: 'Accesorios Fitness',
    cuerpo: `Contamos con una amplia gama de elementos para la realización de actividad física y accesorios deportivos, productos de alta calidad que garantizan su durabilidad, resistencia y ergonomía para la buena practica de actividades físico deportivas en la comodidad de su hogar o al aire libre.`
  }
}


/*----------------------------------------------------
                        METODOS
------------------------------------------------------*/

/**@function: Muestra modal segun plan, tendencia o accesorio escogido por el usuario
   @param: Dos variables de tipo string las cuales indican desde donde se quiere llamar el modal y que item se selecciono*/
function mostrarModal(desde, cual) {
  reseteaValores()
  let seccion = validacionDedeDonde(desde)
  let item = seccion[cual]
  $('#titulo-modal').text(item.titulo)
  $('#cuerpo-modal').text(item.cuerpo)
  if (verificaDespliegueDeModal(item)){
    $('#modalGeneral').modal('open');
  } 
}

/**@function: Valida desde donde se llama el modal para asi retornar el objeto correspondiente
   @param: Variable tipo string desde donde se llama el Modal
   @return: Objeto segun dede donde se llama el modal*/
function validacionDedeDonde(desde) {
  if (desde == 'planes') return planes
  else if (desde == 'tendencias') return tendencias
  else if (desde == 'accesorios') return accesorios
}

/**@function: Valida si el objeto contiene componentes
   @param: Objeto 
   @return: Verdadero o falso segun si el objeto tiene o no componentes*/
function verificaSiTieneComponente(item){
  if (item.componentes) return true
  else {
    return false
  }  
}

/**@function: Se usa programacion funcional para validar diferentes items de un componente para saber que mostrar en el modal
   @param: Objeto
   @return: Verdadero segun si el objeto comple con las validaciones funcionales para mostrar el modal*/
function verificaDespliegueDeModal(item){
  if (verificaPlanes(item.titulo)) {
    insertaComponentes(planes['planPersonal'].componentes)
    return true
  } else {
    if (verificaSiTieneComponente(item) && item.titulo == 'Pausas Laborales') {
      insertaComponentes(item.componentes)
      insertaBeneficios(item.beneficios)
      return true
    } else if (verificaSiTieneComponente(item)) {
      insertaComponentes(item.componentes)
      return true
    } else if (item.titulo == 'Pre Natal') {
      insertaBeneficios(item.beneficios)
      return true
    } else { return true }
  } 
}

/**@function: Valida los planes para asi utilizar los componentes de otro plan ya que son los mismos
   @param: Titulo del plan
   @return: Verdadero o falso */
function verificaPlanes(titulo){
	if (titulo == 'Plan Semi Personal' || titulo == 'Plan Semi Grupal')  
		return true
	else 
		return false
}

/**@function: Hace la insercion de los componentes de un objeto en el modal
   @param: Componentes de un objeto*/
function insertaComponentes(componentes){
  $('.title-components').text('Componentes')
  for (let componente of componentes) {
    $('#lista-componentes').append(`<li style="font-weight: 300;"><i class="fa fa-circle-o-notch" aria-hidden="true" style="color: orange"></i> ${ componente }</li>`)
  }
}

/**@function: Hace la insercion de los beneficios de un objeto en el modal
   @param: Beneficios de un objeto*/
function insertaBeneficios(beneficios){
  $('.title-beneficios').text('Beneficios')
  for (let beneficio of beneficios) {
    $('#lista-beneficios').append(`<li style="font-weight: 300;"><i class="fa fa-check" aria-hidden="true" style="color: #4caf50;"></i> ${ beneficio }</li>`)
  }
}

/**@function: Cierra el modal actual*/
function cerrarModal() {
  $('#modalGeneral').modal('close');
  reseteaValores()
}

/**@function: Restablece los valores cada que se cierra el modal o se abra para inicializar nuevos valores*/
function reseteaValores(){
  $('#lista-componentes').children().remove();
  $('.title-components').text('')
  $('#lista-beneficios').children().remove();
  $('.title-beneficios').text('')
}
