import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SptComponent } from './spt.component';

describe('SptComponent', () => {
  let component: SptComponent;
  let fixture: ComponentFixture<SptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
