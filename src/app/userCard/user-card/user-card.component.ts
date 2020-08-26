import { Component, OnInit, Input ,DoCheck, OnDestroy} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scrollBottom } from '../../components/chat-screen/chat-helpers';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit,OnDestroy {

  @Input() dataChat:any;
  @Input() message:any;
  @Input() dataDOM:any;
  myObservableArray: Observable<any>;
  data: Subject<any> = new Subject();
  

mainText:any[]=[];
classItems: string ;


  constructor() { 
    this.getDataChat();
  }

  ngOnInit(): void {
console.log(this.classItems);

  //this.concactInputs();
    console.log('classitems',this.classItems);
     
 
  }


  getDataChat() {
    if (!this.myObservableArray) {
      this.myObservableArray  = this.getData();
      this.myObservableArray.subscribe(()=>{
        const interval = setInterval(() => {
 
  this.dataDOM.scrollTop=this.dataDOM.scrollHeight;
  
    }, 20);
    () => clearInterval(interval);
      })
    }
  }
  getData(): Subject<any> {

    const interval = setInterval(() => {
  this.mainText=this.dataChat.concat(this.message);
  this.mainText = this.mainText.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.data.next(this.mainText);
  
  
    }, 500);
    () => clearInterval(interval);
    return this.data;
  }
  
  trackByFn(index: number, item: any): any {
    return index - 1;
  }
ngOnDestroy(){

  this.mainText=[];
}
 

}
