import { Component, OnDestroy, OnInit, TestabilityRegistry } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormValidators } from '../validators/form-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  constructor(private my_validators: FormValidators, private formBuilder: FormBuilder) { }
  subs : Subscription[] =[];

  country_value:any;
  state_value:any;

  ngOnInit(): void {
    this.form = new FormGroup({
      'country': new FormControl('USA', [Validators.required, this.my_validators.validateCountry.bind(this)]),
       state: new FormControl('CA'),
      'age': new FormControl(18, [Validators.required, this.my_validators.validateAgeFeild.bind(this)]),
      'fname': new FormControl(null, [Validators.required, this.my_validators.validateNameFeild.bind(this)]),
      'lname': new FormControl(null, [Validators.required, this.my_validators.validateNameFeild.bind(this)]),
      'email': new FormControl(null, [Validators.required] , [this.my_validators.validateEmail_promise.bind(this)]), // 3rd argument is async vaidator
     
      'exp': this.formBuilder.group({ 
        'technology': this.formBuilder.control(null),
        'skills':  this.formBuilder.array([])  //add control, group, array inside this array...
      })
    });
    console.log(this.form, this.form.get('exp.skills'));

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
    let temp = this.form.get('exp.skills')?.value;
    Array.from(temp).forEach(e => console.log(e))

    //temp = this.form.get('exp.skills.0.skill')?.value; 
    console.log('%c Skill-1','color:green; font-size: larger',this.getSkillAt(0));
   //temp = this.form.get('exp.skills.1.skill')?.value; 
    console.log('%c Skill-2','color:green; font-size: larger',this.getSkillAt(1));
  }

  // FormArray
  getSkillAt(i:number ){ return this.form.get(`exp.skills.${i}.skill`)?.value}

  get skills(): FormArray{return this.form.get('exp.skills')! as FormArray; }
  addSkillControl(){this.skills.push(new FormGroup({'skill':this.formBuilder.control(null)})); }
  deleteSkillControl(i: number){this.skills.removeAt(i); }


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
