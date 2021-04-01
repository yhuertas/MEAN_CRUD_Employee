import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee'
import { EmployeeService } from '../../service/employee.service'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  public employee: Employee;


   constructor(private employeeService: EmployeeService ) { 
     this.employee=new Employee('','','',0)
   }

  ngOnInit(): void {
  }


  crear(){
    this.employeeService.registrarEmployee(this.employee).subscribe(
      (res:any)=>{
        if(res.statusCode == 200){
          alert(res.statusCode+" No se pudo registrar el Empleado");
        }else{
          alert(res.statusCode+" Empleado guardado exitosamente");
        }

      },
      (error)=>{
        var messageError = <any>error;
        if(messageError != null){
          console.log(error)
        }
      }
    )
  }

}
