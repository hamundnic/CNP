import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Observable, Subject, Subscription,Unsubscribable } from 'rxjs';

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit, OnDestroy {
  @Input() dataChat: any;
  myObservableArray: Observable<any>;
  data: Subject<any> = new Subject<any>();
 subscription: Subscription =new Subscription();
  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {
    this.getDataChat();
  }

  ngOnInit() {}


  getDataChat() {
    if (!this.myObservableArray) {
  
    this.myObservableArray = this.getData();
    this.subscription.add(this.myObservableArray.subscribe());
   
    }
  }
  getData(): Subject<any> {
    const interval = setInterval(() => {
    this.data.next(this.dataChat);
    this.changeDetector.detectChanges();
    this.subscription.add(this.data.subscribe());
    }, 500);
    () => clearInterval(interval);
    return this.data;
  }

  trackByFn(index: number, item: any): any {
    return index - 1;
  }

 
  ngOnDestroy() {
   
   this.subscription.unsubscribe();

  }
}
