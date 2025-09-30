import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service';
// import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-team-pofile-page',
  //imports: [TitleCasePipe],
  templateUrl: './team-pofile-page.html',
  styleUrl: './team-pofile-page.css',
})
export class TeamPofilePage {
  // team = {
  //   team_name: 'Innovators Squad',
  //   department: 'Engineering & Technology',
  //   category_name: 'AI Solutions for Automation',
  //   problem_statement: 'Smart AI-enabled Automation System',
  //   status: 'registered',
  // };

  team = {
    _id: '68dbc075737117399eeca31b',
    team_name: 'Test',
    leader: {
      uid: 'mnpc9gj8b2gAujxfqpq1a6xh5dz1',
      name: 'AKSHAT SHUKLA',
      rollnumber: '2300290100030',
      branch: 'CSE',
    },
    members: [
      {
        uid: 'eSpbBpACs0OcGppymq8KzlcJYw53',
        name: 'HIMANK GUPTA',
        rollnumber: '2200290110079',
        branch: 'CSIT',
      },
    ],
    team_size: 2,
    category_id: 2,
    problem_statement: 'Agentic AI',
    department: 'CSE',
    qualified_for_institute: false,
    departmental_final_score: 0,
    college_final_score: 0,
    status: 'active',
    departmental_scores: [],
    college_scores: [],
    createdAt: '2025-09-30T11:35:17.709Z',
    updatedAt: '2025-09-30T11:35:17.709Z',
    team_id: 3499,
    __v: 0,
  };

  leader = {
    name: 'Abhishek Tyagi',
    student_identifier: '21CS101',
    branch: 'CSE',
    year: 4,
    college: 'KIET Group of Institutions',
    email: 'abhishek@kiet.edu',
    phone: '+91 99999 99999',
    role_in_team: 'Leader',
  };

  members = [
    this.leader,
    {
      name: 'Neha Sharma',
      student_identifier: '21CS102',
      branch: 'CSE',
      year: 4,
      college: 'KIET Group of Institutions',
      email: 'neha@kiet.edu',
      phone: '+91 98765 43210',
      role_in_team: 'Member',
    },
    {
      name: 'Rohit Verma',
      student_identifier: '21CS103',
      branch: 'IT',
      year: 4,
      college: 'KIET Group of Institutions',
      email: 'rohit@kiet.edu',
      phone: '+91 98111 22334',
      role_in_team: 'Member',
    },
  ];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {
    // Check if user is logged in & part of a team, else redirect to given step
    if (typeof localStorage !== 'undefined') {
      if (!localStorage.getItem('INNOTECH_USER_DATA')) {
        this.router.navigateByUrl('/login');
        return;
      }

      const uid = JSON.parse(localStorage.getItem('INNOTECH_USER_DATA')!).user.uid;
      if (!uid) {
        this.router.navigateByUrl('/student');
        return;
      }

      this.apiService.isInTeam(uid).subscribe((isInTeam) => {
        if (!isInTeam) {
          this.router.navigateByUrl('/team');
          return;
        }
      });

      this.apiService.getTeam(uid).subscribe((teamData) => {
        this.team = teamData.data;
        this.leader = teamData.data.leader;
        this.members = [this.leader, ...teamData.data.members];

        console.log(this.team);

        this.cdr.detectChanges();
      });
    }
  }
}
