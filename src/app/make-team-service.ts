import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MakeTeamService {
  rootUrl: string = "https://innotech.kiet.edu/api";

  checkRollUrl: string = `${this.rootUrl}/check-roll`;
  firebaseUidUrl: string = `${this.rootUrl}/uid`;
  rollNoUrl: string = `${this.rootUrl}/rollno`;
  submitTeamUrl: string = `${this.rootUrl}/teams`;

  constructor(private http: HttpClient) {}

  getStudentByRoll(roll: string): Observable<any> {
    return this.http.get<any>(this.rollNoUrl + '?rollno=' + roll, { headers: {"ngrok-skip-browser-warning": "1"} });
  }

  getStudentByFirebaseUid(uid: string) {
    return this.http.get<any>(this.firebaseUidUrl + '?uid=' + uid, { headers: {"ngrok-skip-browser-warning": "1"} });
  }

  submitTeam(payload: any): Observable<any> {
    // const team = {
    //   team_name:
    //   leader: {
    //     uid:
    //     name:
    //     rollnumber:
    //     branch
    //   },
    //   members: [],
    //   team_size: interface,
    //   category_id:
    //   category_name:
    //   problem_statement:
    //   department:
    // }

    this.http.post<any>(this.submitTeamUrl, payload).subscribe(res => {
      if (res.success) {
        console.log('Submitted team:', res);
      }
    });
    return of({ message: 'Team created successfully!' });
  }
}
