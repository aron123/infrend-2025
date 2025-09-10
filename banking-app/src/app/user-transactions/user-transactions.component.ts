import { Component, inject, OnInit } from '@angular/core';
import { BankTransferDTO } from '../../../models';
import { TransactionService } from '../services/transaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-transactions',
  imports: [],
  templateUrl: './user-transactions.component.html',
  styleUrl: './user-transactions.component.css'
})
export class UserTransactionsComponent implements OnInit {
  
  transactionService = inject(TransactionService);
  activatedRoute = inject(ActivatedRoute);

  transactions: BankTransferDTO[] = [];
  
  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['userId'];
    this.transactionService.getTransactionsOfUser(userId).subscribe({
      next: (transactions) => this.transactions = transactions,
      error: (err) => console.error(err)
    });
  }
}
