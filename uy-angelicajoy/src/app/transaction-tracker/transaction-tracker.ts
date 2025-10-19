import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-tracker.html',
  styleUrl: './transaction-tracker.scss',
})
export class TransactionTracker {
  formData: Transaction = {
    itemName: '',
    category: '',
    amount: 0,
    type: '',
    date: new Date().toISOString().split('T')[0],
  };

  transactions: Transaction[] = [];

  addTransaction(): void {
    if (
      this.formData.itemName &&
      this.formData.category &&
      this.formData.amount &&
      this.formData.type &&
      this.formData.date
    ) {
      // Add transaction to the list
      this.transactions.unshift({ ...this.formData });

      // Clear the form
      this.formData = {
        itemName: '',
        category: '',
        amount: 0,
        type: '',
        date: new Date().toISOString().split('T')[0],
      };
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
