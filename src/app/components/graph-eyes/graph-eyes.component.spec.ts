import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEyesComponent } from './graph-eyes.component';

describe('GraphEyesComponent', () => {
  let component: GraphEyesComponent;
  let fixture: ComponentFixture<GraphEyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphEyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
