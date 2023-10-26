import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../service/customer/customer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css'],
  providers: [DatePipe],
})
export class PersonalProfileComponent implements OnInit {
  id: any = 1;
  changeProForm: FormGroup;
  ButtonSave: any;
  originalData: any;
  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private cS: CustomerService
  ) {
    this.changeProForm = this.formBuilder.group({
      fullName: [''],
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      phoneNumber: [''],
    });
  }

  ngOnInit(): void {
    this.cS.getCustomerById(this.id).subscribe(
      (response: any) => {
        this.originalData = response;

        const formattedDate = this.datePipe.transform(
          response.dateOfBirth,
          'yyyy-MM-dd'
        );
        const fullName = this.combineFullName(
          response.firstName,
          response.lastName
        );
        // Tạo một đối tượng mới với fullName đã ghép
        const updatedResponse = {
          ...response,
          dateOfBirth: formattedDate,
          fullName: fullName,
        };
        this.changeProForm.patchValue(updatedResponse);
        const fullNameControl = this.changeProForm.get('fullName');
        if (fullNameControl) {
          fullNameControl.disable();
        }
      },
      (error) => {
        console.log(error);
        // Xử lý lỗi, ví dụ hiển thị thông báo lỗi cho người dùng
      }
    );
  }
  combineFullName(firstName: string, lastName: string): string {
    return `${lastName} ${firstName}`;
  }
  fnCancel() {
    const dateOfBirth = new Date(this.originalData.dateOfBirth);
    const formattedDate = this.datePipe.transform(dateOfBirth, 'yyyy-MM-dd');

    const updatedData = {
      ...this.originalData,
      dateOfBirth: formattedDate,
    };

    this.changeProForm.patchValue(updatedData);
  }

  fnUpdateProfile() {
    const ProfileInfo = {
      firstName: this.changeProForm.value.firstName,
      lastName: this.changeProForm.value.lastName,
      dateOfBirth: this.changeProForm.value.dateOfBirth,
      phoneNumber: this.changeProForm.value.phoneNumber,
    };

    this.cS.updateProfile(this.id, ProfileInfo).subscribe(
      (response) => {
        console.log('Successfully updated Profile!');
        alert('Successfully updated Profile!');
        const updatedFullName = this.combineFullName(
          this.changeProForm.value.firstName,
          this.changeProForm.value.lastName
        );
        this.changeProForm.patchValue({ fullName: updatedFullName });
      },
      (error) => {
        console.error('Failed to update Profile:', error);
      }
    );
  }
}
