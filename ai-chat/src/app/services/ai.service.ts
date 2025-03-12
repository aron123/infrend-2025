import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Message, CompletionRequest, CompletionResponse } from '../chat-model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  http = inject(HttpClient);

  storageService = inject(StorageService);

  getChatCompletion(messages: Message[]) {
    const reqBody: CompletionRequest = {
      model: 'gemini-2.0-flash',
      max_tokens: 4090,
      messages
    };

    return this.http.post<CompletionResponse>(
      'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
      reqBody,
      {
        headers: {
          'Authorization': 'Bearer ' + this.storageService.apiKey()
        }
      }
    );
  }
}
