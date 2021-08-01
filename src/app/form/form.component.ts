import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  currentForm: number = 0
  num: number = 1
  arr = new FormArray([new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("0[0-9]{8}")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
    confirmPassword: new FormControl('', Validators.required),
  })])


  password() {
    const password = this.arr.controls[this.currentForm]?.get('password')?.value
    const confirmedPassword = this.arr.controls[this.currentForm]?.get('confirmPassword')?.value
    return password !== confirmedPassword;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  addForm() {
    const form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("0[0-9]{8}")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
      confirmPassword: new FormControl('', Validators.required),
    })
    this.num += 1
    if (this.arr.length < 10) {
      this.arr.push(form)
    }
  }
  delete(i: number){
    this.currentForm = i
    if(i>0){
      this.arr.removeAt(i)
    }
  }

  onSubmit() {
    console.log(this.arr.controls[this.currentForm].value)
  }
}
