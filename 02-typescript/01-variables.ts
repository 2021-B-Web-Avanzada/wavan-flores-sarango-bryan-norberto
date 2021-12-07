//01-variables.ts

let nombre: string = "Bryan"; //A la primitiva
let nombre2: String = "Bryan2" // Referencia a la clase STRING
//nombre=1; //Ahora ya no deja asignarle números a una variable tipo string
nombre="Norberto";

let edad: number =23;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo=12.4;

//Duck typing
let apellido = 'Flores';//Si parece como un pato, si vuela como pato, es un pato
apellido="Adrian";//igual a otros string
apellido.toUpperCase();//metodos string

//Utiliza lo mejor de dos mundos, java y javascript
let marihuana: any = 2;
marihuana='2';
marihuana=true;
marihuana=()=>'2'

//Nos permite poner varoles del tipo declarado
let edadMultiple: number|string|Date =2;
edadMultiple='2';
edadMultiple=2222;
edadMultiple='dos'
edadMultiple=new Date();
//edadMultiple=true;


