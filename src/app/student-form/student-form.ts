import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';

import { ApiService } from '../api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [SelectModule, FileUploadModule, ReactiveFormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  studentForm!: FormGroup;
  isKiet: boolean | null = null;
  loading = false;
  kietRollNo: number | null = null;
  showForm: boolean = false;

  currentUser: any = null;

  courses = [
    { label: 'Select a course', value: '' },
    ...['B.TECH', 'B.PHARMA', 'M.TECH', 'MCA', 'MBA'].map((c) => ({ label: c, value: c })),
  ];
  branches = [
    { label: 'Select a branch', value: '' },
    ...[
      'CSE',
      'IT',
      'CSE(AIML)',
      'CSE(AI)',
      'CSIT',
      'CS',
      'ECE',
      'EE',
      'AMIA',
      'CSE(CS)',
      'CSE(DS)',
      'EEE',
      'ENCE',
      'ECE(VLSI)',
      'ME',
      'B.PHARMA',
      'MCA',
      'MBA',
      'M.PHARMA',
      'DPharma',
      'KSOP',
    ].map((b) => ({
      label: b,
      value: b,
    })),
  ];

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    // Check if team is already made, if yes, redirect
    // If user exists in DB, redirect to next step
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

      this.apiService.isRegistered(uid).subscribe((res) => {
        if (res) {
          this.apiService.isInTeam(uid).subscribe((isInTeam) => {
            if (isInTeam) {
              this.router.navigateByUrl('/view-team');
              // return;
            } else {
              this.router.navigateByUrl('/team');
            }
          });
        }
      });
    }
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      college: ['', Validators.required],
      course: ['', Validators.required],
      branch: ['', Validators.required],
      year: ['', Validators.required],
      roll: ['', Validators.required],
      // collegeId: [''],
    });
  }

  async onKietChange(event: any) {
    this.isKiet = event.value === 'yes';
    this.showForm = !this.isKiet;
    this.studentForm.reset();
    this.studentForm.enable();
  }

  async onRollSearch() {
    this.loading = true;
    try {
      const roll = this.kietRollNo ?? this.studentForm.get('roll')?.value;
      this.apiService.checkRoll(roll).subscribe((res) => {
        const data = res.data;

        const romanToInt = (r: string): number | null => {
          const map: Record<string, number> = { I: 1, II: 2, III: 3, IV: 4 };
          return map[r] ?? null;
        };

        if (data && typeof data.year === 'string') {
          const norm = data.year.trim().toUpperCase();
          const asRoman = romanToInt(norm);
          if (asRoman !== null) {
            data.year = asRoman;
          } else if (/^\d+$/.test(norm)) {
            data.year = parseInt(norm, 10);
          }
        }

        // normalize branch and ensure it exists in the known branches; if not, use course
        let branchRaw = (data.branch ?? '').toString().trim();
        const branchExists = this.branches.some(
          (b) => b.value.toString().trim().toUpperCase() === branchRaw.toUpperCase()
        );
        if (!branchExists) {
          data.branch = (data.course ?? '').toString().trim().toUpperCase();
        }

        // map common full course names to short forms
        const fullToShort: Record<string, string> = {
          'master of business administration': 'MBA',
          'master in computer applications': 'MCA',
        };

        // let branchRaw = (data.branch ?? '').toString().trim();
        // remove parenthetical parts like "Master of Business Administration (MBA)"
        branchRaw = branchRaw.replace(/\(.*\)/, '').trim();
        const branchKey = branchRaw.toLowerCase();
        // console.log(courseKey);

        if (fullToShort[branchKey]) {
          data.branch = fullToShort[branchKey];
          data.course = fullToShort[branchKey];
        } else {
          data.course = branchRaw; // leave as-is; will be uppercased later when patching
        }

        this.studentForm.patchValue({
          name: data.name,
          email: data.email,
          phone: data.phone,
          college: 'KIET Group of Institutions',
          course: data.course.toUpperCase(),
          branch: data.branch,
          year: data.year,
          roll: roll,
        });

        // Disable only controls that have non-null/non-empty values
        Object.keys(this.studentForm.controls).forEach((key) => {
          const control = this.studentForm.get(key);
          const val = control?.value;
          if (
            val !== null &&
            val !== undefined &&
            !(typeof val === 'string' && val.trim() === '')
          ) {
            control!.disable();
          } else {
            control!.enable();
          }
        });
        this.showForm = true;
        this.loading = false;
      });
    } catch (err) {
      console.error('Error fetching data:', err);
      this.loading = false;
    }
  }

  submit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const user = JSON.parse(localStorage.getItem('INNOTECH_USER_DATA')!);

    const userData = {
      ...this.studentForm.getRawValue(),
      rollnumber: this.studentForm.getRawValue().roll,
      firebase_uid: user.user.uid,
    };

    this.apiService.submitStudent(userData).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.router.navigateByUrl('/team');
      }
    });
  }
}
