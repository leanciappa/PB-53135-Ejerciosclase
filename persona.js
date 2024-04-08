//las clases se declaran con la palabra reservada "class"
//se declaran con PascalCase
//se declaran en singular
//se declara representativa del recurso y en inglés

class Persona{
    //propiedad de la clase
    //existen propiedades y métodos estáticos
    static cantidadDePersonas = 0
    //el contructor suele recibir un objeto de datos
    constructor (nombre, edad, ciudad, vida){
        this.nombre = nombre,
        this.edad = edad,
        this.ciudad = ciudad,
        this.vida = vida || 100 //el operador "or" // sirve para asingar valores por defecto
        //this hacer refencia a ESTA instancia que se está construyendo
        Persona.cantidadDePersonas++

    }
    comer(cantidad){
        if ((this.vida + cantidad) < 150) {
        this.vida = this.vida+cantidad
        } else {
            return console.log("no puede comer mas") 
        }
        
    }
    entrenar(cantidad){
        if (this.vida > 50 && cantidad < this.vida) {
            this.vida = this.vida-cantidad
            } else {
                return console.log("no puede hacer más ejercicios")
            }
                    
    }
    mudarse(ciudad){
        this.ciudad = ciudad;
        this.vida = vida - 20 
    }

}


const persona1 = new Persona ("lean", 34, "lanús", 100)
const persona2 = new Persona ("roberto", 26, "avellaneda", 100)
const persona3 = new Persona ("Luis", 40, "lomasdezamora", 100)
const persona4 = new Persona ("orlando", 50, "matanza", 100)

console.log(persona1)
console.log(persona2)
console.log(Persona.cantidadDePersonas)


persona1.comer(150)
persona2.comer(100)

console.log(persona1)
console.log(persona2)

persona1.comer(200)


