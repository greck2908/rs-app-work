import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreckComponent } from './greck.component';

describe('GreckComponent', () => {
  let component: GreckComponent;
  let fixture: ComponentFixture<GreckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
