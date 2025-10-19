import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

interface Song {
  title: string;
  artist: string;
  genre: string;
  releaseYear: number;
  isFavorite: boolean;
}

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './song-form.html',
  styleUrl: './song-form.scss'
})
export class SongFormComponent {
  songForm: FormGroup;
  songs: Song[] = [];

  genres = [
    'Pop',
    'Rock',
    'Jazz',
    'Classical',
    'Hip Hop',
    'Electronic'
  ];

  constructor(private fb: FormBuilder) {
    this.songForm = this.fb.group({
      title: ['', { validators: [Validators.required] }],
      artist: ['', { validators: [Validators.required] }],
      genre: ['', { validators: [Validators.required] }],
      releaseYear: [
        2024,
        {
          validators: [
            Validators.required,
            Validators.min(1900),
            Validators.max(2100)
          ]
        }
      ],
      isFavorite: [false]
    });
  }

  onAdd() {
    if (this.songForm.valid) {
      const newSong: Song = {
        title: this.songForm.value.title,
        artist: this.songForm.value.artist,
        genre: this.songForm.value.genre,
        releaseYear: this.songForm.value.releaseYear,
        isFavorite: this.songForm.value.isFavorite
      };

      this.songs.push(newSong);
      this.songForm.reset({
        title: '',
        artist: '',
        genre: '',
        releaseYear: 2024,
        isFavorite: false
      });
    }
  }
}