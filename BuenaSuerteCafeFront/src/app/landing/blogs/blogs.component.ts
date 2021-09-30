import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/models/Blogs';
import { BlogService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blogs: Blogs[] = [];

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.consultarBlogs();
  }

  consultarBlogs(): void{
    this.blogService.consultarTodosLosBlogs().subscribe(data => {
      this.blogs = data;
    })
  }

}
