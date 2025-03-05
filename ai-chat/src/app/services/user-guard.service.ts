import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  storageService = inject(StorageService);

  router = inject(Router);

  refuseGuest(): boolean {
    const userName = this.storageService.userName();
    const apiKey = this.storageService.apiKey();

    if (!userName || !apiKey) {
      this.router.navigateByUrl('/welcome');
      return false;
    }

    return true;
  }
}
