import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [ManagerComponent, OverviewComponent],
  imports: [CommonModule, ManagerRoutingModule, SharedModule],
  exports: [ManagerComponent],
})
export class ManagerModule {}
