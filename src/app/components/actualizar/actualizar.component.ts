import { Component, OnInit } from '@angular/core';
import { ComidaServices } from '../../services/comidas.services';
import { Global } from '../../services/global.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from '../../models/comida';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-actualizar',
  templateUrl: '../registrarplatillo/registrarplatillo.component.html',
  styleUrls: ['./actualizar.component.css'],
  providers: [ComidaServices]
})
export class ActualizarComponent implements OnInit {

  private _comida: Comida;
  private imagenCargada: File;
  constructor(private _comidaServices: ComidaServices, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._comida = new Comida("", "", "", "", 0, 0, "");
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      let _id = params.id;
      console.log(_id);
      this.recuperadoComida(_id);


    });

  }
  recuperadoComida(id) {
    this._comidaServices.getComida(id).subscribe((comidirri) => {
      this._comida = comidirri.comida;
    },
      (error) => {
        console.log(error);
      });
  }



  imageCargadaAlForm(event: any) {

    this.imagenCargada = event.target.files[0];
    console.log("IMAGEN CARGADA");
    console.log(this.imagenCargada);
  }

  onSubmit(comidaForm) {
    this._comidaServices.actualizarComida(this._comida).subscribe((respuesta1) => {
      console.log(respuesta1);
      if (this.imagenCargada == null) {
         alert("Platillo actualizado");
        this._router.navigate(['/comidas']);

      }
      else {
        let urlenviar = Global.url+'guardarImagen/'+respuesta1.values._id;
        let imagenCargadaF: File = this.imagenCargada;
        this._comidaServices.sendImage(urlenviar, imagenCargadaF, 'image')
          .then((magencorrecta) => {
            console.log(magencorrecta);
            alert("Platillo actualizado");
            this._router.navigate(['/comidas']);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
      (err) => {
        console.log(err)
      });
  }
}
