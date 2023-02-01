import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/core/model/pet.model';
import { PetsService } from 'src/app/core/services/pets.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  pets$!: Observable<Pet[]>;

  constructor(private petService: PetsService) {}

  ngOnInit(): void {
    this.pets$ = this.petService.getPets('available');
  }
}
