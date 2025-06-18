# Deployment
- https://angular.dev/tools/cli/deployment

## A. SPA
- ng build > client bundle (browser folder)
- deploy on **static web host** : firebase, heroku,etc
  - ng add @angular/fire
  - ng add angular-cli-ghpages
  - ng add @jefiozie/ngx-aws-deploy
  - Nginx
- runs on client/visitor's browser
- dis adv:
  - initially missing content, empty html file.
  - browser can be slow.
  
---  
## B. SSR - server side rendering
- server sends hydrated page, SPA ( pre-loaded data)
- initial rendering by server
- sort of going back to traditional approach.
- **Turn angular into ssr app**
  - **ng add @angular/ssr**
  - **ng new --ssr**
- check :
  - angular.json for ssr. `{ "entry" : "server.ts" }`
  - server.mjs
  - ...
- run : npm run build or ng build
  - /dist
    - /browser
    - /server
- **npm run serve:ssr:routing**
  - localhost:4000 (nodejs express)

---
## C. SSG - static site generation
- combination of above 2.
- **pre-render at build time**
- create : app-routes.tx
  - CONTENT:
    - /path1/load/user/id/1
    - /path1/load/user/id/100
    - /path1/load/user/id/2
- angular.json > update ssr renderer property : `{routeFile : app-routes.tx}`
- ng build
  - pre render pages for above paths

---
# Nginx
- **Dockerize** : https://github.com/lekhrajdinkar/99-project-01-OTT-ng/blob/master/ott-share-v2/Dockerfile
- Nginx efficiently serves static files - /dist/
  - nginx:alpine image.
- lighter than Node.js for static content.
- handles high traffic with low resource usage.
- Security
  - Provides HTTPS support (when configured).
  - Protects against common web vulnerabilities.
- copy : /dist/* --> /usr/share/nginx/html
- solves Angular’s routing problem by **always serving index.html**
- **nginx.conf**
```typescript
server {
    listen 80;  # Port Nginx listens on

    # Serve files from the Angular dist folder
    root /usr/share/nginx/html;

    location / {
        # Always return index.html for client-side routing
        try_files $uri $uri/ /index.html;
    }

    # Enable compression (smaller files = faster load times)
    gzip on;
    gzip_types text/css application/javascript;
}
```

```Dockerfile
# Stage 1
FROM node:20-alpine as build
ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i --only=production
COPY .. .
RUN npm run build -- --configuration=production

# Stage 1
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ott-share-v2 /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```
