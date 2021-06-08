import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
//import {MatToolbarModule} from '@angular/materail/toolbar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { PostCreateComponent} from './post/post-create/post-create.component';
import { CourseComponent } from './course/course.component';
import { HumanComponent } from './human/human.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    CourseComponent,
    HumanComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
