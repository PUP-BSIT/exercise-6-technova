import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRecordManager } from './car-record-manager';

describe('CarRecordManager', () => {
  let component: CarRecordManager;
  let fixture: ComponentFixture<CarRecordManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRecordManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRecordManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
