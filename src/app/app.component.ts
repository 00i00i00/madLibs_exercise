import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'mad-libs';
  noun: string = 'noun';
  adverb: string = 'adverb';
}
