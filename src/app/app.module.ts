import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ComidasComponent } from './components/comidas/comidas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarplatilloComponent } from './components/registrarplatillo/registrarplatillo.component';
import { DetallecomidaComponent } from './components/detallecomida/detallecomida.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    ComidasComponent,
    InicioComponent,
    RegistrarplatilloComponent,
    DetallecomidaComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule
    , routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
