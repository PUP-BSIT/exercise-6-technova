import { Component, signal } from '@angular/core';
import { PetManagerComponent } from './pet-manager/pet-manager';

@Component({
  selector: 'app-root',
  imports: [PetManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pet-app');
}
