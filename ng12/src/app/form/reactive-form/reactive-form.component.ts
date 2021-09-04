import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'fname': new FormControl(null, [Validators.required]),
      'lname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required])
    })
  }

  // Form Action
  printForm(){ 
    console.log(this.form);
  }
  patch(){
    this.form.patchValue({fname:'Lekhraj'})
    console.log(this.form.get('fname'));
  }
  reset(){ 
    this.form.reset()
  }

  items=[
    '1.setValue, patchvalue, reset, getvalue, disable feilds',
    '2.FormGrup, FormGroupname, FormControlName ',
    '3.sync and aysn validator, conditionally add or remove validator',
    '4. FormArray',
    '5. touched, valid, errormessage and styling'
  ]
}
