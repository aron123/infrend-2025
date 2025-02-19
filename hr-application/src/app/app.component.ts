import { Component } from '@angular/core';
import { Applicant, APPLICANTS_LIST } from './applicants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  applicants: Applicant[] = APPLICANTS_LIST;

  formVisible: boolean = false;

  newApplicant: Applicant = this.defaultApplicant();

  constructor() {
    console.log(this.applicants);
  }

  removeApplicant(applicant: Applicant) {
    const idx = this.applicants.indexOf(applicant);
    if (idx > -1) {
      this.applicants.splice(idx, 1);
    }
  }

  showForm() {
    this.formVisible = true;
  }

  defaultApplicant(): Applicant {
    return {
      id: 0,
      name: '',
      role: '',
      experience: '0-5',
      desiredSalary: 500000
    };
  }

  saveApplicant() {
    this.newApplicant.id = this.applicants.length;
    this.applicants.push(this.newApplicant);
    this.newApplicant = this.defaultApplicant();
    this.formVisible = false;
  }
}
