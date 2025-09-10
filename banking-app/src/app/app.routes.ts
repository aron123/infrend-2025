import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';

export const routes: Routes = [
    {
        path: '',
        component: UserListComponent 
    },
    {
        path: 'create-user',
        component: UserEditorComponent
    },
    {
        path: 'edit-user/:id',
        component: UserEditorComponent
    },
    {
        path: 'create-transaction',
        component: CreateTransactionComponent
    },
    {
        path: 'transactions-of/:userId',
        component: UserTransactionsComponent
    }
];
