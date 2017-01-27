/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommenttreeComponent } from './commenttree.component';

describe('CommenttreeComponent', () => {
  let component: CommenttreeComponent;
  let fixture: ComponentFixture<CommenttreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommenttreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommenttreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
