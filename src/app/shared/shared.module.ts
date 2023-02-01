import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetItemComponent } from './pet-item/pet-item.component';

@NgModule({
  declarations: [PetItemComponent],
  imports: [CommonModule],
  exports: [PetItemComponent],
})
export class SharedModule {}
