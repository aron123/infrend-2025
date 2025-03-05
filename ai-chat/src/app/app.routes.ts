import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { inject } from '@angular/core';
import { UserGuardService } from './services/user-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: ChatComponent,
        canActivate: [ () => inject(UserGuardService).refuseGuest() ]
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    }
];
