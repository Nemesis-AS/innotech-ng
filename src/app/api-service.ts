import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  checkRollUrl: string = 'https://muskily-multifid-tova.ngrok-free.dev/check-roll';
  submitUserUrl: string = 'https://muskily-multifid-tova.ngrok-free.dev/participants';

  constructor(private http: HttpClient) {}

  checkRoll(rollnumber: string): Observable<any> {
    return this.http.post<any>(this.checkRollUrl, { rollnumber });
  }

  submitStudent(data: any): Observable<any> {
    return this.http.post<any>(this.submitUserUrl, data);
  }
}
