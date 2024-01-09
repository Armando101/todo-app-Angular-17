import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  public user = signal<User>({
    id: 0,
    email: 'email.gmail.com',
    first_name: 'Armando',
    last_name: 'Rivera',
    avatar: 'My avatar',
  });

  public fullName = computed(() => {
    return `${this.user().first_name} ${this.user().last_name}`;
  });

  onFieldUpdate(field: keyof User, value: string) {
    console.log({ field, value });

    this.user.update((user) => {
      switch (field) {
        case 'email':
          user.email = value;
          break;
        case 'first_name':
          user.first_name = value;
          break;
        case 'last_name':
          user.last_name = value;
          break;
        case 'avatar':
          user.avatar = value;
          break;
        case 'id':
          user.id = Number(value);
          break;
      }
      return user;
    });
  }
}
