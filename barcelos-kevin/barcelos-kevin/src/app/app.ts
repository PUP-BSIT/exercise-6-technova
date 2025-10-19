import { Component, inject } from '@angular/core';
import { 
          FormBuilder, 
          FormGroup, 
          ReactiveFormsModule, 
          Validators 
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  isRead: boolean;
  rating: number;
}

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private formBuilder = inject(FormBuilder);
  
  bookForm: FormGroup;
  books: Book[] = [];
  nextId = 1;
  
  constructor() {
    this.bookForm = this.formBuilder.group({
      title: ['', { validators: [Validators.required] }],
      author: ['', { validators: [Validators.required] }],
      genre: ['', { validators: [Validators.required] }],
      isRead: [false],
      rating: [1, { validators: [
                        Validators.required, 
                        Validators.min(1), 
                        Validators.max(5)
              ] 
      }]
    });
  }
  
  addBook() {
    if (this.bookForm.valid) {
      const newBook: Book = {
        id: this.nextId++,
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        genre: this.bookForm.value.genre,
        isRead: this.bookForm.value.isRead,
        rating: this.bookForm.value.rating
      };
      
      this.books.push(newBook);
      this.bookForm.reset();
    }
  }
  
  removeBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }
}
