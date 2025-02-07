import CL_Estudiante from "./CL_Estudiante.js";
import CL_Salon from "./CL_Salon.js";

//declaramos los objetos
let estudiante1= new CL_Estudiante("Luis",16,"M");
let estudiante2= new CL_Estudiante("Ana",19,"F");
let estudiante3= new CL_Estudiante("Jose",20,"M");
let estudiante4= new CL_Estudiante("Carmen",18,"F");
let salon= new CL_Salon();

salon.procesarEstudiante(estudiante1);
salon.procesarEstudiante(estudiante2);
salon.procesarEstudiante(estudiante3);
salon.procesarEstudiante(estudiante4);

let salida=document.getElementById("salida");
salida.innerHTML=`Resultados
<br>Edad promedio: ${salon.Promedio()}
<br>Estudiantes con mayor edad: ${salon.nombremayor()}
<br>Porcentajes de chicas mayor de edad: ${salon.Porcentaje()}`