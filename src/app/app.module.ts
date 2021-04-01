import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { CrearComponent } from './componets/crear/crear.component';
import { ListarComponent } from './componets/listar/listar.component';
import { ActualizarComponent } from './componets/actualizar/actualizar.component'

@NgModule({
  declarations: [    AppComponent,    HomeComponent,    CrearComponent,    ListarComponent, ActualizarComponent  ],
  imports: [ BrowserModule,routing,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
