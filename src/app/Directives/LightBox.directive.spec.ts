import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { LightBoxDirective } from './LightBox.directive';
import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';

// Create a test component that uses the LightBoxDirective
@Component({
  template: '<div LightBox></div>'
})
class TestComponent { }

describe('Directive: LightBox', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LightBoxDirective, TestComponent]
    }).compileComponents(); // Compile components
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.nativeElement.querySelector('[LightBox]');
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create an instance of the directive', () => {
    expect(directive).toBeTruthy();
  });

  // Add more test cases as needed
});
