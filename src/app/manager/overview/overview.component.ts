import { Component } from '@angular/core';
import { PetsService } from 'src/app/core/services/pets.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  pets$ = this.petsService.pets$;
  petStatusAction$ = this.petsService.petStatusAction$;

  constructor(private petsService: PetsService) {}

  getSelectedStatus(status: string): void {
    this.petsService.selectedStatus(status);
  }
}
