//10 ejercicios básicos de Javascript indicados por chatgpt
//Ejercicio 1:  Escribe un programa que imprima en la consola el mensaje "¡Hola, mundo!"

console.log("¡Hola, mundo!")

//Ejercicio 2: Escribe una función que tome dos números como argumentos y devuelva su suma.

function suma(num1, num2){
    console.log(num1 + num2)
}

//Pruebas
suma(3, 4)
suma(8, 14)

//Ejercicio 3: Escribe una función que tome un número como argumento y devuelva "par" si el número es par, y "impar" si el número es impar.

function par(num) {
    if(num % 2 == 0){
        console.log("Es par")
    } else if(num % 2 == 1) {
        console.log("No es par")
    } else {
        console.log("ingresa un numero")
    }
}

//Pruebas
par(7)
par(8)
par("hola")

//Ejercicio 4: Escribe una función que tome un array de números como argumento y devuelva la suma de todos los elementos.
function suma2(nros) {
    let sum = 0
    for(let i = 0; i < nros.length; i++ ) {
        sum += nros[i]
    }
    console.log(sum)
}

//Pruebas 
let sumadores = [3,5,6,12,9]
suma2(sumadores)
suma2([3,6,7,8,23])

//Ejercicio 5: Escribe una función que tome un string como argumento y devuelva la misma cadena pero con las letras en orden inverso.

function reverso(txt) {
    txt = txt.split("").reverse().join("")
    //txt = txt.reverse()
    //txt = txt.join("")
    console.log(txt)
}

//Pruebas 
reverso("Juan")
reverso("¡Hola Mundo!")


//Ejercicio 6: Escribe una función que tome un array de palabras como argumento y devuelva un nuevo array con todas las palabras en minúsculas.

function minus(words){
    let palabrasMinus = []
    for(let i = 0; i < words.length; i++){
        let palabraMinus = words[i].toLowerCase()
        palabrasMinus.push(palabraMinus)
    }
    console.log(palabrasMinus)
}

//Pruebas
minus(["Juan", "Pedro", "Luciano", "Marcos"])
minus(["Manos", "Tijeras", "Piedras"])

//Ejercicio 7: Escribe una función que tome un array de números como argumento y devuelva un nuevo array solo con los números pares.

function soloPares(nros){
    let nrosPares = []
    for(let i = 0; i < nros.length; i++){
        if(nros[i] % 2 == 0){
            nrosPares.push(nros[i])
        } 
    }
    console.log(nrosPares)
}

//Pruebas
soloPares([1,2,3,4,5,6,7,8])
soloPares([54,24,654,333])

//Ejercicio 8: Escribe una función que tome un número como argumento y devuelva true si es primo, y false si no lo es.

function primo(num) {
    if(num <= 1){
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

//Pruebas 
console.log(primo(3))
console.log(primo(12))
console.log(primo(17))

//Ejercicio 9: Escribe una función que tome un array de strings como argumento y devuelva el número total de caracteres de todos los elementos del array.

function sumaCaracteres(ar){
    let totalCar = 0
    let palabras = ""
    for (let i = 0; i < ar.length; i++){
        let palabra = ar[i]
        palabras += palabra
    }
    totalCar = palabras.length
    console.log(totalCar)
}

//Pruebas
sumaCaracteres(["Holaaa", "piedra", "papel"])

//Ejercicio 10: Escribe una función que tome un array de objetos y devuelva un nuevo array con solo aquellos objetos que tengan una propiedad "edad" mayor o igual a 18.

function mayorEdad(personas) {
    let genteMayor = []
    for(let i = 0; i < personas.length; i++) {
        if(personas[i].edad >= 18){
            genteMayor.push(personas[i])
        }
        console.log(genteMayor)
    }
}

//Pruebas 
let gente = [
    {nombre: "Martin", edad: 28},
    {nombre: "Jose", edad: 24},
    {nombre: "Santino", edad: 17},
    {nombre: "Luciano", edad: 18}
]

mayorEdad(gente)
