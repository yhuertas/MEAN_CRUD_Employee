import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../service/employee.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public employee: Employee
  public listaEmpleados = []
  public resultadoOperaciones: string;
  constructor(public employeeService: EmployeeService) {
    this.employee = new Employee('', '', '', 0,'')
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.employeeService.mostrarEmployee().subscribe((res) => {
      //if (res.statusCode == 200){
      console.log(res)
      console.log('Empleados recuperados')
      this.listaEmpleados = res;
      //}else{
      // console.log("Error al consultar los empleados")
      // }
    },
      (error) => {
        var mensaje = error;
        if (mensaje !== null) {
          console.log("Error consultando los empleados. " + mensaje)
        }
      })
  }

  guardarEmpleado(empleado) {
    const empleadoString = JSON.stringify(empleado);
    console.log(empleadoString)
    localStorage.setItem("empleado", empleadoString);
  }


  eliminar(id) {
    if (confirm("Estas seguro de eliminar este empleado ? ")) {
      this.employeeService.eliminarEmpleado(id).subscribe((res) => {
        this.resultadoOperaciones = "Empleado eliminado";
        this.listar()
      },
        (error) => {
          var mensaje = error
          if (mensaje !== null) {
            console.log("Error al eliminar el usuario. " + mensaje)
          }
        }
      )
    }
  }


  crearEmp(formulario: NgForm) {
    if (!formulario.value._id) {
      this.employeeService.registrarEmployee(formulario.value).subscribe(
        (res: any) => {
          this.resultadoOperaciones = "Empleado guardado exitosamente";
          this.cleanForm(formulario);
          this.listar()
        },
        (error) => {
          this.resultadoOperaciones = error;
        }
      )} else {
        this.actualziarEmp(formulario.value._id,formulario.value)
     this.cleanForm(formulario);
     this.listar();
    }
  }

  edit(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  //Actualizar empleado
  actualziarEmp(id:string, employee: Employee)  {
    console.log(id)
    this.employeeService.modificarEmployee(id, employee).subscribe((res) => {
      this.resultadoOperaciones = "Empleado actualizado exitosamente";
      
    },
      (error) => {
        this.resultadoOperaciones = "Error al actualizar el usuairo. " + error;
      })
      return;
  }

  cleanForm(formulario: NgForm) {
    formulario.reset();

  }

}
