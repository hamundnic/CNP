import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Observable, Subject } from "rxjs";
import { MainServicesService } from "../../services/main-services.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit, OnDestroy {
  @Input() dataChat: any;
  myObservableArray: Observable<any>;
  data: Subject<any> = new Subject<any>();
  Obs$: Observable<any>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private mainService: MainServicesService
  ) {
    this.getDataChat();
  }

  ngOnInit() {}

  dataCh() {
    this.Obs$ = new Observable<any[]>((observer) => {
      observer.next(this.dataChat);
    });

    return this.Obs$;
  }
  getDataChat() {
    if (!this.myObservableArray) {
      this.myObservableArray = this.getData();
    }
  }
  getData(): Subject<any> {
    const interval = setInterval(() => {
      this.data.next(this.dataChat);
      this.changeDetector.detectChanges();
    }, 500);
    () => clearInterval(interval);
    return this.data;
  }

  trackByFn(index: number, item: any): any {
    return index - 1;
  }

 
  ngOnDestroy() {}
}
