import { Component, OnInit } from '@angular/core';
import { Element } from '../element';
import { BLOGS } from '../mock-blogs';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs = BLOGS;
  selectedElement = Element;
  constructor() { }

  ngOnInit() {
  }

  onSelect(element: Element): void {
    this.selectedElement = element;
  }

}
