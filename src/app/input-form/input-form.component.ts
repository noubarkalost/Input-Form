import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  inputForm = new FormGroup({
    name : new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

}
