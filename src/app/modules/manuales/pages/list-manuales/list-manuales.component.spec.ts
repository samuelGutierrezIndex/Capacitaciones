import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManualesComponent } from './list-manuales.component';

describe('ListManualesComponent', () => {
  let component: ListManualesComponent;
  let fixture: ComponentFixture<ListManualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListManualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListManualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
