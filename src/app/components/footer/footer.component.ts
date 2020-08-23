import { Component } from '@angular/core';
import { MainServicesService } from 'src/app/services/main-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  constructor( public mainService: MainServicesService) { }

  

}
