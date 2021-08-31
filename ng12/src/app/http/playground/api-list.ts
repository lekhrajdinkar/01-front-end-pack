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
      name: "Get TZ",
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
    { 
        name: "Mean-1",
        type: 'GET',
        url: 'https://mean-backend-05-18-1991.herokuapp.com/tact2/get-all-funds',
        desc: "mean stack app api to fetch all order"
      },
      { 
        name: "Mean-2",
        type: 'GET',
        url: 'https://mean-backend-05-18-1991.herokuapp.com/tact2/get-uf-by-fof/5cc299a667590d0004d07db5',
        desc: "mean stack app api to order detail of 5cc299a667590d0004d07db5"
      }
      
  ]