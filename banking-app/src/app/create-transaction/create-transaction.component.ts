import { Component, inject, OnInit } from '@angular/core';
import { BankTransferDTO, UserDTO } from '../../../models';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  imports: [FormsModule],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.css'
})
export class CreateTransactionComponent implements OnInit {
  userService = inject(UserService);
  transactionService = inject(TransactionService);
  router = inject(Router);

  users: UserDTO[] = [];

  newTransaction: Partial<BankTransferDTO> = {
    id: 0,
    amount: 0,
    sender: undefined,
    receiver: undefined
  };

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: (err) => console.error(err)
    });
  }

  saveTransaction() {
    this.transactionService.createTransaction(this.newTransaction as BankTransferDTO).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        if (err?.error?.message) {
          alert(err.error.message);
        }
        
        console.error(err);
      }
    });
  }
}
