import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedpantsComponent } from './mixedpants.component';

describe('MixedpantsComponent', () => {
  let component: MixedpantsComponent;
  let fixture: ComponentFixture<MixedpantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedpantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedpantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
