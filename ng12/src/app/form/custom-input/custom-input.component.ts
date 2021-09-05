import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting:CustomInputComponent,
    multi:true
  }]
})
export class CustomInputComponent implements OnInit , ControlValueAccessor{

  // Pattern : xxx + xxxChange.
  // Needed for 2 way Binding.

  @Input() name!: string;
  @Input() label!: string;

  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {}

  onNewInput(e:any){ 
    const new_value = e.target.value;
    this.valueChange.emit(new_value);
    this.writeValue(new_value); // IMPORTANT
   }

  //=============================

  registerOnTouched_cb = (v: any) => {};
  registerOnChange_cb = (v: any) => {};

  writeValue(obj: string): void {
    this.registerOnChange_cb(obj);
  }
  registerOnChange(fn: any): void {
    this.registerOnChange_cb = fn;
  }
  registerOnTouched(fn: any): void {
    this.registerOnTouched_cb = fn;
  }

}

