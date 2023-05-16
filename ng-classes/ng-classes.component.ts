import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-classes',
  templateUrl: './ng-classes.component.html',
  styleUrls: ['./ng-classes.component.css']
})
export class NgClassesComponent {
  check = false;

  myfunction() {
    this.check = !this.check;

}
}
