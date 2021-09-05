import { Component, OnDestroy, OnInit, TestabilityRegistry } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormValidators } from '../validators/form-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  constructor(private my_validators: FormValidators) { }
  subs : Subscription[] =[];

  country_value:any;

  ngOnInit(): void {
    this.form = new FormGroup({
      'country': new FormControl('US', [Validators.required, this.my_validators.validateCountry.bind(this)]),
      'age': new FormControl(18, [Validators.required, this.my_validators.validateAgeFeild.bind(this)]),
      'fname': new FormControl(null, [Validators.required, this.my_validators.validateNameFeild.bind(this)]),
      'lname': new FormControl(null, [Validators.required, this.my_validators.validateNameFeild.bind(this)]),
      'email': new FormControl(null, [Validators.required] , [this.my_validators.validateEmail_promise.bind(this)]) // 3rd argument is async vaidator
    });
    console.log(this.form);

    // this.form = new FormGroup({
    //   'age': new FormControl(18, [Validators.required]),
    //   'fname': new FormControl(null, [Validators.required]),
    //   'lname': new FormControl(null, [Validators.required]),
    //   'email': new FormControl(null, [Validators.required]) // 3rd argument is async vaidator
    // });

    //Manually subscribe to async validator
    // const sub = this.my_validators.validateEmail_obs(this.form.get('email')!)
    // .subscribe(
    //   d => {  console.log(d); } )
    //   this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  // Form Action
  printForm(){ 
    console.log(this.form);
  }
  patch(){
    this.form.patchValue({fname:'Lekhraj', email:'abc@xyz.com'})
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
