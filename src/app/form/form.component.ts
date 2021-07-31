import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {Arr} from "../../Constants/constant";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  num : number = 1
  arr = Arr

  inputForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("0[0-9]{8}")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
    confirmPassword: new FormControl('', Validators.required),

  })



  constructor() {

  }

  ngOnInit(): void {
  }

  addForm() {
    this.num += 1

  }

  onSubmit() {

  }
}
