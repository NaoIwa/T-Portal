import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerOrderHistoryCompComponent } from './dealer-order-history-comp.component';

describe('DealerOrderHistoryCompComponent', () => {
  let component: DealerOrderHistoryCompComponent;
  let fixture: ComponentFixture<DealerOrderHistoryCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerOrderHistoryCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerOrderHistoryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
