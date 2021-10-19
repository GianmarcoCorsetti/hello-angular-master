import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Area } from "../DTOs/area";
import { Course } from "../DTOs/course";
import { CourseEdition } from "../DTOs/course-edtion";


@Injectable({
  providedIn: 'root'
})
export class DidactisService {
  private baseUrl = 'https://localhost:44331/api/';
  private courseUrl = this.baseUrl + 'course';
  private courseEditionUrl = this.baseUrl + 'courseEdition';
  //private http:HttpClient;
  constructor(private http: HttpClient) {
    this.http = http;
  }
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl)
      .pipe(tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  getCourseById(id: Number): Observable<Course> {
    return this.http.get<Course>(`${this.courseUrl}/${id}`)
      .pipe(tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.courseUrl}/areas`)
      .pipe(tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  createCourse(corso: Course): Observable<Course> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Course>(`${this.courseUrl}`, corso, { headers })
      .pipe(tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  updateCourse(corso: Course): Observable<Course> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Course>(`${this.courseUrl}/${corso.id}`, corso, { headers })
      .pipe(tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  getCourseEditionsByCourseId(id: number): Observable<CourseEdition[]> {
    return this.http.get<CourseEdition[]>(`${this.courseUrl}/${id}/editions`)
      .pipe(tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  private handleError(errorResponse: HttpErrorResponse): Observable<never> { //lancia un'eccezione
    let errorMessage = '';
    if (errorResponse.error instanceof ErrorEvent) {
      errorMessage = 'errore di rete: ' + errorResponse.error.message;
    } else {
      errorMessage = 'errore lato server: ' + errorResponse.status + '' + errorResponse.message;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


