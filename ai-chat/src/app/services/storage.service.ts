import { Injectable } from '@angular/core';

const USERNAME_KEY = 'userName';
const APIKEY_KEY = 'apiKey';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveCredentials(userName: string, apiKey: string) {
    localStorage.setItem(USERNAME_KEY, userName);
    localStorage.setItem(APIKEY_KEY, apiKey);
  }

  userName(): string {
    return localStorage.getItem(USERNAME_KEY) || '';
  }

  apiKey(): string {
    return localStorage.getItem(APIKEY_KEY) || '';
  }
}
