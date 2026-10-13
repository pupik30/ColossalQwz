# QwzCollos

Agency landing site: React + TypeScript + Vite frontend, Express + PostgreSQL backend.

## Requirements

- Node.js 20+
- PostgreSQL 14+ running on `localhost:5432`, database `postgres`, user `postgres`, password `1234`
  (change the credentials in `backend/index.ts` if your setup differs)

## Setup

```bash
# 1. Database
psql -U postgres -d postgres -f backend/schema.sql

# 2. Backend
cd backend
npm install
npm start          # http://localhost:5000

# 3. Frontend (separate terminal)
cd frontend
npm install
npm run dev        # http://localhost:5173
```

`npm run build` in `frontend/` produces the production bundle in `frontend/dist/`.

## Structure

```
backend/
  index.ts        API endpoints (pricing, testimonials, blog, projects, team, forms)
  schema.sql      Tables and demo content
frontend/
  src/Components  Header, Footer, Button, Testimonial, NotFound
  src/Pages       Home, Services, Pricing, Blog, Projects, About, Contact, Quote, Terms
  src/Styles      SCSS variables and mixins
  Photos.ts       Asset registry used to map database keys to images
```

Content shown on the site comes from the database. The `avatar`, `cover`, `photo` columns store
keys (for example `Cover3`, `Avatar5`, `Albert`) that `Photos.ts` resolves to bundled images.
