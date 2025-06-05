import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

    title: string = 'Counter';
    counter: number = 0;

    constructor(private store: Store<{counter: number}>) {
        this.store.select('counter').subscribe((counter) => {
            this.counter = counter;
        });
    }

    increment() {
        this.counter++;
        this.store.dispatch(increment());
        console.log('Increment');
    }

    decrement() {
        this.store.dispatch(decrement());
        console.log('Decrement');
    }

    reset() {
        this.store.dispatch(reset());
        console.log('Reset');
    }

}
