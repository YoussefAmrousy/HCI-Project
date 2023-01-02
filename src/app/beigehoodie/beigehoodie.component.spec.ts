import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeigehoodieComponent } from './beigehoodie.component';

describe('BeigehoodieComponent', () => {
  let component: BeigehoodieComponent;
  let fixture: ComponentFixture<BeigehoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeigehoodieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeigehoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
