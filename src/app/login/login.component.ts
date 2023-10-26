import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer/customer.service';

export interface CustomerLoginDTO {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customS: CustomerService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const customerLogin = this.loginForm.value;

    this.customS.login(customerLogin).subscribe(
      (token) => {
        // Đăng nhập thành công, bạn có thể lưu token vào localStorage hoặc cookie và thực hiện các tác vụ khác
        console.log('Đăng nhập thành công - Token:', token);
      },
      (error) => {
        // Đăng nhập thất bại, xử lý lỗi hoặc hiển thị thông báo lỗi cho người dùng
        console.error('Đăng nhập thất bại:', error);
      }
    );
  }
}
