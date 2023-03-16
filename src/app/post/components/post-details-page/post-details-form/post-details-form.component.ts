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
      hashtag: new FormControl('')
    }
  );

  constructor(private _Activatedroute: ActivatedRoute, private postService: PostsService) {
    let id = this._Activatedroute.snapshot.paramMap.get("id")

    if (id) {
      this.post$ = postService.post$(id)
      let post = postService.post$(id).subscribe(value => {
        this.prepareForm.patchValue({
          title: value.title,
          description: value.description,
          imgSrc: value.imgSrc,
          hashtag: value.hashtag
        })
      })

    }
  }

  get inputs(): FormArray {
    return this.prepareForm.get('inputs') as FormArray;
  }

  addDailyPost() {
    console.log(this.prepareForm.value)

  }
}
