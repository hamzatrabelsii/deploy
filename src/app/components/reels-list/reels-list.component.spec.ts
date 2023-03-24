import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelsListComponent } from './reels-list.component';

describe('ReelsListComponent', () => {
  let component: ReelsListComponent;
  let fixture: ComponentFixture<ReelsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
