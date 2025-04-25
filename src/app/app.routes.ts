import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';

export const routes: Routes = [
    {
        path: "",
        component: MainScreenComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];
