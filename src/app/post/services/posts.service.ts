import {Injectable} from '@angular/core';
import {finalize, map, Observable} from "rxjs";
import {PostsPageStore} from "./posts-page-store.service";
import {tap} from "rxjs/operators";
import {Post} from "../models/post";
import {PostFirestore} from "./post-firestore.service";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private firestore: PostFirestore,
    private fireStorage: AngularFireStorage,
    private store: PostsPageStore
  ) {
    this.firestore.collection$().pipe(
      tap(posts => {
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

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => {
        return !state.loading
          && state.posts
          && state.posts.length === 0
      })
    )
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus))
  }

  get totalPosts$(): Observable<any> {
    return this.store.state$.pipe(map(state => state.totalPosts))
  }

  async addFile(file: File): Promise<AngularFireUploadTask> {
    return this.fireStorage.upload('postsImage', file)
  }

  create(post: Post, image: File) {

    this.store.patch({
      loading: true,
      posts: [],
      formStatus: 'Saving...'
    }, "post create")

    const filePath = `postFile/${image.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    const uploadTask = this.fireStorage.upload(filePath, image);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {

          post = {
            ...post,
            imageSrc: downloadURL,
            createdAt: new Date(),
          }

          this.addPost(post);
        });
      })
    ).subscribe();
  }

  addPost(post: Post) {
    return this.firestore.create(post).then(_ => {
      this.store.patch({
        formStatus: 'Saved!'
      }, "post create SUCCESS")
      setTimeout(() => this.store.patch({
        formStatus: ''
      }, "post create timeout reset formStatus"), 2000)
    }).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, "post create ERROR")
    })
  }

  delete(id: string): any {
    this.store.patch({ loading: true, posts: [] }, "employee delete")
    return this.firestore.delete(id).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, "employee delete ERROR")
    })
  }
}
