import { Routes,RouterModule } from "@angular/router";

import {CrearComponent} from '../app/componets/crear/crear.component';
import {ListarComponent} from '../app/componets/listar/listar.component';
import {ActualizarComponent} from '../app/componets/actualizar/actualizar.component';

const appRoutes: Routes =[
    {path:'',component:CrearComponent},
    {path: 'crear', component:CrearComponent},
    {path:'listar',component:ListarComponent},
    {path:'actualizar',component:ActualizarComponent}
]

export const routing = RouterModule.forRoot(appRoutes)