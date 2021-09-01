import { HttpHeaders, HttpParams } from "@angular/common/http"

export interface ApiCall{
    name: string,
    type: string;
    url: string;
    desc?: string;
    httpOptions?: any;
    body?: any
}
export const rest_Call_list: ApiCall[] = [
    { 
      name: "Get TimeZone",
      type: 'GET',
      url: 'https://py3-basic-django.herokuapp.com/tz/codes/?format=json',
      desc: "API to fetch Timezone detail written in django, deployed on heroku"
    },
    { 
      name: "Blogs",
      type: 'GET',
      url: 'https://ui-all-default-rtdb.firebaseio.com/blogs.json',
      desc: "Firebase realtime database running in test mode to store blogs"
    },
  ]

  export const rest_Call_mean_list: ApiCall[] = [
    { 
      name: "Mean: Login",
      type: 'POST',
      url: 'https://mean-backend-05-18-1991.herokuapp.com/tact2/login',
      desc: "login with liudinkar",
      httpOptions: {
        observe: 'body', //responnse, event, body
        headers: new HttpHeaders({'Content-Type':  'application/json'}),
        params: new HttpParams({})
      },
      body:{initial:'liudinkar',password:'liudinkar'}
    },
    { 
      name: "Mean: Auth Status",
      type: 'GET',
      url: 'https://mean-backend-05-18-1991.herokuapp.com/tact2/auth-status',
      desc: "mean stack app api to check auth status",
      httpOptions: {
        observe: 'response', 
      //   headers: new HttpHeaders({
      //         'Authorization' : 'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbml0aWFsIjoibGl1ZGlua2FyIiwiX2lkIjoiNjEyZmUzZmUyZGUyNjkwMDA0ZDg3MTQ2IiwiZHQiOjE2MzA1Mjg2Mzk0MjYsImlhdCI6MTYzMDUyODYzOSwiZXhwIjoxNjMwNTMyMjM5fQ.SqSLDSgDpTvcGAsp5p2r6o11qC7thv6njTBqIeBg248' })
        }
    },
    { 
        name: "Mean api-1",
        type: 'GET',
        url: 'https://mean-backend-05-18-1991.herokuapp.com/tact2/get-all-funds',
        desc: "mean stack app api to fetch all order"
      },
      { 
        name: "Mean api-2",
        type: 'GET',
        url: 'https://mean-backend-05-18-1991.herokuapp.com/tact2/get-uf-by-fof/5cc299a667590d0004d07db5',
        desc: "mean stack app api to order detail of 5cc299a667590d0004d07db5"
      }
      
  ]