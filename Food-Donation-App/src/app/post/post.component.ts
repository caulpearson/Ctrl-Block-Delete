import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';

declare var bootstrap: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  showModal: boolean = false;

  constructor(private formBuilder:FormBuilder) {}

export class PostComponent implements OnInit {

  postURL: string = "https://fooddonationapi.azurewebsites.net/Post";
  getByAuthorURL: string = "";

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private appComponent:AppComponent) {}
  userName!: string;

  ngOnInit(): void {
    this.userName = this.appComponent.username;
  }


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


    typeBox: this.formBuilder.control('')
  })

  onSubmit() {

    console.log(this.userName);

    var text = this.postForm.controls['textForm'].value;
    var image = this.postForm.controls['imageForm'].value;
    var type = this.postForm.controls['typeBox'].value;
    var date = new Date().toUTCString();
    var profilePicture = this.getProfilePicture();
    var zipcode = this.getZipCode();



    const headers = { 'content-type': 'application/json'}
    //const body=JSON.stringify(this.postForm.controls['textForm'].value);
    const body = "{\"time\": \""+ date +"\",\"author\": \""+ this.userName +"\",\"type\": \""+ type +"\",\"text\": \""+ text +"\",\"profilePicture\": \"string\",\"image\": \""+ image +"\",\"zipCode\": 0,\"claimant\": 0}";
    console.log(body);
    //return this.http.post(this.url + 'people', body,{'headers':headers})
  }

  getProfilePicture() {
    var response = this.http.get(this.getByAuthorURL);



    return "";
  }


  getZipCode() {
    var response = this.http.get(this.getByAuthorURL);


    
    return "";
  }
  

}