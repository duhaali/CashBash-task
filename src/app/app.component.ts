import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  twit;
  constructor (private http: HttpClient) {}
  twitclick() {
    console.log(this.twit);
   this.http.post('/tweet', {text: this.twit})
   .subscribe(data => {
    console.log(data);
  });
  }
}
