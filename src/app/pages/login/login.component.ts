import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    LoginFormComponent,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(
    private loginService: LoginService,
    private toastService: ToastrService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    const { email, password } = this.loginForm.value;
    this.loginService.login(email, password).subscribe({
      next: () => {
        this.toastService.success("Login feito com sucesso");
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.toastService.error(err?.error?.response || "Erro interno - Entre em contato com golatacassistance@gmail.com")
      }
    })
  }
}
