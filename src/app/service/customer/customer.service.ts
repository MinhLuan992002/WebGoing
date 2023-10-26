import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLoginDTO } from 'src/app/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/v0/customers';

  constructor(private http: HttpClient) {}

  getCustomerById(id: any) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  updateProfile(id: any, category: any): Observable<any> {
    const url = `${this.baseUrl}/profile/${id}`;
    return this.http.put(url, category, { responseType: 'text' });
  }
  login(customerLogin: CustomerLoginDTO): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, customerLogin, { responseType: 'text' });
  }
}
