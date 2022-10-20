/* tslint:disable */
import { Injectable } from '@angular/core';

/**http://54.173.112.63/
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {

  // rootUrl: string = 'http://seveBackEnd.us-east-1.elasticbeanstalk.com/';
  rootUrl: string = 'http://localhost:5000/';

}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
