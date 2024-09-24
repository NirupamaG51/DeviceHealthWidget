// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { DeviceIssuesService } from '../services/device-issues.service';




// interface DeviceIssue {
//   issue: string;
//   devices: number;
// }

// @Component({
//   selector: 'app-device-issues-table',
//   templateUrl: './device-issues-table.component.html',
//   styleUrls: ['./device-issues-table.component.scss']
// })
// export class DeviceIssuesTableComponent implements OnInit {
//   deviceIssues: DeviceIssue[] = [];

//   // constructor(private http: HttpClient) {}

//   constructor(private deviceIssuesService: DeviceIssuesService) { }
//   ngOnInit(): void {
//     this.deviceIssuesService.getDeviceIssues().subscribe((data: DeviceIssue[]) => {
//       this.deviceIssues = data;
//     });
//   }
  // ngOnInit(): void {
  //   this.getDeviceIssues().subscribe((data: DeviceIssue[]) => {
  //     this.deviceIssues = data;
  //   });
  // }

  // getDeviceIssues(): Observable<DeviceIssue[]> {
  //   return this.http.get<DeviceIssue[]>('assets/device-issues.json');
  // }


//   getDeviceIssues(): Observable<DeviceIssue[]> {
//     return this.http.get<DeviceIssue[]>('https://localhost:7031/api/deviceissues'); 
// }

  

//   getIssueClass(issue: string): string {
//     if (issue === 'Overdue for Check-In' || issue === 'Power Issue' || issue === 'SD Card Issue') {
//       return 'red';
//     } else {
//       return 'orange';
//     }
//   }
// }










import { Component, OnInit } from '@angular/core';
import { DeviceIssuesService } from '../services/device-issues.service';

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

  constructor(private deviceIssuesService: DeviceIssuesService) { }

  ngOnInit(): void {
    const payload = {  };

    this.deviceIssuesService.getDeviceIssues(payload).subscribe((data: any) => {
      this.mapDeviceIssues(data); // Call the mapping function
    });
  }

  mapDeviceIssues(data: any) {
    // Example mapping logic
    const mappedIssues: DeviceIssue[] = [
      { issue: "Overdue for Check-In", devices: data.unhealthyCount.checkInGrade || 0 },
      { issue: "Camera Issue", devices: data.unhealthyCount.ecmDataGrade || 0 },
      { issue: "No Vehicle", devices: data.unhealthyCount.vehicleAssociationGrade || 0 },
      { issue: "Wrong Status", devices: data.unhealthyCount.ignitionGrade || 0 },
      { issue: "Power Issue", devices: data.unhealthyCount.powerIssue || 0 },
      { issue: "SD Card Issue", devices: data.unhealthyCount.sdCardHealthGrade || 0 }
    ];

    this.deviceIssues = mappedIssues;
  }

  getIssueClass(issue: string): string {
    if (issue === 'Overdue for Check-In' || issue === 'Power Issue' || issue === 'SD Card Issue') {
      return 'red';
    } else {
      return 'orange';
    }
  }
}