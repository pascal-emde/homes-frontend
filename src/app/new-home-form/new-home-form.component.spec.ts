import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomeFormComponent } from './new-home-form.component';

describe('NewHomeFormComponent', () => {
  let component: NewHomeFormComponent;
  let fixture: ComponentFixture<NewHomeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewHomeFormComponent]
    });
    fixture = TestBed.createComponent(NewHomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
