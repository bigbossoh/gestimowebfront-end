/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://seve.us-east-1.elasticbeanstalk.com/';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
