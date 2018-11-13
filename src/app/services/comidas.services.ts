//los observables se sacan de rxjs 
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';//PARA QUE PODAMOS INYECTAR NUESTRA DEPENDENCIA
import { Global } from './global.services';
import { Comida } from '../models/comida';

@Injectable()
export class ComidaServices {
    private url: String;

    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }


    public getTodaslasComidas(): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(this.url + "getComidas", { headers: headers });

    }
    public setPlatillo(_comida: Comida): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url + 'registrarComida', _comida, { headers: headers });
    }
    public sendImage(url_llegada: string, archivo: File, nombrereq: string) {

        return new Promise(function (resolve, reject) {
            var formdatos: any = new FormData();
            console.log("ARCHIVO RECIBIDO SERVICIO");
            console.log(archivo);

            formdatos.append(nombrereq, archivo, archivo.name);

            var http = new XMLHttpRequest();
            http.onreadystatechange = function () {
                if (http.readyState == 4) {
                    if (http.status == 200) {
                        resolve(JSON.parse(http.response));
                    }
                    else {
                        reject(http.status);
                    }
                }



            }
            http.open("POST", url_llegada, true);
            console.log(formdatos);
            http.send(formdatos);


        });

    }
    public getComida(id: String): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(this.url + "getComida/" + id, { headers: headers });
    }
    public eliminarComida(id: String): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.delete(this.url + "eliminarComida/" + id, { headers: headers });
    }
    public actualizarComida(_comida: Comida): Observable<any> {
        let id = _comida._id;
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(this.url + "actualizarComida/" + id, _comida, { headers: headers });

    }
}