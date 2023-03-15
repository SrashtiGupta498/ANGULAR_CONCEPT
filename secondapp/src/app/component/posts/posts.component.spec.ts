import { Post } from "src/app/models/Post";
import { PostsComponent } from "./posts.component";
import { PostService } from "src/app/services/post.service";
import {ajax} from "rxjs/ajax";

describe('PostComponent',()=>{
  let POSTS:Post[];
  let component: PostsComponent;
  let mockPostService:any;
  beforeEach(()=>{
POSTS=[
  {id:1,
  body:'body1',
  title:'title1'
  },
  {id:2,
    body:'body2',
    title:'title2'
    },
    {id:3,
      body:'body3',
      title:'title3'
      }
];
mockPostService = jasmine.createSpyObj(['getPosts','deletePost'])
component = new PostsComponent(mockPostService);
  });
  describe('delete method',()=>{
    beforeEach(()=>{
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts =POSTS;
    });

    it(`should delete the selected post from the posts`,()=>{   
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2);
    })

    it(`it should call  delete the  actual selected post from the posts only once`,()=>{
      component.delete(POSTS[1]);
      for(let post of component.posts)
      {
        expect(post).not.toEqual(POSTS[1]);
      }
     
    })

    it(`it should call  delete the selected post from the posts only once`,()=>{
      component.delete(POSTS[1]);
      expect(component.posts.length).toHaveBeenCalledTimes(1);
    })
  })



})