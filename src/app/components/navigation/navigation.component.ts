import {Component} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Observable} from "rxjs";
import {User} from "../../auth/states/user";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private authService: AuthService) {
  }

  get user$(): Observable<User | null> {
    return this.authService.user$
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.authService.isLoggedIn$
  }

  logIn() {
    this.authService.logIn('coded.girl00@gmail.com', '123456')
  }

  logOut() {
    this.authService.logOut()
  }
}
