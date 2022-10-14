import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usefull-component',
  templateUrl: './usefull-component.component.html',
  styleUrls: ['./usefull-component.component.scss'],
})
export class UsefullComponentComponent implements OnInit {
  public formG: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formG = fb.group({
      username: '',
    });
  }

  ngOnInit(): void {}
}
