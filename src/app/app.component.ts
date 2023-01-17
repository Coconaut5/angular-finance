import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['../styles/styles.scss'],

})

export class AppComponent {
  title = 'angular-finance';

  newMessage!: string;

  handleClick(event: Event) {
    console.log(event)
  }
  /*
  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this. newMessage = value;
  } */
}
