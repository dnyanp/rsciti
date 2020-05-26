import { Component } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iti';
  user : User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  onActivate() {
    window.scroll(0,0);
  }

  gotoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  logout() {
    this.accountService.logout();
}
}
