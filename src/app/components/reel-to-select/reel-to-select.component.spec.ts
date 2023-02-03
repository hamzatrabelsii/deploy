import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelToSelectComponent } from './reel-to-select.component';

describe('ReelToSelectComponent', () => {
  let component: ReelToSelectComponent;
  let fixture: ComponentFixture<ReelToSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelToSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReelToSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
