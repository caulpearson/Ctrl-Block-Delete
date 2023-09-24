import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private formBuilder:FormBuilder) {}

  postForm = this.formBuilder.group({
    textForm: this.formBuilder.control(''),
    imageForm: this.formBuilder.control(''),
    restrictionBox: this.formBuilder.control('')
  })

  onSubmit() {
    console.log(this.postForm.controls['textForm'].value),
    console.log(this.postForm.controls['imageForm'].value),
    console.log(this.postForm.controls['restrictionBox'].value)
  }
}