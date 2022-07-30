import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeResultsComponent } from './analyze-results.component';

describe('AnalyzeResultsComponent', () => {
  let component: AnalyzeResultsComponent;
  let fixture: ComponentFixture<AnalyzeResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
