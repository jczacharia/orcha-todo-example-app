# Orcha Todo Example App

This is an example repository highlighting the capabilities of the Orcha Client<->Facilitator Framework for Angular and Nestjs.

### Features:

- ✅ Robust User Authentication
- ✅ Basic CRUD operations
- ✅ Highly-secure endpoints and queries

### Coming soon:

- Real-time updates
- Pagination
- File Uploads
- Integration Testing

### PREREQUISITES:

- Nodejs/NPM

## Steps to get setup:

1. Clone repository:

```sh
https://github.com/jczacharia/orcha-todo-example-app/blob/master/schematics.sh
```

1. Have a PostgreSQL instance running on `localhost:5432` (Environment vars found here: `libs/shared/domain/src/lib/environments/environment.ts`)
   - Username: `postgres`
   - Password: `1Qazxsw2`
   - DB Name: `orcha-todo-example-app`
1. Open 2 terminals:
1. In Terminal 1, run the client (Angular):

```sh
npx ng serve todo-app
```

1. In Terminal 2 run the server (Nestjs):

```sh
npx ng serve api
```

1. Visit: http://localhost:4200
