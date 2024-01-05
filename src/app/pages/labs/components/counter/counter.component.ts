import { Component, computed, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public counter = signal(10);

  // Computed listen inside signals
  // Calls the callback function when any inside signal is updated
  // Computed signal are read only
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number): void {
    this.counter.update((counter) => counter + value);
  }
}
