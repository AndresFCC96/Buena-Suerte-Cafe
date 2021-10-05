import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { ProductoComponent } from './producto/producto.component';
import { UsuarioManagementComponent } from './usuario-management/usuario-management.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'Dashboard/PerfilUsuario', component: UsuarioComponent},
  {path: 'Dashboard/AdministracionDeProductos', component: ProductoComponent},
  {path: 'Dashboard/AdministracionDeBlogs', component: BlogsComponent},
  {path: 'Dashboard/AdministracionDeUsuarios', component: UsuarioManagementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
