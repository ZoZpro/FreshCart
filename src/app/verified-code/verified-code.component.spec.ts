import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedCodeComponent } from './verified-code.component';

describe('VerifiedCodeComponent', () => {
  let component: VerifiedCodeComponent;
  let fixture: ComponentFixture<VerifiedCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiedCodeComponent]
    });
    fixture = TestBed.createComponent(VerifiedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
