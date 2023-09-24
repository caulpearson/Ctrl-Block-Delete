import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent {

  showModal: boolean = false;

  constructor(private formBuilder:FormBuilder) {}

  postForm = this.formBuilder.group({
    textForm: this.formBuilder.control(''),
    imageForm: this.formBuilder.control(''),
    vegetarianBox: this.formBuilder.control(''),
    bbqBox: this.formBuilder.control(''),
    deliBox: this.formBuilder.control(''),
    bakeryBox: this.formBuilder.control('')
  })

  onSubmit() {
    console.log(this.postForm.controls['textForm'].value),
    console.log(this.postForm.controls['imageForm'].value),
    console.log(this.postForm.controls['vegetarianBox'].value),
    console.log(this.postForm.controls['bbqBox'].value),
    console.log(this.postForm.controls['deliBox'].value),
    console.log(this.postForm.controls['bakeryBox'].value)

    // Open the modal
    this.toggleModal();

    // Prevent the form from doing a full page reload
    return false;
  }

  toggleModal() {
    console.log("Toggling modal"); // Log to check if the function is called
    this.showModal = !this.showModal;
}

}