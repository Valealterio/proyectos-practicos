//Ejercicios de Javascript indicados por Chatgpt para practicar POO 
//Ejercicio básico de clases: Crea una clase Persona con propiedades como nombre, edad y profesión. Luego, crea objetos de tipo Persona y muestra su información en la consola.

class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
}
const Pedro = new Persona ("Pedro", 20, "Programador")
const Mauricio = new Persona ("Mauricio", 30, "Herrero")

console.log(Pedro.nombre)
console.log(Mauricio.edad)

//Ejercicio de herencia: Crea una clase base llamada Vehiculo con propiedades como marca, modelo y año. Luego, crea una clase derivada llamada Automovil que herede de Vehiculo y agregue propiedades adicionales, como número de puertas. Crea objetos de ambas clases y muestra su información en la consola.

class Vehiculo {
    constructor(marca, modelo, año){
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }
}

class Automovil extends Vehiculo {
    constructor(marca, modelo, año, nro_puertas){
        super(marca, modelo, año)
        this.nro_puertas = nro_puertas
    }
}

const Fitito = new Vehiculo ("Fiat", "600", 1980)
const Trend = new Automovil ("Volskwagen", "Gol Trend", 2015, 5)

console.log(Fitito)
console.log(Trend.nro_puertas)

//Ejercicio de encapsulamiento: Crea una clase CuentaBancaria con propiedades como saldo y métodos para depositar y retirar dinero. Implementa validaciones para evitar que el saldo se vuelva negativo. Realiza pruebas de depósito y retiro en objetos de tipo CuentaBancaria.

class CuentaBancaria {
    constructor(saldo){
        this.saldo = saldo
    }
    retirar(monto){
        if(this.saldo >= monto){
            this.saldo -= monto  
        } else {
            console.log("Saldo insuficiente")
        }
    }
    depositar(monto){
        this.saldo += monto
    }
}

const cuenta1 = new CuentaBancaria(1000)
cuenta1.depositar(13)
cuenta1.retirar(500)
console.log(cuenta1.saldo)
cuenta1.retirar(1000)

//Ejercicio de polimorfismo: Crea una clase base llamada Animal con un método hacerSonido(). Luego, crea clases derivadas como Perro, Gato y Vaca, que sobrescriban el método hacerSonido() con sonidos específicos para cada animal. Crea objetos de las clases derivadas y llama al método hacerSonido() para verificar el polimorfismo.

class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    hacerSonido(){
        console.log("Sonido animal")
    }
}

class Perro extends Animal {
    constructor(nombre){
        super(nombre)
    }
    hacerSonido(){
        console.log("Guau Guau")
    }
}
class Gato extends Animal {
    constructor(nombre){
        super(nombre)
    }
    hacerSonido(){
        console.log("Miau Miau")
    }
}
class Vaca extends Animal {
    constructor(nombre){
        super(nombre)
    }
    hacerSonido(){
        console.log("Muuu")
    }    
}

const Tolo = new Perro("Tolo")
const Garfield = new  Gato("Garfield")
const Lola = new Vaca("Lola")

Tolo.hacerSonido()
Garfield.hacerSonido()
Lola.hacerSonido()

//Ejercicio de composición: Crea una clase Libro con propiedades como título, autor y género. Luego, crea una clase Biblioteca que contenga una colección de objetos de tipo Libro. Implementa métodos para agregar libros a la biblioteca, buscar libros por autor y mostrar todos los libros en la consola.

class Libro {
    constructor(titulo, autor, genero){
        this.titulo = titulo
        this.autor = autor
        this.genero = genero 
    }

}

class Biblioteca {
    constructor(nombre){
        this.nombre = nombre 
        this.coleccion = []
    }
    agregarLibro(libro){
        this.coleccion.push(libro)
    }
    buscarLibro(autor){
        for(let i = 0; i < this.coleccion.length; i++){
            if(this.coleccion[i].autor == autor){
                console.log(this.coleccion[i])
            } 
        }
    }
    mostrarLibros(){
        for(let i = 0; i < this.coleccion.length; i++){
            console.log(this.coleccion[i])
        }
    }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico")
const libro2 = new Libro("1984", "George Orwell", "Ciencia ficción")
const libro3 = new Libro("Orgullo y prejuicio", "Jane Austen", "Novela romántica")
const libro4 = new Libro("El señor de los anillos", "J.R.R. Tolkien", "Fantasía épica")

const biblioteca1 = new Biblioteca ("Libros gratis")
biblioteca1.agregarLibro(libro1)
biblioteca1.agregarLibro(libro2)
biblioteca1.agregarLibro(libro3)
biblioteca1.agregarLibro(libro4)
biblioteca1.buscarLibro("Jane Austen")
biblioteca1.mostrarLibros()