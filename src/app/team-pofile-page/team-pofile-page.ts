import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { HomeHeader } from "../home-header/home-header";

@Component({
  selector: 'app-team-pofile-page',
  imports: [TitleCasePipe, HomeHeader],
  templateUrl: './team-pofile-page.html',
  styleUrl: './team-pofile-page.css',
})
export class TeamPofilePage {
  team = {
    team_name: 'Innovators Squad',
    department: 'Engineering & Technology',
    category_name: 'AI Solutions for Automation',
    problem_statement: 'Smart AI-enabled Automation System',
    status: 'registered',
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
}
