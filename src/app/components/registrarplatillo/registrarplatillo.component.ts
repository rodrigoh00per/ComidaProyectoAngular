import { Component, OnInit } from "@angular/core";
import { Comida } from "../../models/comida";
import { ComidaServices } from "../../services/comidas.services";
import { Global } from "../../services/global.services";

@Component({
  selector: "app-registrarplatillo",
  templateUrl: "./registrarplatillo.component.html",
  styleUrls: ["./registrarplatillo.component.css"],
  providers: [ComidaServices]
})
export class RegistrarplatilloComponent implements OnInit {
  private _comida: Comida;
  private banderacreate: boolean;
  private imagenCargada: File;
  private id_detalle: String;
  constructor(private _comidasServices: ComidaServices) {
    this._comida = new Comida("", "", "", "", 0, 0, "");
    this.banderacreate = false;
  }

  ngOnInit() {}

  onSubmit(form) {
    console.log(this._comida);
    this._comidasServices.setPlatillo(this._comida).subscribe(
      res => {
        console.log("RESPUESTA RESPONSE");
        console.log(res);
        let _id = res.message._id;
        if (_id == null) {
          this.banderacreate = false;
        } else {
          this.banderacreate = true;
          this.id_detalle = _id;
        }

        //aqui vamos a enviar
        //1.- url con id
        //2.- el archivo
        //3.- el nombre del archivo como se lo mandaras
        let urlenv = Global.url + "guardarImagen/" + _id;
        this._comidasServices
          .sendImage(urlenv, this.imagenCargada, "image")
          .then((resp: any) => {
            console.log("respuesta final");
            console.log(resp);
          })
          .catch(function(err) {
            console.log("respuesta final error");
            console.log(err);
          });
      },
      error => {
        console.log(error);
      }
    );
  }
  imageCargadaAlForm(event: any) {
    this.imagenCargada = event.target.files[0];
    console.log("IMAGEN CARGADA");
    console.log(this.imagenCargada);
  }
}
