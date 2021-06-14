# MongoDB install required before running this project Or You can use Docker hub for pull mongo image.

## Environemnt variables with sample values.
# JWT configurations
PORT=3000
JWT_PRIVATE_KEY=123123
JWT_PUBLIC_KEY=5654465
JWT_EXPIRES_IN_MINUTES=60

# MongoDB connection string
MONODB_CONN_STR=mongodb://localhost:27017/findMyHome

## Description

[Nest] framework TypeScript + GQL will

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## APIs.

- create new user using mutation
    `mutation{
    createUser(createUserInput: {
        email: "test@hotmail.com",
        password: "a"
    }){
        _id
        email
        password
    }
    }`

- `POST` API login using path .../auth/login, api will response `access_token`
`{
    "username": "test@hotmail.com",
    "password": "a"
}`

NOTE: Now you have to send authorization bearer request header in all requests.
`{ "authorization": "Bearer TOKEN" }`

- Create Apartment mutation && authorization bearer request header.
`mutation{
  createApartment(createApartmentInput: {
   apartmentNo: "BAK-12",
    totalRooms: 2,
    rentAmount: 2000,
    location: {
      type: "point",
      coordinates: [15.826082,11.112383]
    }
  }){
   _id
    totalRooms,
    apartmentNo,
    owner_id
  }
}`

- Get Apartments query
`query{
  result: apartments(filters: {
    location: [15.826082,11.112393],
  },
    pagination: {limit: 3, page: 1}){
    pageNo,
      pageSize,
      total
    data{
      _id,
      apartmentNo,
      totalRooms,
      isAvailable,
      isFurnished,
      rentAmount,
      location{
        coordinates,
        type
      }
    }
  }
}`

- Get User favorite apartment list.
`query{
  result: userFavorites{
   _id
    apartment_id
    user_id
  }
}`

## Graphql playground access http://localhost:`PORT`/graphql