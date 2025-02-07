export default class{
    constructor(){
        this.acedad=0;
        this.cntestudiantes=0;
        this.nombre="";
        this.cntchicasmayor=0;
        this.cntchicas=0;
        this.mayoredad=0;
    }

    procesarEstudiante(estudiante){
        //acumulamos la edad
        this.acedad+=estudiante.edad;
    //inicializamos el contador de los estudiantes
         this.cntestudiantes++;
        //buscamos al mayor
    if(estudiante.edad>this.mayoredad){
        this.mayoredad=estudiante.edad;
        this.nombre=estudiante.nombre;
        }
    //determinamos las chicas mayores de edad
    if(estudiante.sexo=="F")
        this.cntchicas++;
    if(estudiante.sexo=="F" && estudiante.edad>=18)
     this.cntchicasmayor++;}
    

    Promedio(){
        return this.acedad/this.cntestudiantes;
    }

    nombremayor(){
        return this.nombre;
    }

    Porcentaje(){
        return (this.cntchicasmayor*100)/this.cntchicas;
    }

}   
       
                             
   