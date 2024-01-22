import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './widgets/header/header.component';
import { SidebarComponent } from './widgets/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, RouterLink, MatIconModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
