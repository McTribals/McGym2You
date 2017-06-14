let app = new Vue({
   el: '#app',
   data:{
      mostrarBoton: false,
      mostrarComponentes: false,
      mostrarPaquetes: false
   },
   methods: {
      mostrar(){
         this.mostrarBoton = true;
         this.mostrarPaquetes = false;
      },
      esconder(){
         this.mostrarBoton = false;
         this.mostrarPaquetes = false;
      },
      mostrarCompo(){
         this.mostrarComponentes = true;
         this.mostrarPaquetes = false;
      },
      mostrarPaque(){
         this.mostrarPaquetes = true;
         this.mostrarBoton = false;
         this.mostrarComponentes = false;
      },
      remover(){
         this.mostrarPaquetes = false;
         this.mostrarBoton = false;
         this.mostrarComponentes = false;
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
const planPersonalText = 'Este plan de entrenamiento esta dirigido a tres ó cuatro personas máximo; se compone de una sesión de 55 minutos de actividad física dirigida por un entrenador titulado y aptamente capacitado, en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento.';
const planSemiPersonalText = 'Este plan de entrenamiento esta dirigido a tres ó cuatro personas máximo; se compone de una sesión de 55 minutos de actividad física, en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento.';
const planSemiGrupalText = 'Este plan de entrenamiento esta dirigido a tres ó cuatro personas máximo; se compone de una sesión de 55 minutos de actividad física, en la cual se realiza una fase de calentamiento, activación articular, ejecución y estiramiento, con el fin de evitar lesiones ó molestias posteriores al entrenamiento. ';
const pausasLaboralesText = 'Este es un servicio destinado a empresas e instituciones publicas o privadas que requieran llevar a cabo pausas activas o laborales, durante la ejecución de sus actividades diarias, según lo establecido por la ley Colombiana en el articulo XXX del 2016 y que deja por sentado que toda empresa conformada por mas de 5 empleados debe contar con un programa de ';
const nutricionYDieteticaText = `Día tras día se hace mas notable la gran importancia de una dieta alimenticia sana y saludable que permita alcanzar rápidamente los objetivos propuestos de la mano del ejercicio y los buenos hábitos diarios, puesto que se hace imprescindible la implementación de un plan nutricional personalizado que permita direccionar de manera adecuada las necesidades y objetivos de cada usuario.`;
const analisisMedicosText = `Mediante nuestro convenio institucional con la reconocida compañía IDIME S.A, ofrecemos a nuestros clientes y publico en general el servicio de análisis médico, laboratorio, radiografías y exámenes especializados.

Nuestro objetivo es utilizar todos los medios científicos existentes para garantizar un resultado eficaz y seguro en nuestros clientes, ya que consideramos vital el uso de la ciencia en procesos de nutrición, fisiología y análisis para asegurar el cumplimiento de los objetivos solicitados.`;
const terapiasFloralesText =`Desde hace algunos años, múltiples estudios científicos han evidenciado los grandes beneficios obtenidos en el ser humano a través de las esencias florales y sus terapias, incrementado notablemente la salud y el desempeño físico en el deportista junto con un balance optimo en la parte emocional y psicológica lo cual influye en el buen desempeño del mismo y en su armoniosa interacción con el medio social.`;
const outsourcingText = 'Necesitas organizar un evento deportivo, administrar ungimnasio ó zona deportiva, no cuentas con el personal requerido o calificado paradichas actividades, nosotros te proporcionamos personal altamente calificado bajo la modalidad de outsourcing para satisfacer las necesidades requeridas por nuestros usuarios.';

/*Components*/
const componentePlanes = `- Creación de ficha clínica deportiva. ( Anamnesis ) <br/>
                           -	Toma de mediciones corporales. ( Antropometría )<br/>
                           -	Registro fotográfico para estudio comparativo.<br/>
                           -	Valoración postural para identificación de patologías.<br/>
                           -	Programa de adaptación para todo tipo de población.<br/>
                           -	Plan de entrenamiento individualizado según objetivos.<br/>
                           -	Programa de orientación nutricional y tips generales.<br/>
                           -	Toma de cargas maximales. ( Casos específicos )<br/>
                           -	Entrenador Personal TITULADO con amplia experiencia.<br/>
                           -	Firma de contrato de servicios para garantía del usuario.<br/>
                           -	Servicio a domicilio en casa, oficina, parque o GYM del conjunto.`;
const componenteLaboral = `-	Presentación y proceso motivacional. <br/>
                           -	Calentamiento general. <br/>
                           -	Calentamiento especifico. <br/>
                           -	Activación articular. <br/>
                           -	Ejecución de ejercicios específicos. <br/>
                           -	Actividad de integración laboral.`;
const beneficioLaboral = ` -	Reducción del estrés en los trabajadores. <br/>
                           -	Mejora el desempeño a nivel laboral. <br/>
                           -	Disminución de riesgo de enfermedades profesionales. <br/>
                           -	Motiva y mejora las relaciones interpersonales. <br/>
                           -	Incita al trabajo en equipo a través de actividades lúdicas. <br/>
                           -	Promueve las buenas posturas corporales. <br/>
                           -	Favorece la autoestima y aumenta la concentración.`;
const paquetesNutricion = `-	Nutrición Estándar <br/>
                           -	Nutrición Optima <br/>
                           -	Nutrición Premium <br/>
                           -	VIP Smart Pack`;
/*/PLANES*/

let mostrarBotonBeneficio = false;


function showModalPlans(element){
   console.log('Entro en metodo ' + element);
      let idElement = element.id;
      if(idElement == 'planPersonal'){
         app.mostrarCompo();
         app.esconder();
         displayModal(idElement, planPersonal, planPersonalImage, planPersonalText);
      }else if(idElement == 'planSemiPersonal'){
         app.mostrarCompo();
         app.esconder();
         displayModal(idElement, planSemiPersonal, planSemiPersonalImage, planSemiPersonalText);
      }else if(idElement == 'planSemiGrupal'){
         app.mostrarCompo();
         app.esconder();
         displayModal(idElement, planSemiGrupal, planSemiGrupalImage, planSemiGrupalText);
      }else if(idElement == 'pausasLaborales'){
         app.mostrarCompo();
         app.mostrar();
         displayModal(idElement, pausasLaborales, pausasLaboralesImage, pausasLaboralesText);
      }else if(idElement == 'nutricionYDietetica'){
         app.mostrarPaque();
         displayModal(idElement, nutricionYDietetica, nutricionYDieteticaImage, nutricionYDieteticaText);
      }else if(idElement == 'analisisMedicos'){
         app.remover();
         displayModal(idElement, analisisMedicos, analisisMedicosImage, analisisMedicosText);
      }else if(idElement == 'terapiasFlorales'){
         app.remover();
         displayModal(idElement, terapiasFlorales, terapiasFloralesImage, terapiasFloralesText);
      }else{
         app.remover();
         displayModal(idElement, outsourcing, outsourcingImage, outsourcingText);
      }
}



function displayModal(id, plan, image, text){
   let newId = id + 'Comp';
   $('#mainModal .modal-content').attr("id", newId);
   $('#mainModal .modal-header #tlModal').text(plan);
   $('#mainModal .modal-body #image-modal').html("<a class='team-image'><img class='img-rounded' src='"+image+"' width='100%' height='200px'/></a>");
   $('#mainModal .modal-body #content-modal').html(`<p>${text}</p>`);

   console.log('CAMBIO A ' + mostrarBotonBeneficio);
   //populatePre('Holamama.txt');

   $('#btnMainModal').click();
}

function showModalComponents(element){
   console.log('Entro en metodo ' + element);
   let idParent = $(element).parent().parent().attr('id');
   let id = element.id;
   console.log(id);
   console.log(idParent);
   if(idParent == 'planPersonalComp'){
      displayModalComponent(componentes,componentePlanes);
   }else if(idParent == 'planSemiPersonalComp'){
      displayModalComponent(componentes,componentePlanes);
   }else if(idParent == 'planSemiGrupalComp'){
      displayModalComponent(componentes,componentePlanes);
   }else if(idParent == 'pausasLaboralesComp'){
      displayModalComponent(componentes, componenteLaboral, beneficios, beneficioLaboral, id);
   }else if(idParent == 'nutricionYDieteticaComp'){
      displayModalComponent(paquetes, paquetesNutricion);
   }else if(idParent == 'analisisMedicosComp'){
      displayModalComponent();
   }else if(idParent == 'terapiasFloralesComp'){
      displayModalComponent();
   }else{
      displayModalComponent();
   }
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

console.log('ANTES DE ENTRAR ' + mostrarBotonBeneficio);




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
