import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCreateOrderCompComponent } from './vendor-create-order-comp.component';

describe('VendorCreateOrderCompComponent', () => {
  let component: VendorCreateOrderCompComponent;
  let fixture: ComponentFixture<VendorCreateOrderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCreateOrderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCreateOrderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
