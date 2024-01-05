import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() type = 'primary';

  primaryClass = signal<string>(
    'bg-blue-500 shadow-blue-500/20 hover:shadow-blue-500/40'
  );

  secondaryClass = signal<string>(
    'bg-pink-500 shadow-pink-500/20 hover:shadow-pink-500/40'
  );

  baseClasses = signal<string>(
    'middle none center rounded-lg mr-2 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
  );

  _buttonClass = computed(() => {
    if (this.type === 'primary') {
      return this.primaryClass();
    }
    return this.secondaryClass();
  });

  get buttonClass() {
    return `${this.baseClasses()} ${this._buttonClass()}`;
  }
}
