import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTooltipModule

  ]
})
export class DashboardModule { }
