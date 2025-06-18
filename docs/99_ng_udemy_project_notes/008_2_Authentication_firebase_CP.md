## Authtication - Course Project
- Add Signin and signup

### 1. Add signIn and Signup component - template:

`signin.component.html` :
```
<form (ngSubmit)="onSignin(f)" #f="ngForm">

      <div class="form-group">
        <label for="email">Mail</label>
        <input type="email" id="email" name="email" ngModel class="form-control">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password"   name="password"  ngModel  class="form-control">
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Sign In</button>

    </form>
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/04.JPG)

### 2. Add Auth Service:

#### 2.1. `auth.service.ts` :
- provide service in app Module --> `provider : [AuthService]`
- Functionalities : signupUser / signinUser / logout / getToken / isAuthenticated
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/03.JPG)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/05.JPG)

```
//SignIn
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then() //handle response here
 .catch() //handle error here 
 
//SignUp
 firebase.auth().createUserWithEmailAndPassword(email, password)
  .then() //handle response here
  .catch() //handle error here
```
#### 2.2. Add FireBase SDK:
- `npm install --save firebase`
- use it inside authService - `import * as firebase from 'firebase';`
- add firebase APIkey in AppComponent (root)
- firebase accepts min 6 char long password.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/08.JPG)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/09.JPG)

- Initialize firebase in appl load - appComponent (root)
```
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE",
      authDomain: "ng-recipe-book-3adbb.firebaseapp.com"
    });
  }
```


### 3. Add component - logic/ts:
- get values from form - userid and password
- onSignIn method > Auth service > signinUser method
`signin.component.ts` :
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/06.JPG)

### 4. Add register / signIn link in Nav-bar:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/07.JPG)

### 5. New User is added:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/10.JPG)

### 6. Similarly add SignIn Component and check response:
```
firebase.auth().signInWithEmailAndPassword(email, password)
.then(  (response) => { console.log(response)}		)
```		
- See Sign in information in Console log, will get token here.
- FireBase stores token in Browser Local Storage also.
- Add Rule in FireStore: Enable Read /Write if Auth is not null:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/11.JPG)
- Access `fireStore` (FetchData dropdown to pull recipes), it will give error now
> Solution : **Send Auth Token with all future request.**

### 7. Send Token with Future Request 
- REST (data as service) call to FireStore to pull recipe.
- fetch Token from LocalStorage --> ` firebase.auth().currentUser.getToken()` --> this is `observable`/`promise` and receive response asyn. hence put then(), catch(),etc
```
Auth service :

token: string;

  // It Gets Token Asynchronously, because if token is expired 
  // then it will make call server again to get new token.
  
  getToken() {
    firebase.auth().currentUser.getToken()
	.then(  (token: string) => { this.token = token }); //store token here.
	
    return this.token;
  }
```

- `DataAccessSevice` --> to pull recipe. use retrived token here.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/12.JPG)
> Note : But this token wont be avialable instantly in above REST call.

> **one way :**  is to make REST call inside callback method. CURRENTLY its outside callback, see abv:

> **Other way:** fetch token in AuthService which is already loaded asynchronously there from local storage and stored. this will skip another Asyn call.
but if token expired then it will work on second attempt.
```
token = this.authService.getToken();
this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
```

### 8. Modify Navbar
> - if authenticated then show - `MANAGE dropdown`
- if Not authenticated then show - `login/Register`.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/13.JPG)

- Added new method in AuthService : `isAuthenticated()`
- Inject AuthService into Header Component and use it in nav bar.
```
  isAuthenticated() {
    return this.token != null;
  }
```

### 9. Add Logout Button:
- Add logout button/link > show it only if Authenticated.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/14.JPG)

-  logout button clicked > `onLogout()` >  AuthService > logout() >
```
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
```

### 10. Add Auth gaurd.
- if Authenticated --> new recipe / Edit recipe routes will work
- If NOT Authenticated --> can see Recipes. but new/Edit wornt work
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/15.JPG)

```
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```
`RouterStateSnapshot` --> ?


Add App-Gaurd in recipe-routing-module.ts:
```
const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ] },
];
```





















