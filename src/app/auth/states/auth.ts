import {User} from "./user";

export interface Auth {
  user: User | null;
  loggedIn: boolean;
  errorMessage?: any;
}

