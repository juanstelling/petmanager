import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPetComponent } from './add-pet.component';

const routes: Routes = [{ path: '', component: AddPetComponent }];

@NgModule({
  declarations: [AddPetComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AddPetModule {}
