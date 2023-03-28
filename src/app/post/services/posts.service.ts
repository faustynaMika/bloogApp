import {Injectable, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {PostsPageStore} from "./posts-page-store.service";
import {tap} from "rxjs/operators";
import {Post} from "../models/post";
import {PostFirestore} from "./post-firestore.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {DataService} from "../../services/data.service";


@Injectable({
  providedIn: 'root'
})
export class PostsService implements OnInit {

  constructor(
    private firestore: PostFirestore,
    private fireStorage: AngularFireStorage,
    private store: PostsPageStore,
    private dataService: DataService
  ) {

    this.store.patch({
      loading: true,
      posts: [],
      totalPosts: 0
    }, "loading posts")

    this.dataService.getTimesWorldData().pipe(
      tap(response => {

        let posts = response.results.map(result => Object.create({
          id: result.uri,
          title: result.title,
          description: result.abstract,
          imageSrc: result.multimedia[0].url,
          createdAt: new Date(),
        }))

        this.store.patch({
          loading: false,
          posts: posts,
          totalPosts: posts.length
        }, `posts collection subscription`)
      })
    ).subscribe()


  }

  get posts$(): Observable<Post[]> {
    return this.store.state$.pipe(map(state => state.loading
      ? []
      : state.posts))
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading))
  }

  get totalPosts$(): Observable<any> {
    return this.store.state$.pipe(map(state => state.totalPosts))
  }

  ngOnInit(): void {
    this.store.patch({
      loading: true,
      posts: [],
      totalPosts: 0
    }, "loading posts")
  }

  post$(id: string): Observable<Post | any> {
    return this.store.state$.pipe(map(state => state.loading
      ? null
      : state.posts.find(value => value.id === id)))
  }
}
