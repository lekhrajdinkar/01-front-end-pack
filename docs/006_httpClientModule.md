- https://chat.deepseek.com/a/chat/s/ccc6cffe-a43f-4826-9686-58e6e3f600c7
--- 
# httpClientModule
## A. intro
- Asynchronously load/store data to/from backend server.
- old : ajax, fetch/promise
- HttpClient in `@angular/common/http` (simple, abstraction)
- **Additional benefits**
  - **typed** request and response objects,
  - request/response **interception** 
  - returns **Observable<T>** --> to make **async** call.
    - [003_01_RxJs_Observable.md](003_01_RxJs_Observable.md)
  - streamlined error handling with Rxjs operator **CatchError**(eerr:HttpErrorResponse)->{ })
  
## B. Developer guide
- Add `httpClientModule` in rootModule
- create service1(inject `HttpClient`)
- error handling: pipe (catchError(err->{}), retry(3))
- `http.get(url, { })`  or  `http.post/put/delete( url, data, { }) `
  - **option object** :
    - { observe: '**response/body/event**' } // HttpEvent<>
    - { responseType:'**json/text/blob**'}
    - { param : {}, queryParam: {}, header: {} }
- **subscribe**
  - Async pipe in pipeline (recommended) + auto-unsubscribe.
  - programmatically + Always unsubscribe 
```
import { HttpClient } from '@angular/common/http';
  // create blueprint
  - store_1$ = this.http.get("url1") : observable<T>
  - store_2$ = store_1$.pipe(map(x->x), catchError( (err:HttpErrorResponse)->{ }), retry(3), ...) 
  
  // next, consume it
  - store_2$.subscribe(data->{}, err-> {}) 
```

## C Example/s
### 1. GET :: HttpParams, HttpHeaders, path param
```json5
//==== config.json ====
// ./assets/config.json
{
  "heroesUrl": "api/heroes",
  "textfile": "assets/textfile.txt"
}
```
```typescript
export interface Config {  heroesUrl: string;  textfile: string; }

@Injectable()
export class ConfigService 
{
  constructor(private http: HttpClient) { } 
  apiUrl: string = url1; 
  getConfig() {  return this.http.get<Config>(assets/config.json); } //observable
  
  // ===== HttpParams =======
  getFilteredUsers(filter: string): Observable<User[]> {
    const params = new HttpParams().set('filter', filter);
    return this.http.get<User[]>(`${this.apiUrl}/users`, { params });
  }
  
  // ===== HttpHeaders =======
  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Custom-Header': 'angular-app'
    });
    return this.http.post<User>(`${this.apiUrl}/users`, user, { headers });
  }

  // ===== path param =======
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
}
```
---
### 2. GET :: HttpResponse (Full response)
- 2nd arg: **{ observe: 'response' }**
- consume:
  - resp.body
  - resp.header
  - resp.header.keys()
```typescript
getConfig(): Observable<HttpResponse<Config>> {
  return this.http.get<Config>(  "url1", { observe: 'response' } );  
}

consume() {
  this.configService.getConfig()
  .subscribe(
		(resp) => { 
		  this.config = { resp.body } ;   
      const keys = resp.headers.keys();
	  }
		(error) => {}
	);	
}
```

---
### 3. GET :: Progress Events (for large downloads)
- HttpEvent
  - **HttpEventType.DownloadProgress**
```typescript
downloadFile(): void {
  this.http.get(`${this.apiUrl}/large-file`, {
    reportProgress: true,
    observe: 'events',
    responseType: 'blob'
  })
  .subscribe(event => {
    if (event.type === HttpEventType.DownloadProgress) {
      const percentDone = Math.round(100 * event.loaded / (event.total || 1));  //<<<
      console.log(`Download progress: ${percentDone}%`);
    } 
    else if (event instanceof HttpResponse) {
      console.log('Download complete');
      // Handle file download
    }
  });
}
```

### 4. POST :: FormData (for file uploads)
```typescript
uploadFile(file: File): Observable<any>
{
 // FormData, globally available in like fetch(). no impport needed.
  const formData = new FormData(); 
  formData.append('file', file);
  formData.append('description', 'File uploaded from Angular');
  
  return this.http.post(`${this.apiUrl}/upload`, formData, {
    reportProgress: true,
    observe: 'events'
  });
}
```
### 5. Concurrent Requests with `forkJoin`
```typescript
loadDashboardData(): void {
  forkJoin({
    users: this.http.get<User[]>(`${this.apiUrl}/users`),
    products: this.http.get<Product[]>(`${this.apiUrl}/products`),
    stats: this.http.get<Stats>(`${this.apiUrl}/stats`)
  }).subscribe({
    next: ({ users, products, stats }) => {
      this.users = users;
      this.products = products;
      this.stats = stats;
    },
    error: (err) => console.error('Error loading dashboard data:', err)
  });
}
```

### 6. Debouncing requests
```typescript

```

### 7. switchMap()
```typescript

```
### 8. mergeMap()
```typescript

```
---
## D. Interceptors
- Class Interceptor1/2 implements **HttpInterceptor** 
  - override **intercept**(httpRequest, httpHandler)
- injection token :  **HTTP_ONTERCEPTORS**
- similar to **NG_VALIDATOR**, Validator
```txt
=== interceptor chain ======
-- order matters:
providers: [
  { provide: HTTP_ONTERCEPTORS, useClass: Interceptor1, multi: true},
  { provide: HTTP_ONTERCEPTORS, useClass: Interceptor2, multi: true}
  ...
]
---
Request → Interceptor1 → Interceptor2 → Server
Response ← Interceptor1 ← Interceptor2 ← Server

```

### 1. Request Interceptor
- Auth Interceptor
- logging request Interceptor
- Caching
- **global error handing**
  - backend error 500
  - network issue (client error), **ErrorEvent**
- Note: **request** is readonly/immutable :point_left:

```
newReq = req.clone({ ... }); // body not mentioned => preserve original body
newReq = req.clone({ body: undefined }); // preserve original body
newReq = req.clone({ body: null }); // clear the body
```

```typescript
import { Injectable } from '@angular/core';
import {  HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor,  HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
  //========== Auth Interceptor ===========
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({   setHeaders: {  Authorization: `Bearer ${token}` }
    });
  }

  // ========== global error handing ==========
  
  return next.handle(request).pipe(
      peek( x=> console.log(x)),
      //catchError((error: HttpErrorResponse) => { }),
      catchError( this.handleError ),
      retry(3)
    );
  }
  private handleError(error: HttpErrorResponse) 
  {
    // 1. A client-side or network error occurred
    if (error.error instanceof ErrorEvent) {                    
      console.error('An error occurred:', error.error.message);
    }  
    else
    {
        // 2. The backend returned an unsuccessful response code.   
        console.error(  `Backend returned code ${error.status}, ` +  `body was: ${error.error}`);
        if (error.status === 401) {
          return throwError(() => new Error('Invalid credentials'));
        } else if (error.status === 0) {
          return throwError(() => new Error('Network error'));
        } else {
          return throwError(() => new Error('Login failed'));
        }
    }
    return throwError( 'Something bad happened; please try again later.');
  }
}
```

### 2. Response Interceptor






