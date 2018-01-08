import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateLogin(userData) {
    if (userData.username == undefined || userData.password == undefined)
      return false;
    else
      return true;
  }

  validateRegistration(userData) {
    if (userData.name == undefined || userData.email == undefined || userData.password == undefined)
      return false;
    else
      return true;
  }

  validateUsername(username) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(username);
  }
}
