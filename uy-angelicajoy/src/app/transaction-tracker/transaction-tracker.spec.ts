import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTracker } from './transaction-tracker';

describe('TransactionTracker', () => {
  let component: TransactionTracker;
  let fixture: ComponentFixture<TransactionTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
