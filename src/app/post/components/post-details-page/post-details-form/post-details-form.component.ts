import {Component} from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {Post} from "../../../models/post";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {PostsService} from "../../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details-form',
  templateUrl: './post-details-form.component.html',
  styleUrls: ['./post-details-form.component.css']
})
export class PostDetailsFormComponent {
  post$: Observable<Post | any>;
  selectedFiles: File[] = [];

  prepareForm: FormGroup = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      id: new FormControl(null),
      imageSrc: new FormControl(''),
    }
  );

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {
    this.activatedRoute.params
      .pipe(map(param => param['id']))
      .subscribe(id => {
        let post = postService.post$(id)

        this.post$ = post;

        post.subscribe(value => this.prepareForm.patchValue({...value}))
      });
  }

  get inputs(): FormArray {
    return this.prepareForm.get('inputs') as FormArray;
  }

  onFileSelect(event: any) {
    this.selectedFiles = event.target.files;
  }

  async addDailyPost() {

    this.prepareForm.disable()
    await this.postService.updateFile(
      {
        ...this.prepareForm.value
      }, this.selectedFiles[0]
    );
    this.prepareForm.reset()
    this.prepareForm.enable()

  }
}
