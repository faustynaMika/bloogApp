import {Component} from '@angular/core';
import {Observable} from "rxjs";
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

  prepareForm: FormGroup = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      id: new FormControl(null),
      imageSrc: new FormControl(''),
    }
  );

  constructor(private _Activatedroute: ActivatedRoute, private postService: PostsService) {
    let id = this._Activatedroute.snapshot.paramMap.get("id")

    if (id) {
      this.post$ = postService.post$(id)
      postService.post$(id).subscribe(value => {
        this.prepareForm.patchValue({
          title: value.title,
          description: value.description,
          imgSrc: value.imgSrc,
          id: value.id
        })
      })

    }
  }

  get inputs(): FormArray {
    return this.prepareForm.get('inputs') as FormArray;
  }

  async addDailyPost() {

    this.prepareForm.disable()
    await this.postService.update(
      {
        ...this.prepareForm.value
      }
    );
    this.prepareForm.reset()
    this.prepareForm.enable()

  }
}
