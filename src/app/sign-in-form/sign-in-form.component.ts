import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { FormUtils } from './../shared/form.utils';

@Component({
  selector: 'sign-in-form',
  template: 'Sign In Form'
})

export class SignInFormComponent {
  public form: FormGroup;
  public formUtils: FormUtils;

  public constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [null, [ Validators.required, Validators.email ] ],
      password: [null, Validators.required]
    });

    this.formUtils = new FormUtils(this.form);
  }

  public signInUser() {
    console.log('Formulário de SignIn Enviado');
    console.log(this.form.value);
  }
}