import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCompComponent } from './vendor-comp.component';

describe('VendorCompComponent', () => {
  let component: VendorCompComponent;
  let fixture: ComponentFixture<VendorCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
