import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatenateVideosComponent } from './concatenate-videos.component';

describe('ConcatenateVideosComponent', () => {
  let component: ConcatenateVideosComponent;
  let fixture: ComponentFixture<ConcatenateVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatenateVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatenateVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
