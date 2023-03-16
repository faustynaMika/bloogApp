import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Observable} from "rxjs";
import {User} from "../../auth/states/user";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user$: Observable<User | null>

  constructor(private authService: AuthService) {
  }

  logIn() {
    this.authService.logIn('coded.girl00@gmailcom', '123456')
  }

  logOut() {
    this.authService.logOut()
  }

  ngOnInit(): void {
    this.user$ = this.authService.user$
  }
}
