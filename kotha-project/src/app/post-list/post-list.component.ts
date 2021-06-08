import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input("items") p:any;
  posts=[
    {title:"first",content:"first post as shown"},
      {title:"second",content:"second post as shown"},
      {title:"third",content:"third post as shown"}

  ];

  ngOnInit(): void {

}


}

