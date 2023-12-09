import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiviseurComponent } from './diviseur.component';

describe('DiviseurComponent', () => {
  let component: DiviseurComponent;
  let fixture: ComponentFixture<DiviseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiviseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
