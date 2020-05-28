import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicViewComponent } from './medic-view.component';

describe('MedicViewComponent', () => {
  let component: MedicViewComponent;
  let fixture: ComponentFixture<MedicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
