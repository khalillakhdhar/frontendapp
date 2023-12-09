import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcdComponent } from './pgcd.component';

describe('PgcdComponent', () => {
  let component: PgcdComponent;
  let fixture: ComponentFixture<PgcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgcdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
