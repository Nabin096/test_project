import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { ElementDetailComponent } from './element-detail/element-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    ElementDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
