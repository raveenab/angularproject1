import { Injectable } from '@angular/core';

@Injectable()
export class MenuserviceService {

  getEmployees(){ 
    return [
    { "id" : 1, "name" : "raveena", "age" : 23 },
    { "id" : 2, "name" : "kandlikar", "age" : 25},
    { "id" : 3, "name" : "srinivas", "age" : 24},
    { "id" : 4, "name" : "aashu", "age" : 12},
    { "id" : 5, "name" : "dhruc", "age" : 10},
  ];
}

getLanguage(){
  return[
      { "name":"telugu" },
      { "name":"english" },
      { "name":"marati" },
      { "name":"hindi" },
      { "name":"kannada" }
  ];
}
  constructor() { }

}