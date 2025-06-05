import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

    title: string = 'Counter';
    counter: number;

    constructor() {
        this.counter = 0;
    }

    increment() {
        this.counter++;
        console.log('Increment');
    }

    decrement() {
        this.counter--;
        console.log('Decrement');
    }

    reset() {
        this.counter = 0;
        console.log('Reset');
    }

}
