import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsroonComponent } from './newsroon.component';

describe('NewsroonComponent', () => {
  let component: NewsroonComponent;
  let fixture: ComponentFixture<NewsroonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsroonComponent]
    });
    fixture = TestBed.createComponent(NewsroonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
