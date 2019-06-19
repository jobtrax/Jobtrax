import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsGraphInterfaceComponent } from './jobs-graph-interface.component';

describe('JobsGraphInterfaceComponent', () => {
  let component: JobsGraphInterfaceComponent;
  let fixture: ComponentFixture<JobsGraphInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsGraphInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsGraphInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
