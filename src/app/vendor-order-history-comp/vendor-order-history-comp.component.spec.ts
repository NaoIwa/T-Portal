import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOrderHistoryCompComponent } from './vendor-order-history-comp.component';

describe('VendorOrderHistoryCompComponent', () => {
  let component: VendorOrderHistoryCompComponent;
  let fixture: ComponentFixture<VendorOrderHistoryCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorOrderHistoryCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOrderHistoryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
