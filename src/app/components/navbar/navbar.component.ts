import { Component,OnInit , AfterContentChecked } from '@angular/core';
import { AdminGuard, SchoolGuard, HumanResorcesGuard, SupervisionGuard, TeachersGuard } from '../../services/Main.guard';
import { MainServicesService } from '../../services/main-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked {
  isAdminLogin: boolean;
  isSchoolLoging: boolean;
  isHhrrLoding: boolean;
  isSvision: boolean;
  isTeacher: boolean;
  constructor(public Ggard: AdminGuard,
              public Sgard: SchoolGuard,
              public hr: HumanResorcesGuard,
              public svison: SupervisionGuard,
              public teacher: TeachersGuard,
              public mainService: MainServicesService,
              private router: Router
            ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    
  }


  // tslint:disable-next-line: typedef
  ngAfterContentChecked(){

      this.isAdminLogin = this.Ggard.isAutenticate;
  this.isSchoolLoging = this.Sgard.isAutenticate;
  this.isHhrrLoding = this.hr.isAutenticate;
  this.isSvision = this.svison.isAutenticate;
  this.isTeacher = this.teacher.isAutenticate;
  }

  logOut(){
    this.mainService.logOut();
    this.isAdminLogin=false ;
    this.isSchoolLoging=false ;
    this.isHhrrLoding=false ;
    this.isSvision=false ;
    this.isTeacher=false ;
    this.router.navigateByUrl('/home');

  }
  
}
