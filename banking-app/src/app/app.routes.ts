import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditorComponent } from './user-editor/user-editor.component';

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
    }
];
