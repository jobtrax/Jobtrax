import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureApplicationsComponent } from './future-applications.component';

describe('FutureApplicationsComponent', () => {
  let component: FutureApplicationsComponent;
  let fixture: ComponentFixture<FutureApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
