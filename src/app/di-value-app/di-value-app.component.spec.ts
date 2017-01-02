/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiValueAppComponent } from './di-value-app.component';

describe('DiValueAppComponent', () => {
  let component: DiValueAppComponent;
  let fixture: ComponentFixture<DiValueAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiValueAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiValueAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
