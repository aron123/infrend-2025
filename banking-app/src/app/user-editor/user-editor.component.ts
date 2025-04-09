import { Component, inject, OnInit } from '@angular/core';
import { UserDTO } from '../../../models';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-editor',
  imports: [FormsModule],
  templateUrl: './user-editor.component.html',
  styleUrl: './user-editor.component.css'
})
export class UserEditorComponent implements OnInit {
  userService = inject(UserService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  user: UserDTO = {
    id: 0,
    name: '',
    address: '',
    balance: 0
  };

  isNewUser = true;

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['id'];

    if (userId) {
      this.isNewUser = false;
      this.userService.getOne(userId).subscribe({
        next: (user) => this.user = user,
        error: (err) => {
          this.router.navigateByUrl('/');
          console.error(err);
        }
      });
    }
  }

  saveUser() {
    if (this.isNewUser) {
      this.userService.create(this.user).subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (err) => console.error(err)
      });
    } else {
      this.userService.update(this.user).subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (err) => console.error(err)
      });
    }

  }
}
