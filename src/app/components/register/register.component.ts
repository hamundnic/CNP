import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Register } from './register.inteface';
import { MainServicesService } from '../../services/main-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: Register={
  firstName: 'Mi Nombre',
  lastName: 'Mi Pellidos',
  email: 'Mi email',
  password: 'mi Password',
  repeatPassword: 'repite mi password',
  address: 'Mi Direccion de Domicilio',
  city: 'mi Ciudad',
  telephone: 8091234567,
  userType: '',
  timeWork: '',
  schoolName: '',
  grade: '',
  roomLetter: '',
  agree: false
};
  constructor(public mainService: MainServicesService) { }

  ngOnInit(): void {
    this.mainService.getState().subscribe(paises=>{
      console.log(paises);
    });
  }
save( forma: NgForm){

  if(forma.invalid){

    Object.values(forma.controls).forEach(control=>{
      control.markAllAsTouched();
    });
    return ;
  }
    else{
  console.log(forma);
  console.log(forma.value);
    }

}

showInput(){

  let text1 = document.getElementById('#text1');

  return text1;

}


}
