import { Component, inject, Input, OnInit } from '@angular/core';
import { Message } from '../chat-model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {

  @Input()
  message!: Message;

  userName: string = '';

  storageService = inject(StorageService);

  ngOnInit(): void {
    this.userName = this.storageService.userName();
  }
}
