import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  @Input()
  public title:string;
  @Input()
  public subtitle:string;
  @Input()
  public content:string;

  // Use the bootstrap css class
  @Input()
  public bgCssClass:string;

  constructor() {
    
   }

  ngOnInit() {
  
  }

}
