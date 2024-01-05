import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, SidebarMenuComponent],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export default class LabsComponent {}
