import { AfterViewInit, Component, ElementRef, EventEmitter, Optional, Output, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'ngx-reactive-file-input',
  template: `
     <input #inputFile type="file" multiple class="d-none"
          (change)="handleFileChange($event); onChange($any($event.target).value)" (blur)="onTouched()"
          >
  `,
  styles: [
  ]
})
export class NgxReactiveFileInputComponent implements ControlValueAccessor, AfterViewInit {

  @ViewChild('inputFile') fileInput!: ElementRef<HTMLInputElement>;
  @Output() fileChanged: EventEmitter<FileList> = new EventEmitter();

  value!: string;
  files: File[] = [];
  ctrl!: NgControl;

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl,
    readonly elementRef: ElementRef
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
      this.ctrl = this.ngControl;
    }
  }

  handleFileChange(event: Event): void {
    const files = (event.target as HTMLInputElement).files;

    if (files?.length) {
      this.fileChanged.emit(files);
    }
  }

  valueChanged(value: any): void {
    this.onChange(value);
    this.onTouched();
  }

  // CVA implementation
  public onChange = (_: any) => { };
  public onTouched = () => { };

  // register onChange which we will call when the selected value is changed
  // so that the value is passed back to the form model
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // sets the selected value based on the corresponding form model value
  public writeValue(value: any): void {
    this.value = value;
  }



  ngAfterViewInit(): void {
    Object.values(this.elementRef.nativeElement.attributes).forEach((attr: any) => {
      this.fileInput.nativeElement.setAttribute(attr?.name, attr?.value)
    })

  }
}
