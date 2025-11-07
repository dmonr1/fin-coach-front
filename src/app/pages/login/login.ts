import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastNotification } from '../../components/toast-notification/toast-notification';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastNotification],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit, OnDestroy {

  @ViewChild('toast') toast!: ToastNotification;

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  seconds = 240;
  interval: any;
  hasWarned = false;

  captchaText = '';
  isRegisterMode = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'register') {
        this.isRegisterMode = true;
        clearInterval(this.interval); 
      } else {
        this.isRegisterMode = false;
        this.resetTimer(); 
      }
    });

    this.generateCaptcha();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  goToRegister() {
    this.isRegisterMode = true;
    clearInterval(this.interval);
    this.registerForm.reset();
  }

  goToLogin() {
    this.isRegisterMode = false;
    this.resetTimer();
  }

  generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    this.captchaText = Array.from({ length: 5 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');

    this.loginForm.get('captcha')?.setValue('');
  }

  goBack() {
    this.router.navigate(['/']);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.seconds = 240;
    this.hasWarned = false;

    this.interval = setInterval(() => {
      this.seconds--;

      if (this.seconds === 10 && !this.hasWarned) {
        this.hasWarned = true;
        this.toast.show('10 segundos para completar el acceso', 'warning');
      }

      if (this.seconds <= 0) this.goBack();
    }, 1000);
  }

  login() {
    const inputCaptcha = (this.loginForm.value.captcha || '').trim().toUpperCase();
    const correctCaptcha = this.captchaText.toUpperCase();

    if (inputCaptcha !== correctCaptcha) {
      this.toast.show('Código captcha incorrecto', 'error');
      this.generateCaptcha();
      return;
    }

    this.toast.show('Acceso correcto', 'success');
    this.router.navigate(['/inicio']);
  }


  register() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.toast.show('Las contraseñas no coinciden', 'error');
      return;
    }

    console.log("Nuevo usuario:", this.registerForm.value);
    this.toast.show('Cuenta creada correctamente', 'success');
    this.goToLogin();
  }

  loginGoogle() {
    this.toast.show('Login con Google pronto...', 'info');
  }
}
