const super1={nombre:"Batman"}
const super2={nombre:"Mujer Maravilla"}
const super3={nombre:"Ironman"}
let super4={nombre:"Hulk"}
const super5={nombre:"Loki"}

function printName (obj){
    return `el nombre del superheroe es ${obj.nombre}`

}

console.log(printName(super1))
console.log(printName(super2))
console.log(super1.nombre)


/*mutar*/
super5.edad = 33;
super5.ciudad = "Asgard"

console.log (super5)

/* super4={nombre: "SheHulk  "} => no se puede reasignar porque la variable está en const*/
super4={nombre: "Shehulk"}

console.log (super4)


function printAll (array){
    // por cada elemento del array 
    for (let each of array){
        // ejecuta estas sentencias
        //each es cada objeto del array de super heroes
        //const template = printName (each)
        //definir el template a imprimir en cosola
        //console.log (template);
        console.log(printName(each))
    }     
}

const array1 = [super1, super2]

printAll(array1)

//otra alternativa declarando el array dentro del argumento de la función

printAll([super3, super4, super5])
printAll([])