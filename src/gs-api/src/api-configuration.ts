/* tslint:disable */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://209.250.224.13:8282/';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
