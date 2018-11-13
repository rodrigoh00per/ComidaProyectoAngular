export class Comida {

    constructor(
        public _id: string,
        public nombre_platillo: string,
        public descripcion: string,
        public tipo_platillo: String,
        public tiempo_prep: Number,
        public costo_aprox: Number,
        public image: String

    ) {

    }
}