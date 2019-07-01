import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfileCompComponent } from './vendor-profile-comp.component';

describe('VendorProfileCompComponent', () => {
  let component: VendorProfileCompComponent;
  let fixture: ComponentFixture<VendorProfileCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProfileCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProfileCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
