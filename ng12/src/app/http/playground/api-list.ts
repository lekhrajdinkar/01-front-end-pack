export interface ApiCall{
    btn_name: string,
    type: string;
    url: string;
    desc?: string;
    httpOptions?: any;
    body?: any
}
export const rest_Call_list: ApiCall[] = [
    { 
      btn_name: "Get TZ",
      type: 'GET',
      url: 'https://py3-basic-django.herokuapp.com/tz/codes/?format=json',
      desc: "API to fetch Timezone detail written in django, deployed on heroku"
    },
    { 
      btn_name: "Blogs",
      type: 'GET',
      url: 'https://ui-all-default-rtdb.firebaseio.com/blogs.json',
      desc: "Firebase realtime database running in test mode to store blogs"
    }
  ]