import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesAbRecComponent } from './meses-ab-rec.component';

describe('MesesAbRecComponent', () => {
  let component: MesesAbRecComponent;
  let fixture: ComponentFixture<MesesAbRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesesAbRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesesAbRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
