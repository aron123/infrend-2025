import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDTO } from '../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  router = inject(Router);

  users: UserDTO[] = [];

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: (err) => console.error(err)
    });
  }

  deleteUser(index: number) {
    const user = this.users[index];

    this.userService.delete(user.id).subscribe({
      next: () => {
        this.users.splice(index, 1);
      },
      error: (err) => console.error(err)
    });
  }
  
  navigateToUserForm(id: number) {
    this.router.navigate(['edit-user', id]);
  }

  navigateToTransactions(userId: number) {
    this.router.navigate(['transactions-of', userId]);
  }
}
