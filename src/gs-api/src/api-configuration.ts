/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  //rootUrl: string = 'http://185.124.203.69:8282/';
  rootUrl: string = 'http://localhost:8282/';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
