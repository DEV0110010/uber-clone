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