/* tslint:disable */
import { Injectable } from '@angular/core';

/**http://54.173.112.63/
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  // rootUrl: string = 'http://54.91.63.249:8284/';
  rootUrl: string = 'http://localhost:8284/';
  //rootUrl: string = 'http://ec2-23-22-126-138.compute-1.amazonaws.com:8284/';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
