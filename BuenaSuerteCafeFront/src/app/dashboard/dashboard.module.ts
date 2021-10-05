import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { BlogsComponent } from './blogs/blogs.component';
import { UsuarioManagementComponent } from './usuario-management/usuario-management.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ProductoDialogComponent } from './producto/producto-dialog/producto-dialog.component';
import { BlogsDialogComponent } from './blogs/blogs-dialog/blogs-dialog.component';
import { UsuarioDialogComponent } from './usuario-management/usuario-dialog/usuario-dialog.component';
import { ProductoDialogEliminarComponent } from './producto/producto-dialog-eliminar/producto-dialog-eliminar.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    UsuarioComponent,
    ProductoComponent,
    BlogsComponent,
    UsuarioManagementComponent,
    ProductoDialogComponent,
    BlogsDialogComponent,
    UsuarioDialogComponent,
    ProductoDialogEliminarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatDividerModule

  ]
})
export class DashboardModule { }
