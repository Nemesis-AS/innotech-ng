import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MakeTeamService {
  checkRollUrl: string = 'https://muskily-multifid-tova.ngrok-free.dev/check-roll';
  firebaseUidUrl: string = 'https://muskily-multifid-tova.ngrok-free.dev/check-uid';

  constructor(private http: HttpClient) {}

  getStudentByRoll(roll: string): Observable<any> {
    const mockStudents = [
      { uid: 'uid_2', name: 'Priya Singh', roll: '2200290110023', branch: 'EEE' },
      { uid: 'uid_3', name: 'Aman Verma', roll: '2200290110042', branch: 'ME' },
      { uid: 'uid_4', name: 'Neha Gupta', roll: '2200290110088', branch: 'IT' },
    ];

    return this.http.post<any>(this.checkRollUrl, { rollnumber: roll });
  }

  getStudentByFirebaseUid(uid: string) {
    return this.http.post<any>(this.firebaseUidUrl, { uid });
  }

  submitTeam(payload: any): Observable<any> {
    console.log('Submitted team:', payload);
    return of({ message: 'Team created successfully!' });
  }
}
