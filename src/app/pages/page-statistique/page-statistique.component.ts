import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { SystemCpu } from 'src/app/interfaces/system-cpu';
import { SystemHealth } from 'src/app/interfaces/system-health';
import { AdminDashboardService } from '../../services/actuactor/admin-dashboard.service';

import { ChartType } from 'src/app/enum/chart-type.enum';


@Component({
  selector: 'app-page-statistique',
  templateUrl: './page-statistique.component.html',
  styleUrls: ['./page-statistique.component.css']
})
export class PageStatistiqueComponent implements OnInit {
  public traceList: any[] = [];
  public selectedTrace: any;
  public systemHealth: SystemHealth | undefined;
  public systemCpu: SystemCpu | undefined;
  public processUpTime: string | undefined;
  public http200Traces: any[] = [];
  public http400Traces: any[] = [];
  public http403Traces: any[] = [];
  public http404Traces: any[] = [];
  public http500Traces: any[] = [];
  public httpDefaultTraces: any[] = [];
  private timestamp: number | undefined;
  public pageSize = 5;
  public page = 1;
  constructor(private dashboardService: AdminDashboardService) { }

  ngOnInit(): void {
    console.log(this.page);
    this.getTraces();
    this.getSystemHealth();
    this.getCpuUsage();
    this.getProcessUpTime(true);
  }
  public onSelectTrace(trace: any): void {
    this.selectedTrace = trace;
    document.getElementById('trace-modal')!.click();
  }
  private getTraces() {
    this.dashboardService.getHttpTrace().subscribe(
      (response: any) => {
        console.log(response)
         this.processTraces(response.traces);
        // this.initializeBarChart();
        // this.initializePieChart();
        this.traceList = response.traces;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getSystemHealth() {
    this.dashboardService.getSystemHealth().subscribe(
      (response: SystemHealth) => {
        this.systemHealth = response;
        this.systemHealth.components.diskSpace.details.free = this.formatBytes(this.systemHealth.components.diskSpace.details.free);
      },
      (error: HttpErrorResponse) => {
        this.systemHealth = error.error;
        this.systemHealth!.components.diskSpace.details.free = this.formatBytes(this.systemHealth!.components.diskSpace.details.free);
        // console.log(error);
        // alert(error.message);
      }
    );
  }

  private getCpuUsage() {
    this.dashboardService.getSystemCpu().subscribe(
      (response: SystemCpu) => {
        console.log(response);

        this.systemCpu = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onRefreshData(): void {
    this.http200Traces = [];
    this.http403Traces = [];
    this.http400Traces = [];
    this.http404Traces = [];
    this.http500Traces = [];
    this.getTraces();
    this.getSystemHealth();
    this.getCpuUsage();
    this.getProcessUpTime(false);
  }

  private getProcessUpTime(isUpdateTime: boolean) {
    this.dashboardService.getProcessUptime().subscribe(
      (response: any) => {
        this.timestamp = Math.round(response.measurements[0].value);
        this.processUpTime = this.formateUptime(this.timestamp);
        if (isUpdateTime) {
          this.updateTime();
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  private formateUptime(timestamp: number): string {
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - (hours * 60);
    const seconds = timestamp % 60;
    return hours.toString().padStart(2, '0') + 'h' +
    minutes.toString().padStart(2, '0') + 'm' + seconds.toString().padStart(2, '0') + 's';
  }

  private formatBytes(bytes: any): string {
    if (bytes === 0) {
       return '0 Bytes';
      }
    const k = 1024;
    const dm = 2 < 0 ? 0 : 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

  private formatDate(date: Date): string {
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const year = date.getFullYear();
    if (dd < 10) {
      const day = `0${dd}`;
    }
    if (mm < 10) {
      const month = `0${mm}`;
    }
    return `${mm}/${dd}/${year}`;
  }

  private updateTime(): void {
    setInterval(() => {
      this.processUpTime = this.formateUptime(this.timestamp! + 1);
      this.timestamp!++;
    }, 1000);
  }
  private processTraces(traces: any) {
    //this.traceList = traces;
    this.traceList = traces.filter((trace: { request: { uri: string | string[]; }; }) => {
      return !trace.request.uri.includes('actuator');
    });
    this.traceList.forEach(trace => {
      switch (trace.response.status) {
        case 200:
          this.http200Traces.push(trace);
          break;
        case 400:
          this.http400Traces.push(trace);
          break;
          case 403:
          this.http403Traces.push(trace);
          break;
        case 404:
          this.http404Traces.push(trace);
          break;
        case 500:
          this.http500Traces.push(trace);
          break;
        default:
          this.httpDefaultTraces.push(trace);
      }
    });
  }
  private initializeBarChart(): void {
    const element = document.getElementById('barChart');

  }

}
