import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';

import { ApiService } from '../api-service';

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

  courses = ['B.TECH', 'B.PHARMA', 'M.TECH', 'MCA', 'MBA'].map((c) => ({ label: c, value: c }));
  branches = ['CSE', 'IT', 'CSE(AI/ML)', 'CSE(AI)', 'CSIT', 'CS', 'ECE', 'EE'].map((b) => ({
    label: b,
    value: b,
  }));

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // const user = JSON.parse(localStorage.getItem("INNOTECH_USER_DATA")!);
    // console.log(user.uid);
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
      collegeId: [''],
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

        this.studentForm.patchValue({
          name: data.name,
          email: data.email,
          phone: data.phone,
          college: 'KIET Group of Institutions',
          course: data.course,
          branch: data.branch,
          year: data.year,
          roll: roll,
        });

        this.studentForm.disable();
        this.showForm = true;
      });
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      this.loading = false;
    }
  }

  submit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const user = JSON.parse(localStorage.getItem("INNOTECH_USER_DATA")!);
    console.log(user.user.uid);

    console.log('Form Submitted:', this.studentForm.getRawValue());

    const userData = {
      ...this.studentForm.getRawValue(),
      rollnumber: this.studentForm.getRawValue().roll,
      firebase_uid: user.user.uid
    };

    this.apiService.submitStudent(userData).subscribe(res => {
      console.log(res);
    });
  }
}
