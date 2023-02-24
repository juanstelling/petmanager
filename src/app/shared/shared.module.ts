import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FiltersComponent } from './filters/filters.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FiltersComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [FiltersComponent, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
