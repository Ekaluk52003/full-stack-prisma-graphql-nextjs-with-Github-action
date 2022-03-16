### Full stack Nexjs

### Tech Stack
- NextJs
- TypeScript
- Node.js & Express
- PostgreSQL
  - Prisma
- GraphQL
  - Nexus Schema
- Reverse Proxy
  - Caddy

### Deployment with Dockers for local development.
- docker-compose.yml will build custom images for both backend and fontend.
```sh
docker-compose up -d --build
```
### Deployment with Dockers for production server.
- docker-compose.prod.yml will build custom images for production server.

```sh
docker-compose -f docker-compose.prod.yml up -d --build
```
### CI/CD with Github action
 - Github action is triggered by Taging. The action is to perform to build the images and push to Docker hub.

### Docker Watch Tower
 - Docker watch Tower listen to any change from an image from docker hub.
 And will build new images and container on production server