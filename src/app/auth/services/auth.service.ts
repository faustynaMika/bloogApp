import {Injectable, OnInit} from "@angular/core";
import {AuthStoreService} from "./auth-store.service";
import {filter, map, Observable} from "rxjs";
import {User} from "../states/user";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private store: AuthStoreService, private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.user
      .pipe(filter(value => value != null))
      .subscribe(user => {
        if (user) {
          this.loginSuccessful(user)
        }
      })
  }

  get user$(): Observable<User | null> {
    return this.store.state$.pipe(map(state => state.user))
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loggedIn))
  }

  ngOnInit(): void {
    this.firebaseAuth.user.subscribe(user => this.loginSuccessful(user!))
  }

  logOut() {
    this.firebaseAuth.signOut().then(_ => {
      this.store.set({
        user: null,
        loggedIn: false
      }, 'logged out')
    });
  }

  logIn(login: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(login, password).then(
      credentials => this.loginSuccessful(credentials.user!),
      reason => this.loginFailed(reason)
    )
  }

  private loginFailed(reason: any) {
    this.store.set({
      user: null,
      loggedIn: false,
      errorMessage: reason
    }, 'Failed to login')
  }

  private loginSuccessful(user: firebase.User) {

    this.store.set({
      user: {
        name: user?.email!,
        id: user?.uid!
      },
      loggedIn: true
    }, 'Successfully logged in')
  }
}
