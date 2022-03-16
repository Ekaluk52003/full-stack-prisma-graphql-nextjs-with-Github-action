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
### Github action will build images and push to dockerhub