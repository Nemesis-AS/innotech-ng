import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  rootUrl: string = 'http://64.227.131.109:5000';

  checkRollUrl: string = `${this.rootUrl}/check-roll`;
  submitUserUrl: string = `${this.rootUrl}/participants`;
  checkUserByFirebase: string = `${this.rootUrl}/uid`;
  getTeamUrl: string = `${this.rootUrl}/teams`;
  statUrl: string = `${this.rootUrl}/stats`;

  constructor(private http: HttpClient) {}

  checkRoll(rollnumber: string): Observable<any> {
    return this.http.post<any>(this.checkRollUrl, { rollnumber });
  }

  submitStudent(data: any): Observable<any> {
    return this.http.post<any>(this.submitUserUrl, data);
  }

  getStudentByFirebaseUid(uid: string): Observable<any> {
    return this.http.get<any>(this.checkUserByFirebase + '?uid=' + uid, {
      headers: { 'ngrok-skip-browser-warning': '1' },
    });
  }

  isInTeam(uid: string): Observable<boolean> {
    return this.http
      .get<any>(this.checkUserByFirebase + '?uid=' + uid, {
        headers: { 'ngrok-skip-browser-warning': '1' },
      })
      .pipe(map((data) => data.data.team_id !== null));
  }

  isRegistered(uid: string): Observable<any> {
    return this.http
      .get<any>(this.checkUserByFirebase + '?uid=' + uid, {
        headers: { 'ngrok-skip-browser-warning': '1' },
      })
      .pipe(map((data) => data.success));
  }

  getTeam(uid: string): Observable<any> {
    return this.http
      .get<any>(`${this.checkUserByFirebase}?uid=${uid}`, {
        headers: { 'ngrok-skip-browser-warning': '1' },
      })
      .pipe(
        switchMap((res) => {
          const teamId = res.data.team_id;
          // Now call the second API using teamId
          return this.http.get<any>(`${this.getTeamUrl}?team_id=${teamId}`, {
            headers: { 'ngrok-skip-browser-warning': '1' },
          });
        })
      );
  }

  getStats(): Observable<any> {
    return this.http.get<any>(this.statUrl);
  }
}
