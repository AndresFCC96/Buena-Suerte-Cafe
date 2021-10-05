import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/models/Blogs';
import { BlogService } from 'src/app/services/blogs.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: Blogs[] = [];

  nombre: string = localStorage.getItem("nombre");
  rol: string = localStorage.getItem("rol");
  form: FormGroup;

  dataSource = new MatTableDataSource<Blogs>(this.blogs);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns: string[] = ['Titulo', 'Descripcion', 'Enlace', 'Acciones'];

  constructor(public router: Router,
    private formsBuilder:FormBuilder,
    private dialog: MatDialog,
    public blogService: BlogService) { }

  ngOnInit(): void {
    if(!this.nombre){
      this.router.navigate(['/Login']);
    }else{
      if(this.rol != "Admin"){
        this.router.navigate(['']);
      }
    }
    this.form = this.formsBuilder.group(
      {
          'titulo': '',
          'descripcion': '',
          'enlace': '',
      });
      this.consultarBlogs();
  }

  consultarBlogs(): void{
    this.blogService.consultarTodosLosBlogs().subscribe(data => {
      this.blogs = data;
      this.dataSource = new MatTableDataSource<Blogs>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  cerrarSesion(){
    localStorage.clear();
    environment.isLogged = false;
    this.router.navigate(['']);
  }

}
