import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent {
  name = signal('Armando');

  tasks = signal([{ name: 'Sweep' }, { name: 'swimming' }]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}
