import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//nos sirve para poder sacar parametros de la url
import { Router } from '@angular/router';
import { ComidaServices } from '../../services/comidas.services';
import { Comida } from 'src/app/models/comida';
import { Global } from '../../services/global.services';
@Component({
  selector: 'app-detallecomida',
  templateUrl: './detallecomida.component.html',
  styleUrls: ['./detallecomida.component.css'],
  providers: [ComidaServices]
})
export class DetallecomidaComponent implements OnInit {
  private _comida: Comida;
  private url: string;
  private banderaeliminar: boolean;


  constructor(private _activatedRoute: ActivatedRoute,
    private _comidasServices: ComidaServices, private _router: Router

  ) { this.url = Global.url; }

  ngOnInit() {
    this.banderaeliminar = false;
    this._activatedRoute.params.subscribe((params) => {
      let _id = params.id;

      this._comidasServices.getComida(_id).subscribe((comida) => {

        this._comida = comida.comida;


      }, (err) => {
        console.log(err);
      });
    });
  }

  public iraConfirmarEliminar(change) {
    this.banderaeliminar = change;
  }
  public eliminarComida(identi) {
    this._comidasServices.eliminarComida(identi).subscribe((confirmacion) => {
      alert("Comida eliminada de manera correcta");
      this._router.navigate(['/comidas']);
    }, (err) => {
      console.log("ERROR");
      console.log(err);
    });


  }

}
