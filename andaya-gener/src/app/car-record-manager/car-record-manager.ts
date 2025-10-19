import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { CommonModule } from '@angular/common';

// Interface for Car record structure
interface Car {
  carBrand: string;
  carModel: string;
  bodyType: string;
  transmissionType: string;
  fuelType: string;
}

@Component({
  selector: 'app-car-record-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './car-record-manager.html',
  styleUrls: ['./car-record-manager.scss']
})
export class CarRecordManager {
  carFormGroup: FormGroup;
  carList: Car[] = [];

  // Dropdown options
  bodyTypeOptions = ['Sedan', 'SUV', 'Hatchback', 'Pickup', 'Van'];
  transmissionOptions = ['Automatic', 'Manual'];
  fuelTypeOptions = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];

  constructor(private formBuilder: FormBuilder) {
    this.carFormGroup = this.formBuilder.group({
      carBrand: this.formBuilder.control('', {
        validators: [Validators.required, this.noNumbersValidator]
      }),
      carModel: this.formBuilder.control('', {
        validators: [Validators.required]
      }),
      bodyType: this.formBuilder.control('', {
        validators: [Validators.required]
      }),
      transmissionType: this.formBuilder.control('', {
        validators: [Validators.required]
      }),
      fuelType: this.formBuilder.control('', {
        validators: [Validators.required]
      })
    });
  }

  // Custom validator to prevent numbers in car brand field
  noNumbersValidator(control: AbstractControl): ValidationErrors | null {
    return /\d/.test(control.value || '') ? { hasNumbers: true } : null;
  }

  // Add car record to list
  onAddCar(): void {
    if (this.carFormGroup.valid) {
      const newCar: Car = { ...this.carFormGroup.value };
      this.carList.push(newCar);

      // Reset form after adding
      this.carFormGroup.reset({
        carBrand: '',
        carModel: '',
        bodyType: '',
        transmissionType: '',
        fuelType: ''
      });
    }
  }
}