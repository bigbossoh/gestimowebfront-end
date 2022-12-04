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
  // serverUrl:'http://seved.us-east-1.elasticbeanstalk.com:5000/'
 rootUrl: string = 'http://gestimoserviceweb-env.eba-dpp4ujgi.us-east-1.elasticbeanstalk.com/';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
