# Project Overview

This project is built with NestJS, TypeScript, GraphQL, MongoDB, and JWT for user management, apartment listings, and authentication. MongoDB needs to be installed before running the project, or <br/> you can use Docker Hub to pull the MongoDB image.

## Environment Variables

```plaintext
PORT=3000
JWT_PRIVATE_KEY=123123
JWT_PUBLIC_KEY=5654465
JWT_EXPIRES_IN_MINUTES=60
MONODB_CONN_STR=mongodb://localhost:27017/findMyHome
```

## Installation

```bash
$ npm install
```

## Running the App

```bash
# Development mode
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## GraphQL Mutations and Queries

### Create New User Mutation

```graphql
mutation {
  createUser(createUserInput: {
    email: "test@hotmail.com",
    password: "a"
  }) {
    _id
    email
    password
  }
}
```

### Login API

Send a POST request to `/auth/login` with the following body:

```json
{
    "username": "test@hotmail.com",
    "password": "a"
}
```

**Note**: Include the `authorization` bearer request header in all subsequent requests:

```json
{
    "authorization": "Bearer TOKEN"
}
```

### Create Apartment Mutation

```graphql
mutation {
  createApartment(createApartmentInput: {
    apartmentNo: "BAK-12",
    totalRooms: 2,
    rentAmount: 2000,
    location: {
      type: "point",
      coordinates: [15.826082,11.112383]
    }
  }) {
    _id
    totalRooms
    apartmentNo
    owner_id
  }
}
```

### Get Apartments Query

```graphql
query {
  result: apartments(filters: {
    location: [15.826082,11.112393]
  },
  pagination: {limit: 3, page: 1}) {
    pageNo
    pageSize
    total
    data {
      _id
      apartmentNo
      totalRooms
      isAvailable
      isFurnished
      rentAmount
      location {
        coordinates
        type
      }
    }
  }
}
```

### Get User Favorite Apartment List

```graphql
query {
  result: userFavorites {
    _id
    apartment_id
    user_id
  }
}
```

## Access GraphQL Playground

Visit http://localhost:PORT/graphql to access the GraphQL playground.
```

This formal GitHub README provides a structured overview of the project, its environment variables, installation instructions, GraphQL mutations, queries, and access to the GraphQL playground.
