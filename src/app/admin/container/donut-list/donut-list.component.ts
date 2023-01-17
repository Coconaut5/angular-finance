import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Donut {
  id: string;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-list.component.html',
  styleUrls: []
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: "343423",
        name: "Iced donut",
        price: 118,
        description: "no clue"
      },
      {
        id: "324236",
        name: "Chocolate donut",
        price: 200,
        description: "no clue"
      },
      {
        id: "565642",
        name: "Pink donut",
        price: 300,
        description: "no clue"
      },
    ]

    this.donut = this.donuts[0];
  }

}
