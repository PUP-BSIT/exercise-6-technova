import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Transaction {
  itemName: string;
  category: string;
  amount: number;
  type: string;
  date: string;
}

@Component({
  selector: 'app-transaction-tracker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-tracker.html',
  styleUrl: './transaction-tracker.scss',
})
export class TransactionTracker {
  transactionForm: FormGroup;
  transactions: Transaction[] = [];

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      itemName: ['', Validators.required],
      category: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      type: ['', Validators.required],
      date: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  addTransaction(): void {
    if (this.transactionForm.valid) {
      // Add transaction to the list
      this.transactions.unshift({ ...this.transactionForm.value });

      // Reset the form
      this.transactionForm.reset({
        itemName: '',
        category: '',
        amount: 0,
        type: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  }

  getTotalIncome(): number {
    return this.transactions
      .filter((t) => t.type === 'Income')
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }

  getTotalExpenses(): number {
    return this.transactions
      .filter((t) => t.type === 'Expense')
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }

  getBalance(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }
}