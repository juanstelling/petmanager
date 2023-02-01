import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { OverviewComponent } from './overview/overview.component';
import { AddPetComponent } from './add-pet/add-pet.component';

@NgModule({
  declarations: [ManagerComponent],
  imports: [CommonModule, ManagerRoutingModule, SharedModule],
  exports: [],
})
export class ManagerModule {}
