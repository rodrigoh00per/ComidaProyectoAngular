
//es importante para poder pasarlo al app module
import { ModuleWithProviders } from '@angular/core';
//importamos el modulo de las rutas 
import { Routes, RouterModule } from '@angular/router';


//importamos nuestras respectivos componentes 

import { ComidasComponent } from './components/comidas/comidas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarplatilloComponent } from './components/registrarplatillo/registrarplatillo.component';
import { DetallecomidaComponent } from './components/detallecomida/detallecomida.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';


//VAMOS A CREAR NUESTRO OBJETO CON NUESTRAS RUTAS 
const rutas: Routes = [
    { path: '', component: InicioComponent },
    { path: 'comidas', component: ComidasComponent },
    { path: 'registrarplatillo', component: RegistrarplatilloComponent },
    { path: 'detallePlatillo/:id', component: DetallecomidaComponent },
    { path: 'actualizarPlatillo/:id', component: ActualizarComponent }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);