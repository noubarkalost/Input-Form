import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputForm = this.formBuild.group({
    name: this.formBuild.control('', [
      Validators.required,
      Validators.minLength(3)]),
    lastName: this.formBuild.control('', [
      Validators.required,
      Validators.minLength(3)]),
    phoneNumber: this.formBuild.control('', [Validators.required, Validators.pattern("0[0-9]{8}")]),
    email: this.formBuild.control('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
    password: this.formBuild.control('', [Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
    confirmPassword: this.formBuild.control('', [Validators.required]),

  })

  constructor(private formBuild: FormBuilder) {

  }

  ngOnInit(): void {
  }

  onSubmit() {


  }
}
