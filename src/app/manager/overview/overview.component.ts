import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/core/model/pet.model';
import { PetsService } from 'src/app/core/services/pets.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  defaultStatus: string = 'available';
  pets$!: Observable<Pet[]>;

  constructor(private petService: PetsService) {}

  ngOnInit(): void {
    this.pets$ = this.getPets(this.defaultStatus);
  }

  getSelectedStatus(status: string): void {
    this.pets$ = this.getPets(status);
    this.pets$.subscribe((pets) => console.log(pets));
  }

  getPets(status: string): Observable<Pet[]> {
    return this.petService.getPets(status);
  }
}
