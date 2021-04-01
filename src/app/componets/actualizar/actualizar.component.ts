import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../service/employee.service'
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  public employee:Employee;
  public emplStorage:any;


  constructor(private employeeService:EmployeeService) { 
    this.employee=new Employee('','','',0);
  }

  ngOnInit(): void {
    this.llenarFormulario()
  }

  //Llenar formulario con datos de un empleado
  llenarFormulario(){
    this.emplStorage=JSON.parse(localStorage.getItem("empleado"))
  }

  //Actualizar empleado
  actualziar(){
    this.employeeService.modificarEmployee(this.emplStorage._id,this.emplStorage).subscribe((res)=>{
      alert("Empleado actualizado exitosamente")
    },
    (error)=>{
      var mensaje= error;
      if( mensaje !== null){
        console.log("Error al actualizar el usuairo. " + mensaje)
      }
    })

  }



}
