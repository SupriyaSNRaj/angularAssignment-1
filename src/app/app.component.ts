import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment-1';

  existingEmployeeDetails: object[] = [
    {
      code: 1001,
      name: 'Supriya',
      gender: 'Female',
      salary: 55000,
      dob: '1999-06-28',
    },
    {
      code: 1002,
      name: 'Santosh',
      gender: 'Male',
      salary: 90000,
      dob: '1989-03-14',
    },
    {
      code: 1003,
      name: 'Sneha',
      gender: 'Female',
      salary: 80000,
      dob: '1993-01-12',
    },
  ];

  newEmployeeDetails: {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: Date;
  }[] = [];

  employee(employeeInfo: {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: Date;
  }) {
    if (employeeInfo.salary > 0) {
      console.log(
        employeeInfo.code +
          ' ' +
          employeeInfo.name +
          ' ' +
          employeeInfo.gender +
          ' ' +
          employeeInfo.salary +
          ' ' +
          employeeInfo.dob
      );
      this.newEmployeeDetails.push(employeeInfo);
    } else {
      alert('salary should be greater than zero');
    }
  }
}
