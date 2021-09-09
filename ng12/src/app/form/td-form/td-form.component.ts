import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';
import { PlaceHolderDirective } from 'src/app/directives/place.holder.dir';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit, AfterViewInit {

  @ViewChild(PlaceHolderDirective) alertHost!: PlaceHolderDirective;

  //@ViewChild('form') form!: ElementRef
  @ViewChild('form') form!: NgForm;
  email_value:string = 'ld@g.com';
  fname_value:string = 'lll'
  lname_value:string = 'ddd'
  age_value:string = '20';
  country_value = 'INDIA';
  nickname_value!: string;
  nickname2_value: string = "Benu";

  constructor(private compFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    console.log(this.form);
  }

  ngOnInit(): void {
  }

  // Form Action
  printForm(){ 
    console.log(this.form);
    new AlertComponent()
  }

  // info: Called on reset
  showAlert(){
    const pointOnDom = this.alertHost.viewContainerRef;
    pointOnDom.clear();
    const cf = this.compFactoryResolver.resolveComponentFactory(AlertComponent);
    const compRef = pointOnDom.createComponent(cf);
    compRef.instance.closeEvent.subscribe( (_:any) => { pointOnDom.clear();});
    compRef.instance.message = " My custom message passed via @Input to Dynamic AlertComponent"
  }

  patch(){
    //this.form.patchValue({fname:'Lekhraj'})
    //console.log(a);
  }
  reset(){ 
    this.form.reset();
    this.showAlert();
  }
  inputEmail(e:any){
    this.email_value= e.target.value;
  }
  inputAge(e:any, ngModel: NgModel){
    console.log(e);
    this.age_value= e;

    const formGroup = this.form.form;
    //const formContol = formGroup?.get('lname');
    const formContol = formGroup.controls.lname;
    console.log(this.form, formGroup, formContol, ngModel);
    formContol?.setValue('dinkar');
  }
}


@Component({
  selector: 'app-alert',
  template: `
  <div class="backdrop">
    <div class="backdrop--msg" >
      <h2>Alert!</h2>
      <p> {{message}} </p>
      <button (click)="closeEvent.next({})"> close </button>
    <div>
  </div>
  `,
  styleUrls: ['./td-form.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message ='';
  @Output() closeEvent = new EventEmitter<any>();

  ngOnInit(): void { }

}