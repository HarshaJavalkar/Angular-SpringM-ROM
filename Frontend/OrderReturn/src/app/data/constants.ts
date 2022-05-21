export default class Constants {
  // public static get LOGIN_BASE_URI(): string {
  //   return 'http://35.87.57.198:8765/AUTHENTICATIONFEIGNCLIENT';
  // }

  // // http://hj28rom.us-west-2.elasticbeanstalk.com
  // public static get COMP_PROCESSING_URL(): string {
  //   return 'http://35.81.151.20:8081';
  // }

  // public static get LOGIN_BASE_URI(): string {
  //   return 'http://localhost:8765/AUTHENTICATIONFEIGNCLIENT';
  // }

  // // http://hj28rom.us-west-2.elasticbeanstalk.com
  // public static get COMP_PROCESSING_URL(): string {
  //   return 'http://localhost:8765/COMPONENTPROCESSING ';
  // }


  public static get LOGIN_BASE_URI(): string {
    return 'http://44.233.150.169:8765/AUTHENTICATIONFEIGNCLIENT';
  }

  // http://hj28rom.us-west-2.elasticbeanstalk.com
  public static get COMP_PROCESSING_URL(): string {
    return 'http://44.233.150.169:8765/COMPONENTPROCESSING';
  }



  
  public static get INV_CRED(): string {
    return '401';
  }

  public static get TOKEN(): string {
    return 'token';
  }

  public static get USERNAME(): string {
    return 'username';
  }
}
