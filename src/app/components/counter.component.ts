import { Component, inject } from '@angular/core';
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
    
    private store = inject(Store<{counter: number}>);

    constructor() {
        this.store.select('counter').subscribe((counter) => {
            this.counter = counter;
        });
    }

    increment() {
        this.store.dispatch(increment({value: 1}));
        console.log('Increment');
    }

    decrement() {
        this.store.dispatch(decrement({value: 1}));
        console.log('Decrement');
    }

    reset() {
        this.store.dispatch(reset({value: 0}));
        console.log('Reset');
    }

}
