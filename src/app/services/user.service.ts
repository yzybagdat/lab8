import {User} from "../user";
import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs/index";

@Injectable()
export class UserService {

  baseUrl = 'http://localhost:8888/api';

  constructor(
    private loggingService: LoggingService,
    private httpClient: HttpClient) {
  }

  isLoggedIn(): boolean {
    return true;
  }

  getUsers(params: HttpParams): Observable<User[]> {
    // return this.httpClient.get<User[]>
    //   (this.baseUrl + '/users', {params: params});

    let userList:User[];
    userList=[
      new User(1, 'Mark', '', '', 25),
      new User(2, 'Tom', '', '', 50),
      new User(3, 'Bob', '', '', 40)
    ];

    this.loggingService.log('List of users: ' + userList);

    return of(userList);
  }
}
