/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
 // rootUrl: string = 'http://ec2-44-201-191-108.compute-1.amazonaws.com:5000/';
 rootUrl: string = 'http://localhost:5000/';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
