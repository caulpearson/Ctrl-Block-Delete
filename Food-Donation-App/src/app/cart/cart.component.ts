import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  postURL: string = "https://fooddonationapi.azurewebsites.net/Post";
  getByAuthorURL: string = "";

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private appComponent:AppComponent) {}
  userName!: string;

  ngOnInit(): void {
    this.userName = this.appComponent.username;
  }

  cartForm = this.formBuilder.group({
    textForm: this.formBuilder.control(''),
    imageForm: this.formBuilder.control(''),
    typeBox: this.formBuilder.control('')
  })

  onSubmit() {

    console.log(this.userName);

    var text = this.cartForm.controls['textForm'].value;
    var image = this.cartForm.controls['imageForm'].value;
    var type = this.cartForm.controls['typeBox'].value;
    var date = new Date().toUTCString();



    const headers = { 'content-type': 'application/json'}
    //const body=JSON.stringify(this.postForm.controls['textForm'].value);
    const body = "{\"time\": \""+ date +"\",\"author\": \""+ this.userName +"\",\"type\": \""+ type +"\",\"text\": \""+ text +"\",\"profilePicture\": \"string\",\"image\": \""+ image +"\",\"zipCode\": 0,\"claimant\": 0}";
    console.log(body);
    //return this.http.post(this.url + 'people', body,{'headers':headers})
  }

  
}