import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupCompComponent } from './vendor-signup-comp.component';

describe('VendorSignupCompComponent', () => {
  let component: VendorSignupCompComponent;
  let fixture: ComponentFixture<VendorSignupCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSignupCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSignupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
