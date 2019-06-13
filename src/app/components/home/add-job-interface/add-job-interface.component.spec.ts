import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobInterfaceComponent } from './add-job-interface.component';

describe('AddJobInterfaceComponent', () => {
  let component: AddJobInterfaceComponent;
  let fixture: ComponentFixture<AddJobInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
