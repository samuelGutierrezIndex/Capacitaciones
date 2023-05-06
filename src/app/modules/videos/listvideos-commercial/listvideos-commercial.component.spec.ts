import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvideosCommercialComponent } from './listvideos-commercial.component';

describe('ListvideosCommercialComponent', () => {
  let component: ListvideosCommercialComponent;
  let fixture: ComponentFixture<ListvideosCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvideosCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvideosCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
