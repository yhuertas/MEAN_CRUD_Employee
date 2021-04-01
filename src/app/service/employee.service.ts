import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL= 'http://localhost:3000/api/employees/'
  selectedEmployee:Employee={name:"",position:"",office:"",salary:0};

  constructor(
    private _http: HttpClient
  ) { }


  //Registrar Empleado
  registrarEmployee(employeeParams):Observable<any>{
    let params = JSON.stringify(employeeParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL, params, {headers:options}).pipe((res)=>res)
  }

    //listar Empleados
    mostrarEmployee():Observable<any>{
      //let params = JSON.stringify(role);
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.get(this.apiURL, options).pipe((res)=>res)
    }
    //Modificar Empleados
    modificarEmployee(id:string,empleadoUp:Employee):Observable<any>{
      let params = JSON.stringify(empleadoUp);
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.put(this.apiURL+id,params,options).pipe((res)=>res)
    }

    //eliminar Empleado
    eliminarEmpleado(id):Observable<any>{
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.delete(this.apiURL+id,options).pipe((res)=>res)
    }

}
