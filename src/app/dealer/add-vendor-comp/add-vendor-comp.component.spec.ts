import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorCompComponent } from './add-vendor-comp.component';

describe('AddVendorCompComponent', () => {
  let component: AddVendorCompComponent;
  let fixture: ComponentFixture<AddVendorCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVendorCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
