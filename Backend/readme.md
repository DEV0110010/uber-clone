# /users/register

**Method:** `POST`

## Description
Creates a new user record and returns a JWT token.

## Required Fields
```json
{
  "fullname": {
    "firstname": "min. 3 chars",
    "lastname": "optional, min. 3 chars"
  },
  "email": "must be a valid email",
  "password": "min. 6 chars"
}
```

## Responses
- **201 Created**  
  Returns a `token` and the newly created `user`.

**Example of a Successful Response**:
```json
{
  "token": "sample-jwt-token",
  "user": {
    "_id": "sample-user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

- **400 Bad Request**  
  Returns validation errors if any field is invalid or missing.


# /users/login
**Method:** `POST`

## Description
Logs in an existing user and returns a JWT token.

## Required Fields
```json
{
  "email": "must be a valid email",
  "password": "min. 6 chars"
}
```

**Example of a Successful Request**:
```json
{
  "email": "john.doe@example.com",
  "password": "your-password"
}
```

## Responses
- **200 OK**
```json
{
  "token": "sample-jwt-token",
  "user": {
    "_id": "sample-user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

- **400 Bad Request**
  Returns validation errors if any field is invalid or missing.

- **401 Unauthorized**
  Returns an error if email or password is incorrect.


# /users/profile
**Method:** `GET`

## Description
Fetches the profile data of the currently authenticated user.

## Authorization
Requires a valid JWT token in the Authorization header or token cookie.

## Responses
- **200 OK**
```json
{
  "_id": "sample-user-id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

- **401 Unauthorized**
  Returns an error if the token is missing or invalid.


# /users/logout
**Method:** `GET`

## Description
Logs out the currently authenticated user by clearing the token and adding it to a blacklist.

## Authorization
Requires a valid JWT token in the Authorization header or token cookie.

## Responses
- **200 OK**
```json
{
  "message": "Logged Out"
}
```

- **401 Unauthorized**
  Returns an error if the token is missing or invalid.