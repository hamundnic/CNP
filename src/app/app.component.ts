import { Component ,OnInit} from '@angular/core';
import { MainServicesService } from './services/main-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( public mainService: MainServicesService){

    
  }
 

ngOnInit(): void {

}


}
