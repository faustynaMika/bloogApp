import {Injectable} from "@angular/core";
import {Post} from "../models/post";
import {FirestoreService} from "../../core/services/firestore.service";

@Injectable({
  providedIn: 'root'
})
export class PostFirestore extends FirestoreService<Post> {

  protected basePath: string = 'posts';

}
