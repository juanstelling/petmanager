import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/core/model/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
})
export class PetItemComponent {
  @Input() petItem!: Pet;
}
