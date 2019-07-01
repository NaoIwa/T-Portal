import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSelectionCompComponent } from './dealer-selection-comp.component';

describe('DealerSelectionCompComponent', () => {
  let component: DealerSelectionCompComponent;
  let fixture: ComponentFixture<DealerSelectionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSelectionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSelectionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
