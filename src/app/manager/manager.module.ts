import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';

@NgModule({
  declarations: [ManagerComponent],
  imports: [CommonModule, ManagerRoutingModule],
  exports: [ManagerComponent],
})
export class ManagerModule {}
