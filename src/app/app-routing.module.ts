import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'login', component: LoginComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
