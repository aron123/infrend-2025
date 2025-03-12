import { Component, inject } from '@angular/core';
import { Message } from '../chat-model';
import { MessageComponent } from '../message/message.component';
import { FormsModule } from '@angular/forms';
import { AiService } from '../services/ai.service';

@Component({
  selector: 'app-chat',
  imports: [ MessageComponent, FormsModule ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  
  messages: Message[] = [];

  newMessage = '';

  aiService = inject(AiService);

  sendMessage() {
    this.messages.push({ role: 'user', content: this.newMessage });
    this.newMessage = '';
    this.scrollToBottom();

    this.aiService.getChatCompletion(this.messages).subscribe((response) => {
      this.messages.push(response.choices[0].message);
      this.scrollToBottom();
    })
  }

  scrollToBottom() {
    setTimeout(() => window.scrollTo(0, document.querySelector('#message-box')!.scrollHeight), 200);
  }
}
