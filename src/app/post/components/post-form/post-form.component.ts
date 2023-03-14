import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  selectedFiles: File[] = [];

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl(null, Validators.required)
  });

  status$: Observable<string>;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.status$ = this.postsService.formStatus$;
  }

  isInvalid(name: string) {
    return this.form.controls[name].invalid
      && (this.form.controls[name].dirty || this.form.controls[name].touched)
  }

  onFileSelect(event: any) {
      this.selectedFiles = event.target.files;
  }

  async submit() {
    this.form.disable()
    await this.postsService.create({
      ...this.form.value
    }, this.selectedFiles[0])
    this.form.reset()
    this.form.enable()
  }

}
