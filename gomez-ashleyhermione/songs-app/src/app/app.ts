import { Component } from '@angular/core';
import { SongFormComponent } from './song-form/song-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'songs-app';
}