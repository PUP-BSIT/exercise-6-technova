import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetManager } from './pet-manager';

describe('PetManager', () => {
  let component: PetManager;
  let fixture: ComponentFixture<PetManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
