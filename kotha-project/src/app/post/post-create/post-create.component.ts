import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.css']
   // template:'<p> {{" hello"+title}}</p>'

})
export class PostCreateComponent{
  enteredcontent=''
  enteredtitle=''
  title='no content'
  posts:any[] = [];
  hi:string="hi";
  onAddPost(){
     var post= {
       title:this.enteredtitle,
       content:this.enteredcontent
     };

     this.posts.push(post);


    }
  }










