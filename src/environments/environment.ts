// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // serverUrl:'http://seveBackEnd.us-east-1.elasticbeanstalk.com/actuator'
 // serverUrl : 'http://ec2-44-201-191-108.compute-1.amazonaws.com:5000/actuator'
 // serverUrl: 'http://seved.us-east-1.elasticbeanstalk.com:5000/actuator'
 serverUrl:'http://gestimoserviceweb-env.eba-dpp4ujgi.us-east-1.elasticbeanstalk.com/actuator'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
