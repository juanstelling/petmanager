import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetItemComponent } from './pet-item/pet-item.component';
import { FiltersComponent } from './filters/filters.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PetItemComponent, FiltersComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    PetItemComponent,
    FiltersComponent,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
