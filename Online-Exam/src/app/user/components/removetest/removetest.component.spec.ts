import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovetestComponent } from './removetest.component';

describe('RemovetestComponent', () => {
  let component: RemovetestComponent;
  let fixture: ComponentFixture<RemovetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovetestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
