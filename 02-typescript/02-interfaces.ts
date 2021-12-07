//02-interfaces

//Tipo de dato
//Simbolo de pregunta es porque puede ser el mismo tipo, o undefined
interface Usuario{
    nombre:string;
    apellido: string;
    edad?: number;
    sueldo?:number;
    casado: boolean |0|1;
    estado: 'AC'|'IN'|'BN' ;
    imprimirUsuario: (mensaje:string)=>string | 'BN';
    calcularImpuesto: (impuesto: number)=>number;
    estadoActual: () =>'AP'|'AF'|'AT';
    //calcularImpuesto paramtro numero impuesto, sueldo * sueldo * impuesto
    //estadoAxctual no reciba parametros 'AP' 'AF' 'AT'
}

let user: Usuario={
    nombre:'Bryan',
    apellido:'Flores',
    casado:0,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario:(mensaje:string) =>{
        return 'El mensaje es: '+mensaje;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo*this.sueldo*impuesto;
    },

    estadoActual: ()=>{
        switch (this.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case  'BN':
                return 'AT';
        }
    }
}