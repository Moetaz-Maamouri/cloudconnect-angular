import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-insecription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './insecription.html',
  styleUrl: './insecription.css'
})
export class Insecription implements OnInit, OnDestroy {
  signInForm!: FormGroup;
  signUpForm!: FormGroup;
  showSignUp = false;
  showPassword = false;
  private modalSubscription: Subscription;

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.modalSubscription = this.modalService.activeModal$.subscribe(modalType => {
      this.showSignUp = modalType === 'signup';
    });
  }

  ngOnInit() {
    this.initSignInForm();
    this.initSignUpForm();
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  private initSignInForm() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  private initSignUpForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  toggleForm() {
    this.showSignUp = !this.showSignUp;
    this.showPassword = false;

    // Reset forms when switching
    if (this.showSignUp) {
      this.signInForm.reset();
    } else {
      this.signUpForm.reset();
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    if (this.signInForm.valid) {
      console.log('Sign In Form:', this.signInForm.value);
      // Implement your sign in logic here
      // this.authService.signIn(this.signInForm.value)...
    }
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      console.log('Sign Up Form:', this.signUpForm.value);
      // Implement your sign up logic here
      // this.authService.signUp(this.signUpForm.value)...
    }
  }
}
