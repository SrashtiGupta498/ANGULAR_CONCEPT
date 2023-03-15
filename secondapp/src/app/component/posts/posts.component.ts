import { Component , OnInit} from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]=[];
  constructor(private PostService:PostService){}
  ngOnInit(): void {
      this.getPosts();
  }
  getPosts()
  {
    this.PostService.getPosts().subscribe((posts)=>{
      this.posts =posts;
    })
  }
  delete(post:Post)
  { 
    this.posts=  this.posts.filter(p=>p.id != post.id);
    this.PostService.deletePost(post).subscribe();
  }

}
