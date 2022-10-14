import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterControlComponent),
      multi: true,
    },
  ],
})
export class CounterControlComponent implements ControlValueAccessor {
  private _value;

  get value() {
    return this._value;
  }

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  onChange(_: any) {}

  up() {
    this.value++;
  }

  down() {
    this.value--;
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched() {}
}
