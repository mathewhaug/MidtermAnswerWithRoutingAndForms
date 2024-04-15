import { Injectable } from '@angular/core';
// import an obseravable
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MockHttpClientService {

  constructor() { }
  //Now we need to create a method for a get request responce
  get(url:string, options?:any):Observable<any>{
    const mockResponse = {message: "Mock data for GET Request"};
    return of(mockResponse);
    //This sets up the Mock HTTP client to return a predefined response
  }
}
