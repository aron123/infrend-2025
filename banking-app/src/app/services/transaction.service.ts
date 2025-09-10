import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BankTransferDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  http = inject(HttpClient);

  createTransaction(transaction: BankTransferDTO) {
    return this.http.post<BankTransferDTO>('/api/transaction', transaction);
  }

  getTransactionsOfUser(userId: number) {
    return this.http.get<BankTransferDTO[]>('/api/transaction/all-of/' + userId);
  }
}
