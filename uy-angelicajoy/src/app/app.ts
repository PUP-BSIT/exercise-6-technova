import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionTracker } from './transaction-tracker/transaction-tracker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransactionTracker],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = '📊Transaction Tracker';
}
