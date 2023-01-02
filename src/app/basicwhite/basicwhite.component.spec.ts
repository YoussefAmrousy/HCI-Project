import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicwhiteComponent } from './basicwhite.component';

describe('BasicwhiteComponent', () => {
  let component: BasicwhiteComponent;
  let fixture: ComponentFixture<BasicwhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicwhiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicwhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
