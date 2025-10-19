import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

interface Pet {
  name: string;
  species: string;
  breed: string;
  age: number;
  isVaccinated: boolean;
}

@Component({
  selector: 'app-pet-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pet-manager.html',
  styleUrls: ['./pet-manager.scss']
})
export class PetManagerComponent {
  petForm: FormGroup;
  petList: Pet[] = [];

  speciesOptions = [
    'Dog',
    'Cat',
    'Bird',
    'Rabbit',
    'Hamster',
    'Fish',
    'Turtle',
    'Guinea Pig'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.petForm = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, this.noNumbersValidator]
      }],
      species: ['', {
        validators: [Validators.required]
      }],
      breed: ['', {
        validators: [Validators.required, this.noNumbersValidator]
      }],
      age: [0, {
        validators: [Validators.required, Validators.min(0)]
      }],
      isVaccinated: [false]
    });
  }

  // custom validator to prevent numbers in name and breed fields
  noNumbersValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && /\d/.test(control.value)) {
      return { hasNumbers: 'Field cannot contain numbers' };
    }
    return null;
  }

  addPet(): void {
    if (this.petForm.valid) {
      const newPet: Pet = {
        name: this.petForm.value.name,
        species: this.petForm.value.species,
        breed: this.petForm.value.breed,
        age: this.petForm.value.age,
        isVaccinated: this.petForm.value.isVaccinated
      };

      this.petList.push(newPet);

      this.petForm.reset({
        name: '',
        species: '',
        breed: '',
        age: 0,
        isVaccinated: false
      });
    }
  }
}