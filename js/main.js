
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
const outsourcingText = '';


function showModalPlans(element){

      let idElement = element.id;
      if(idElement == 'planPersonal'){
         displayModal(idElement, planPersonal, planPersonalImage, planPersonalText);
      }else if(idElement == 'planSemiPersonal'){
         displayModal(idElement, planSemiPersonal, planSemiPersonalImage, planSemiPersonalText);
      }else if(idElement == 'planSemiGrupal'){
         displayModal(idElement, planSemiGrupal, planSemiGrupalImage, planSemiGrupalText);
      }else if(idElement == 'pausasLaborales'){
         displayModal(idElement, pausasLaborales, pausasLaboralesImage, pausasLaboralesText);
      }else if(idElement == 'nutricionYDietetica'){
         displayModal(idElement, nutricionYDietetica, nutricionYDieteticaImage, nutricionYDieteticaText);
      }else if(idElement == 'analisisMedicos'){
         displayModal(idElement, analisisMedicos, analisisMedicosImage, analisisMedicosText);
      }else if(idElement == 'terapiasFlorales'){
         displayModal(idElement, terapiasFlorales, terapiasFloralesImage, terapiasFloralesText);
      }else{
         displayModal(idElement, outsourcing, outsourcingImage, outsourcingText);
      }
}



function displayModal(id, plan, image, text){
   let newId = id + 'Comp';
   $('#mainModal .modal-content').attr("id", newId);
   $('#mainModal .modal-header #tlModal').text(plan);
   $('#mainModal .modal-body #image-modal').html("<a class='team-image'><img class='img-rounded' src='"+image+"' width='250' height=''<30></30>0'/></a>");
   $('#mainModal .modal-body #content-modal').html(`<p>${text}</p>`);
   //populatePre('Holamama.txt');

   $('#btnMainModal').click();
}

function showModalComponents(element){

   let idParent = $(element).parent().parent().attr('id');
   console.log(idParent);
   if(idParent == 'planPersonalComp'){
      displayModalComponent();
   }else if(idParent == 'planSemiPersonalComp'){
      displayModalComponent();
   }else if(idParent == 'planSemiGrupalComp'){
      displayModalComponent();
   }else if(idParent == 'pausasLaboralesComp'){
      displayModalComponent();
   }else if(idParent == 'nutricionYDieteticaComp'){
      displayModalComponent();
   }else if(idParent == 'analisisMedicosComp'){
      displayModalComponent();
   }else if(idParent == 'terapiasFloralesComp'){
      displayModalComponent();
   }else{
      displayModalComponent();
   }
}

function displayModalComponent(){

   document.getElementById('content-components').innerHTML = "<ul><li>☻Creación de ficha clínica deportiva. ( Anamnesis )</li><li>Toma de mediciones corporales. ( Antropometría )</li><li>Registro fotográfico para estudio comparativo.</li></ul>";


      // $('.bs-modal-medium .modal-body #content-components').html(`
      //    <ol>
      //       <li>☻Creación de ficha clínica deportiva. ( Anamnesis )</li>
      //       <li>Toma de mediciones corporales. ( Antropometría )</li>
      //       <li>Registro fotográfico para estudio comparativo.</li>
      //       <li>Valoración postural para identificación de patologías.</li>
      //       <li>Programa de adaptación para todo tipo de población.</li>
      //       <li>Plan de entrenamiento individualizado según objetivos.</li>
      //       <li>Programa de orientación nutricional y tips generales.</li>
      //       <li>Toma de cargas maximales. ( Casos específicos )</li>
      //       <li>Entrenador Personal TITULADO con amplia experiencia.</li>
      //       <li>Firma de contrato de servicios para garantía del usuario.</li>
      //       <li>Servicio a domicilio en casa, oficina, parque o GYM del conjunto.</li>
      //       <li>Entrega de resultados en PDF vía E Mail al usuario.</li>
      //    </ol>
      //    `);

   $('#componentModal').click();
   $('#mainModal').css("display", "none");
   $('#mainModal').attr("aria-hideen", "true");
   $('#mainModal').removeClass('in');


}

function showModalMain(){
   $('#mainModal').css("display", "block");
   $('#mainModal').attr("aria-hideen", "false");
   $('#mainModal').addClass('in');
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
