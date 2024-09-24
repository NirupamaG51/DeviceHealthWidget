import { Component, OnInit } from '@angular/core';

interface DeviceIssue {
  issue: string;
  devices: number;
}

@Component({
  selector: 'app-device-issues-table',
  templateUrl: './device-issues-table.component.html',
  styleUrls: ['./device-issues-table.component.scss']
})
export class DeviceIssuesTableComponent implements OnInit {
  deviceIssues: DeviceIssue[] = [];

  constructor() {}

  ngOnInit(): void {
    this.deviceIssues = [
      { issue: 'Overdue for Check-In', devices: 14 },
      { issue: 'Camera Issue', devices: 8 },
      { issue: 'No Vehicle', devices: 5 },
      { issue: 'Wrong Status', devices: 5 },
      { issue: 'Power Issue', devices: 2 },
      { issue: 'SD Card Issue', devices: 1 }
    ];
  }

    getIssueClass(issue: string): string {
    if (issue === 'Overdue for Check-In' || issue === 'Power Issue' || issue === 'SD Card Issue') {
      return 'red';
    } else {
      return 'orange';
    }
  }

}






  // getIssueClass(issue: string): string {
  //   return issue.includes('Issue') ? 'red' : 'orange';
  // }


  // getIssueClass(issue: DeviceIssue): string {
  //   if (issue.devices >= 10) {
  //     return 'red'; 
  //   } else if (issue.devices >= 5) {
  //     return 'orange'; 
  //   } else {
  //     return 'green'; 
  //   }