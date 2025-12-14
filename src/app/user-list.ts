import { Component, signal } from '@angular/core';
import { UserCardComponent } from './usercard';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  template: `
    <div class="user-list">
      <h2>Users</h2>

      @for (user of users(); track user.id) {
        <app-user-card
          [user]="user"
          (edit)="handleEdit($event)"
          (delete)="handleDelete($event)"
        />
      }

      @if (users().length === 0) {
        <p>No users found.</p>
      }
    </div>
  `,
  styles: [`
    .user-list {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
    }
  `]
})
export class UserListComponent {
  users = signal<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ]);

  handleEdit(user: User) {
    alert(`Editing: ${user.name}`);
    // In real app, open edit modal or navigate to edit page
  }

  handleDelete(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users.update(users => users.filter(u => u.id !== userId));
    }
  }
}
