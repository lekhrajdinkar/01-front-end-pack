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

  @Input() label!: string;

  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {}

  onNewInput(newValue:any){ this.valueChange.emit(newValue.target.value) }

   _ = (v: any) => {};
  writeValue(obj: any): void {
    this._(obj);
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this._ = fn;
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }

}

