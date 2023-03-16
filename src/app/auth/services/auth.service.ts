import {Injectable} from "@angular/core";
import {AuthStoreService} from "./auth-store.service";
import {map, Observable} from "rxjs";
import {User} from "../states/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: AuthStoreService) {

  }

  get user$(): Observable<User | null> {
    return this.store.state$.pipe(map(state => state.user))
  }

  get isLoggedIn(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loggedIn))
  }

  logIn(login: string, password: string) {
    this.store.set({
      user: {
        name: 'Faustii',
        id: 'id'
      },
      loggedIn: true
    }, 'logged in')
  }

  logOut() {
    this.store.set({
      user: null,
      loggedIn: false
    }, 'logged out')
  }
}
