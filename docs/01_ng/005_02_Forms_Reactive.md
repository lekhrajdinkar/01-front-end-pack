- https://chat.deepseek.com/a/chat/s/75474839-971c-4605-b025-6c4fbc1996b3
- https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/ng12/src/app/form/reactive-form/reactive-form.component.ts :point_left:

---
# Reactive Form
## 1. Intro
- complex
- developer has more control.
- **Key concept**
  - **FormGroup**: Tracks the same values and status for a collection of form controls
    - FormGroup-1 (parent) :point_left:
      - FormControl-1
      - FormControl-2
      - ...
      - this.form1.**valueChanges.subscribe**() :point_left:
      - this.form1.**statusChanges.subscribe**() :point_left:
      - FormGroup-2 (child) :point_left:
      - FormArray [ FormControl-1, FormControl-12, ...] :point_left:
      - ...
      - mix and match
  - **FormControl**: Tracks the value and validation status of an individual form control
  - **FormArray**: Tracks the same values and status for an array of form controls
  - **FormBuilder**: `Service` that provides convenient methods for generating controls
    - creates -  FormGroup / formArray
    - fb.group( { })
    - fb.array( [])
    - on template add `formControlName` + [formGroup]="form1"
    - register control with default value, validators chains, etc
      - **Validators** class (not directive like in TD): https://angular.dev/api/forms/Validators

## 2 custom validator  :point_left: :point_left:
  - eg: https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/ng12/src/app/form/validators/form-validators.ts
  - create as service (reactive form approach) > inject it use it. bind this key keyword while registering.
  - implement `validator` | ValidationErrors or null
  - implement `AsyncValidator` | Observable<ValidationErrors | null>
  - create as directive (TD form approach) > provided in NG_VALIDATOR > apply directive.      

## 3. examples
### Example-1
```html
<!-- thats all we we have in here, rest all in TS file-->
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input formControlName="firstName">
      <input formControlName="lastName">
      <button type="submit">Submit</button>
</form>
```


```typescript
@Component({})
export class ProfileComponent 
{
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {    this.createForm();  }

  //========= Create Form ==========
  createForm() 
  {
    //WAY-1 : new contructor
    this.profileForm = new FormGroup({  firstName: new FormControl(''),  lastName: new FormControl('')});
  
    //way-2 : FormBuilder
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]*')] ],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: [''],        city: [''],        state: [''],        zip: ['']     
      })
    });
  }

  //========= Submit ==========
  onSubmit() {     if (this.profileForm.valid) console.log(this.profileForm.value);  }
  
  //========= Accessing Form Controls ==========
  access(){
    const username = this.profileForm.get('username');
    const street = this.profileForm.get('address.street');
    if (username?.invalid && (username?.dirty || username?.touched)) { ... }
  }
  
  //============  Value Changes and Status Changes Observables =====
  // Subscribe to value changes
  this.profileForm.valueChanges.subscribe(value => {
    console.log('Form value changed:', value);
  });
  
  // ======= Subscribe to status changes =======
  this.profileForm.statusChanges.subscribe(status => {
    console.log('Form status changed:', status);
  });
  
  // ============ set and patch ========
  this.profileForm.setValue({  firstName: 'John',  lastName: 'Doe'});
  this.profileForm.patchValue({  firstName: 'John' });
}
```

---
### Example-2 Dynamic Forms with FormArray
- context
  - formArray -- array of FormControls/Formgroup
    - add btn
    - remove btn
    - array items
      - formgroup-1 [ FormControl-1, FormControl-2, ...]
      - formgroup-2 [ FormControl-1, FormControl-2, ...]
      - ...

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  ...
  ...
  <!--Array < item: skillName, skilllevel, yearOfExp >--> 
  <div formArrayName="skills" >
    
    <!-- Controls to add/remove from array-->
    <button type="button" (click)="addSkill()">Add Skill</button>
    <button type="button" (click)="removeSkill(i)" >Remove</button>
    
    <!--controls / items-->
    <div *ngFor="let skill of skills.controls; let i = index" [formGroupName]="i" >  <!-- HERE -->
        <input type="text" formControlName="name" > <!-- formControlName -->
     
        <select formControlName="level" > <!-- formControlName -->
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <input type="number" formControlName="years" > <!-- formControlName -->
    </div>
  </div>
</form>
```

```typescript
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
        'skills':  this.formBuilder.array([])   // array og FormGroup, intially Empty.
      })
    });
   }
   
  // FormArray
  get skills(): FormArray { return this.form.get('exp.skills')! as FormArray; }
  
  getSkillAt(i:number ){ return this.form.get(`exp.skills.${i}.skill`)?.value}
  
  addSkillControl(name,level,year)
  {
      const tempGroup = this.formBuilder.group({
        new FormControl('name': name),
        new FormControl('level': level),
        new FormControl('year': year)
      });
      this.skills.push(new FormGroup({ 'skill': tempGroup})  ); 
  }
  
  deleteSkillControl(i: number){this.skills.removeAt(i); }
```

---
### Example-3:  Create custom formControl and register to formGroup
