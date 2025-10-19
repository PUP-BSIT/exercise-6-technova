import { Component, signal } from '@angular/core';
import { CarRecordManager } from './car-record-manager/car-record-manager';

@Component({
  selector: 'app-root',
  imports: [CarRecordManager],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('andaya-gener');
}
