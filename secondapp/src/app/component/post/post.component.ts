import { Component ,EventEmitter,Input ,OnInit,Output} from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()post:Post|null = null;
  @Output()delete= new EventEmitter<void>();
  constructor(){}
  ngOnInit(): void {
    
  }
onDeletePost(event:Event)
{
event.stopPropagation();
this.delete.emit();
}

}
