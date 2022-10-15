This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```
docker-compose -f docker-compose-postgres.yml build
docker-compose -f docker-compose-postgres.yml --env-file ./.env up
npm run next
```

## Install and populate local database

create an .env file
```
POSTGRES_DB='database'
POSTGRES_USER='user'
POSTGRES_PASSWORD='password'
POSTGRES_HOST='localhost'
POSTGRES_PORT='5432'
DB_CLUSTER=''
```

populate the local DB:
```
npm run loadpgdevdata
```

## Connect to local database
```postgres
npm run pgshell


\dt
SELECT * FROM test_table;
```

## Deployment

Vercel project: https://vercel.com/cpelican/template-api-call-next