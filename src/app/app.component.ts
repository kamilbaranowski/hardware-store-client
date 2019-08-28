import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient, private router: Router){

  }
  title = 'hardware-store-client';


  loginPage(){
    this.router.navigateByUrl("/products");
  }

}