import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetItemComponent } from './pet-item/pet-item.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [PetItemComponent, FiltersComponent],
  imports: [CommonModule],
  exports: [PetItemComponent, FiltersComponent],
})
export class SharedModule {}
