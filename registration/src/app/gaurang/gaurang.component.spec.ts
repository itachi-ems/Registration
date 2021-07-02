import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaurangComponent } from './gaurang.component';

describe('GaurangComponent', () => {
  let component: GaurangComponent;
  let fixture: ComponentFixture<GaurangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaurangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaurangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
