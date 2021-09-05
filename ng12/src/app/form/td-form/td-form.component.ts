import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit, AfterViewInit {

  //@ViewChild('form') form!: ElementRef
  @ViewChild('form') form!: NgForm;
  email_value:string = 'ld@g.com';
  fname_value:string = 'lll'
  lname_value:string = 'ddd'
  age_value:string = '20';
  country_value = 'INDIA';
  nickname_value!: string;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.form);
  }

  ngOnInit(): void {
  }

  // Form Action
  printForm(){ 
    console.log(this.form);
  }
  patch(){
    //this.form.patchValue({fname:'Lekhraj'})
    //console.log(a);
  }
  reset(){ 
    this.form.reset();
  }
  inputEmail(e:any){
    this.email_value= e.target.value;
  }
  inputAge(e:any){
    console.log(e);
    this.age_value= e;
  }
}
