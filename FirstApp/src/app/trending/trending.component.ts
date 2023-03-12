import { Component ,OnInit,Input,Output,ViewEncapsulation} from '@angular/core';
import { EventEmitter } from 'node:events';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
// @Input() public parentData:any;

//referring a new variable into input
@Input('parentData')public name:any;
@Output()public childEvent = new EventEmitter();
  constructor(){

  }
  ngOnInit(){

  }

  fireEvent(){
    this.childEvent.emit('Hey Great Learning');
  }

}
