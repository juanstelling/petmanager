import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetsService } from 'src/app/core/services/pets.service';
import { Category, Pet } from 'src/app/core/model/pet.model';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
})
export class AddPetComponent implements OnInit {
  petForm!: FormGroup;
  categoryblob: Category | undefined;

  errorStatus: boolean = false;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private petsService: PetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm(): void {
    this.petForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      category: [''],
      photoUrls: [''],
      tags: [' '],
    });
  }

  addPet(): void {
    if (this.petForm.valid) {
      this.categoryblob = {
        id: this.getRandomId(),
        name: this.petForm.get('category')?.value,
      };

      const petRequest: any = {
        id: this.getRandomId(),
        name: this.petForm.get('name')?.value,
        status: this.petForm.get('status')?.value,
        category: this.categoryblob,
      };
      console.log(petRequest);

      this.petsService.addPet(petRequest).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (error) => {
          this.errorStatus = true;
          this.errorMessage = error.message;
        },
      });
    } else {
      this.errorStatus = true;
      this.errorMessage = 'Fill in all required fields';
    }
  }

  getRandomId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
