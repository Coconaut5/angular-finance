import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {

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
