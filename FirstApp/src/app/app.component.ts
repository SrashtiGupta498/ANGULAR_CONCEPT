import { Component ,ViewEncapsulation} from '@angular/core';
// import { environment } from './../environments/environment';
import { map} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
   title = 'FirstApp';
   public name ="SrashtiGupta"

  public message=""

  data:any ;
   constructor() {
      this.data = "";
      this.title = "Using RxJs with Angular";
      let a = this.getData();
   }
   getData():any {
      const response =
      ajax('https://jsonplaceholder.typicode.com/users')
         .pipe(map(e => e.response));
      response.subscribe(res => {
         console.log(res);
         this.data = res;
      });
   }
}
