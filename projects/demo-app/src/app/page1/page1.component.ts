import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit{
  

  page1 = 'loading...';

  ngOnInit() {
    setTimeout(()=>{
      this.page1 = 'PAGE 1';
    },5000);
  }
}
