import { TestBed } from '@angular/core/testing';
import { StudentServiceService } from './student-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; //import the testing features
import {MockHttpClientService} from "./mock-http/mock-http-client.service"; //import the service that we created

describe('StudentServiceService', () => {
  let service: StudentServiceService;
  let httpTestingController : HttpTestingController; //declare the httpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentServiceService]
    });
    service = TestBed.inject(StudentServiceService);
    httpTestingController = TestBed.inject(HttpTestingController); //initialize the httpTestingController
  });

  afterEach(() => {
    httpTestingController.verify(); //this verifys that there are no outstanding requests
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('Should retreive students via GET request', () => {
      //We can import our mock students at the top of the file and then
      // call on them from here, or we can define them here.

      const mockStudents = [
        {id:1, studentName:  'Matt',courseCode:'MAD400', dateOfBirth:'01-01-9999',letterGrade:'A',profilePic:""},
        {id:2, studentName:  'att',courseCode:'MAD400', dateOfBirth:'01-01-8999',letterGrade:'F',profilePic:""}
      ]


    service.getStudents().subscribe( students => {
      expect(students).toEqual(mockStudents); // Asserting that the returned students match our mock data
    });

    const req = httpTestingController.expectOne(('api/students'));
    //I expect a single request from the httpcontroller and it be directed
    // at api/students

    expect(req.request.method).toEqual('GET');
    //I expect that the request method is a GET request

    //We want to flush out out the request when we are done tith it
    req.flush(mockStudents);
  });
});
