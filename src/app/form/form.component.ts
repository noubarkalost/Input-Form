import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Arr} from "../../Constants/constant";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  num : number = 1
  arr = Arr




  password(i: number) {
    const password = this.arr.controls[i].get('password')?.value
    const  confirmedPassword  = this.arr.controls[i].get('confirmPassword')?.value
    console.log(password)
    return password === confirmedPassword ? false :  true ;
  }

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
