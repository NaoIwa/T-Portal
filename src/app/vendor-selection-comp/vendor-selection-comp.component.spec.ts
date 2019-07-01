import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSelectionCompComponent } from './vendor-selection-comp.component';

describe('VendorSelectionCompComponent', () => {
  let component: VendorSelectionCompComponent;
  let fixture: ComponentFixture<VendorSelectionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSelectionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSelectionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
