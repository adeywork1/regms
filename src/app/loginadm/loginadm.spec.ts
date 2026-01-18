import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginadm } from './loginadm';

describe('Loginadm', () => {
  let component: Loginadm;
  let fixture: ComponentFixture<Loginadm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginadm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginadm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
