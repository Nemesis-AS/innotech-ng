import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  checkRollUrl: string = 'https://muskily-multifid-tova.ngrok-free.dev/check-roll';
  submitUserUrl: string = 'https://muskily-multifid-tova.ngrok-free.dev/participants';
  checkUserByFirebase: string = 'https://muskily-multifid-tova.ngrok-free.dev/check-uid';

  constructor(private http: HttpClient) {}

  checkRoll(rollnumber: string): Observable<any> {
    return this.http.post<any>(this.checkRollUrl, { rollnumber });
  }

  submitStudent(data: any): Observable<any> {
    return this.http.post<any>(this.submitUserUrl, data);
  }

  getStudentByFirebaseUid(uid: string): Observable<any> {
    return this.http.post<any>(this.checkUserByFirebase, { uid });
  }

  // isInTeam(uid: string): Observable<any> {
  //   this.http.post<any>(this.checkUserByFirebase, { uid }).subscribe(data => {
  //     if (data.data.)
  //   });
  // }

  // isRegistered(uid: string): Observable<any> {

  // }
}
