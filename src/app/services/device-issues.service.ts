// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface DeviceIssue {
//   issue: string;
//   devices: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class DeviceIssuesService {

//   // private apiUrl = "https://localhost:7031/api/deviceissues"; // Your .NET API URL
//   constructor(private http: HttpClient) { }

//   getDeviceIssues(): Observable<DeviceIssue[]> {
//     return this.http.get<DeviceIssue[]>(this.apiUrl);
//   }
// }





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface DeviceData {
  devices: Device[];
  total: number;
  totalHealthy: number;
  totalUnhealthy: number;
  unhealthyCount: Record<string, number>;
}

interface Device {
  serialNumber: string;
  // Other fields as needed
}

@Injectable({
  providedIn: 'root'
})
export class DeviceIssuesService {
  private apiUrl = 'http://localhost:5003/devicehealth'; 

  constructor(private http: HttpClient) {}

  getDeviceIssues(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }
}



