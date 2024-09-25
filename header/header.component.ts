import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
today:number =Date.now();
title:string | undefined;

constructor(private headerService:HeaderService){}
ngOnInit(): void {
  this.headerService.currentTitle.subscribe(title=>{
    this.title=title;
  } );
}


}
