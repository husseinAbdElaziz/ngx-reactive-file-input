import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReactiveFileInputComponent } from './ngx-reactive-file-input.component';

describe('NgxReactiveFileInputComponent', () => {
  let component: NgxReactiveFileInputComponent;
  let fixture: ComponentFixture<NgxReactiveFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxReactiveFileInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxReactiveFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
