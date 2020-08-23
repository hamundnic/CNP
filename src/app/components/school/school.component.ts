import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { MainServicesService } from "src/app/services/main-services.service";
import { SchoolCamera } from "./schoolCamera";
import { Observable, Subscription } from "rxjs";
import { pluck } from "rxjs/operators";

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.css"],
})
export class SchoolComponent implements OnInit, OnDestroy {
  schoolCamera = new SchoolCamera();
  isOpen:boolean = true;
  chatEvents: any = {};
  Obs$ = new Observable();
  ObsSubc: Subscription = new Subscription();
  constructor(
    private mainService: MainServicesService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  openVideo(e: Event) {
    
    this.isOpen  = !this.isOpen;
    if(this.isOpen === false){
    return   this.schoolCamera.init(e);
    }else{
      return ;
    }
  }

  chatEvent(e: Event) {
    console.log(e);

    this.Obs$ = new Observable((observer) => {
      observer.next(e);
    });

    this.Obs$.subscribe((user) => this.chatEvents = user);

    console.log("chatEvent", this.chatEvents);
  }

  ngOnDestroy() {}
}
