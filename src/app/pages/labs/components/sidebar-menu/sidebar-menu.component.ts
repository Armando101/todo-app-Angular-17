import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../interfaces';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'User info', route: 'user-info' },
    { title: 'Properties', route: 'properties' },
  ]);
}
