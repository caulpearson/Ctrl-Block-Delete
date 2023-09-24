import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';

declare var bootstrap: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postURL: string = "https://fooddonationapi.azurewebsites.net/Post";
  getByAuthorURL: string = "";

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private appComponent: AppComponent) {
  }

  userName!: string;

  showModal: boolean = false;

  ngOnInit(): void {
    this.userName = this.appComponent.username;
  }

  postForm = this.formBuilder.group({
    textForm: this.formBuilder.control(''),
    imageForm: this.formBuilder.control(''),
    type: this.formBuilder.control('')
  })

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onSubmit() {

    var text = this.postForm.controls['textForm'].value;
    var image = this.postForm.controls['imageForm'].value;
    var type = this.postForm.controls['type'].value;
    var date = new Date().toUTCString();
    var profilePicture = this.getProfilePicture();
    var zipcode = this.getZipCode();

    const headers = {'content-type': 'application/json'}
    //const body=JSON.stringify(this.postForm.controls['textForm'].value);
    const body = "{\"time\": \"" + date + "\",\"author\": \"" + this.userName + "\",\"type\": \"" + type + "\",\"text\": \"" + text + "\",\"profilePicture\": \"string\",\"image\": \"" + image + "\",\"zipCode\": 0,\"claimant\": 0}";
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
