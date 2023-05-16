import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassesComponent } from './ng-classes.component';

describe('NgClassesComponent', () => {
  let component: NgClassesComponent;
  let fixture: ComponentFixture<NgClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgClassesComponent]
    });
    fixture = TestBed.createComponent(NgClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
