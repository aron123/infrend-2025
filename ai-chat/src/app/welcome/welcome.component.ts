import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  userName: string = '';

  apiKey: string = '';

  storageService = inject(StorageService);

  router = inject(Router);

  login() {
    this.storageService.saveCredentials(this.userName, this.apiKey);
    this.router.navigateByUrl('/');
  }
}
