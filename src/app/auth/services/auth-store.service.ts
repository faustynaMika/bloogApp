import {Injectable} from "@angular/core";
import {StoreService} from "../../core/services/store.service";
import {Auth} from "../states/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService extends StoreService<Auth> {
  protected store: string = 'auth';

  constructor() {
    super({
      user: null,
      loggedIn: false
    })
  }
}
