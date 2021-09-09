
import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UserApiService } from '../http/user/user-api.service';
// import { HttpClient } from '@angular/common/http';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent
         //,HttpClient 
        ]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TestingComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('Validate Api url', () => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
    fixture.detectChanges();

    //  let userSrv = fixture.debugElement.injector.get(UserApiService);
    //  expect(userSrv.user_url).toEqual(component.user_api_url);

    let complied = fixture.debugElement.nativeElement;
    complied.querySelector('p').textContent.toContain('testing works!')
   
  });
});
