import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  title: string='This is the main title';
  constructor(){}
  ngOnInit(): void{

  }


}
