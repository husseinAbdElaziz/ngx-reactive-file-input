import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form!: FormGroup;


  files!: FileList;

  constructor(readonly fb: FormBuilder) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      attachment: ['', [Validators.required]]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  submit(): void {
    // alert(this.form.value)
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    console.log(this.files);
    console.log(this.form.value);

  }
}
