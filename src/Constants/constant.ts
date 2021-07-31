import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

export const   Arr = new FormArray ([new FormGroup({
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
}),new FormGroup({
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
}
),
  new FormGroup({
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
}),new FormGroup({
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
}),new FormGroup({
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
}),new FormGroup({
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
}),new FormGroup({
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
}),new FormGroup({
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
