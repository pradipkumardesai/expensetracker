import { Component, OnInit } from '@angular/core';
import { DataaccessService } from './services/data-access/data-access.service';

@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private configService:DataaccessService){}

  lst:string;

  ngOnInit(): void {
   
  }
  title = 'exp';
}


