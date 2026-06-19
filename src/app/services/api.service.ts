import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private baseUrl = 'http://localhost:8017/api';
  private baseUrl = 'https://physio-backend-fme9.onrender.com/api';

  constructor(private http: HttpClient) {}

  sendAppointment(data: any) {
    return this.http.post(`${this.baseUrl}/appointments`, data, { responseType: 'text' });
  }

  sendContact(data: any) {
    return this.http.post(`${this.baseUrl}/contact`, data, { responseType: 'text' });
  }

  testEmail() {
    return this.http.get(`${this.baseUrl}/test-email`, { responseType: 'text' });
  }
}