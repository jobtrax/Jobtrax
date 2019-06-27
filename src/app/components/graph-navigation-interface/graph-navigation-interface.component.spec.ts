import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNavigationInterfaceComponent } from './graph-navigation-interface.component';

describe('GraphNavigationInterfaceComponent', () => {
  let component: GraphNavigationInterfaceComponent;
  let fixture: ComponentFixture<GraphNavigationInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphNavigationInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNavigationInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
