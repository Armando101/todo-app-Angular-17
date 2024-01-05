import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  private userService = inject(UserService);
  public userId = signal(0);
  public currentUser = signal<User | null>(null);
  public userWasFound = signal(true);
  public fullName = computed<string>(() => {
    if (!this.currentUser()) {
      return 'User not found';
    }
    return `${this.currentUser()?.first_name} ${
      this.currentUser()?.last_name
    }}`;
  });

  ngOnInit(): void {
    this.loadUser;
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(null);
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: (err) => {
        this.userWasFound.set(false);
      },
    });
  }
}
