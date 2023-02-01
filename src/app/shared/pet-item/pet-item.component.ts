import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/core/model/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
})
export class PetItemComponent implements OnInit {
  @Input() petItem!: Pet;

  constructor() {}

  ngOnInit(): void {
    console.log(this.petItem.photoUrls);
  }
}
