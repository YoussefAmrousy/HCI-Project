import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulloutfitComponent } from './fulloutfit.component';

describe('FulloutfitComponent', () => {
  let component: FulloutfitComponent;
  let fixture: ComponentFixture<FulloutfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulloutfitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulloutfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
