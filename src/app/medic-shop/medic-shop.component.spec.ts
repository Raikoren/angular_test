import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicShopComponent } from './medic-shop.component';

describe('MedicShopComponent', () => {
  let component: MedicShopComponent;
  let fixture: ComponentFixture<MedicShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
