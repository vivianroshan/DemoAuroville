import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
@HostListener('window:Scroll',['$event'])
export class NavMenuComponent implements OnInit {
  x=new AppComponent;
  title=this.x.title;
  constructor() { }
  tabs=[
    "NATURAL HEALTH",
    "ARTS & CRAFTS",
    "BATH & BODY",
    "CLOTHING & ACCESSORIES",
    "FOOD",
    "HOMEWARE",
    "HOME FRAGRANCES",
    "BOOKS & STATIONERY",
    "STORIES",
    "BLOG"
  ]
  header_variable=false;
  @HostListener("window:scroll")
  scrollfunction(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop>40){
      this.header_variable=true;
    }
    else{
      this.header_variable=false;
    }
  }
  ngOnInit(): void {
  }

}
