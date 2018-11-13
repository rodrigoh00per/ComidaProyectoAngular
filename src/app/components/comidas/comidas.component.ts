import { Component, OnInit } from '@angular/core';
import { ComidaServices } from '../../services/comidas.services';
import { Comida } from '../../models/comida';
import { Global } from '../../services/global.services';
@Component({
    selector: 'app-comidas',
    templateUrl: './comidas.component.html',
    styleUrls: ['./comidas.component.css']
    , providers: [ComidaServices]
})
export class ComidasComponent implements OnInit {
    private comidas: Comida[];
    private url: String;
    constructor(private _comidaService: ComidaServices) { }

    ngOnInit() {
        this.getTodasComidasFin();
        this.url = Global.url;
    }


    public getTodasComidasFin() {
        this._comidaService.getTodaslasComidas().subscribe((res) => {
            this.comidas = res.datos;
            console.log(this.comidas);
        }, (err) => {
            console.log(err);
        });
    }
}
