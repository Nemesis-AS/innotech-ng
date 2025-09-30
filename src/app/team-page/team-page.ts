import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MakeTeamService } from '../make-team-service';
import { Select } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { Button } from 'primeng/button';
import { ApiService } from '../api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-page',
  imports: [ReactiveFormsModule, Select, InputTextModule, CheckboxModule, Button],
  templateUrl: './team-page.html',
  styleUrl: './team-page.css',
})
export class TeamPage /* implements OnInit */ {
  makeTeamForm!: FormGroup;
  leader = {
    firebase_uid: 'uid_1',
    name: 'Rohit Sharma',
    roll: '2200290110079',
    branch: 'Computer Science',
    department: 'Computer Science',
  };

  submittedForm = false;

  categories = [
    {
      id: 1,
      name: 'Smart Solutions, Smarter Society',
      problems: ['Web Services', 'Mobile Applications', 'Healthcare'],
    },
    { id: 2, name: 'AI Solutions for Automation', problems: ['Agentic AI', 'Generative AI'] },
    { id: 3, name: 'Automation and Robotics', problems: ['IoT', 'Robotics', 'Image Processing'] },
    {
      id: 4,
      name: 'From Concept to Reality',
      problems: ['Drone Solutions', 'Green Energy', 'EV Solutions'],
    },
    { id: 5, name: 'Start Small, Scale Big', problems: ['Startup Ideas', 'Revenue Generation'] },
    { id: 6, name: 'Gen Z to Budding Engineers', problems: ['First-Year Prototype'] },
    { id: 7, name: 'Creative Visions', problems: ['Poster Design', 'Eco Solutions'] },
  ];

  members: any[] = [];
  previewMode = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private teamService: MakeTeamService,
    private apiService: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // Check if user is logged in & not part of a team
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
        if (isInTeam) {
          this.router.navigateByUrl('/view-team');
          return;
        }
      });

      // this.apiService.getStudentByFirebaseUid(uid).subscribe((student) => {
      //   console.log(student);
      //   this.leader = student.data;
      //   console.log(this.leader);
      // });
    }
  }

  selectedProblems: string[] = [];
  selectedCategoryName: string = '';

  onCategoryChange() {
    const selectedId = this.makeTeamForm.value.category_id;
    const category = this.categories.find((c) => c.id == selectedId);

    this.selectedProblems = category ? category.problems : [];
    this.selectedCategoryName = category ? category.name : '';
  }

  ngOnInit() {
    this.makeTeamForm = this.fb.group({
      team_name: ['', Validators.required],
      category_id: ['', Validators.required],
      problem_statement: ['', Validators.required],
      acknowledged: [false, Validators.requiredTrue],
    });

    // Add leader as first member
    if (typeof localStorage !== 'undefined') {
      const uid = JSON.parse(localStorage.getItem('INNOTECH_USER_DATA')!).user.uid;
      this.apiService.getStudentByFirebaseUid(uid).subscribe((student) => {
        console.log(student);
        this.leader = student.data;
        console.log(this.leader);
        this.members.push(this.leader);

        // this.makeTeamForm = this.fb.group({
        //   team_name: ['', Validators.required],
        //   category_id: ['', Validators.required],
        //   problem_statement: ['', Validators.required],
        //   acknowledged: [false, Validators.requiredTrue],
        // });

        this.cdr.markForCheck();
      });
    }
  }

  get membersArray() {
    return this.makeTeamForm.get('members') as FormArray;
  }

  addMemberByRoll(roll: string) {
    if (!roll) return;

    this.teamService.getStudentByRoll(roll).subscribe((data) => {
      const student = data.data;
      if (!student) {
        this.errorMsg = '❌ No student found with this roll number.';
        return;
      }

      if (this.members.some((m) => m.firebase_uid == student.firebase_uid)) {
        this.errorMsg = '⚠️ This student is already in the team.';
        return;
      }
      if (this.members.length >= 5) {
        this.errorMsg = '🚫 Max 5 members allowed.';
        return;
      }

      if (student.team_id != null) {
        this.errorMsg = 'Student is already in another team!';
        return;
      }

      // this.members.push(student);
      // this.makeTeamForm.patchValue({
      //   members: this.members
      // });

      this.members = [...this.members, student];
      this.errorMsg = '';
      this.cdr.detectChanges();
    });
  }

  removeMember(index: number) {
    if (index === 0) return; // Leader can't be removed
    this.members.splice(index, 1);
  }

  previewTeam() {
    if (this.members.length < 2) {
      this.errorMsg = '👥 Minimum 2 members required.';
      return;
    }
    this.previewMode = true;
  }

  submitTeam() {
    const payload = {
      team_name: this.makeTeamForm.value.team_name,
      category_id: this.makeTeamForm.value.category_id,
      category_name: this.categories[this.makeTeamForm.value.category_id].name,
      problem_statement: this.makeTeamForm.value.problem_statement,
      department: this.leader.branch,
      leader: { ...this.leader, uid: this.leader.firebase_uid },
      members: this.members.slice(1).map((mem) => ({ ...mem, uid: mem.firebase_uid })),
      team_size: this.members.length,
    };

    this.teamService.submitTeam(payload).subscribe((res) => {
      this.makeTeamForm.reset();
      this.members = [this.leader];
      this.previewMode = false;

      this.router.navigateByUrl('/view-team');
    });
  }
}
