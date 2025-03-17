# API Endpoints

## /users/register
**Method:** `POST`  

### Description
Creates a new user record and returns a JWT token.

### Required Fields
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

### Responses
#### 201 Created  
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

#### 400 Bad Request  
Returns validation errors if any field is invalid or missing.

---

## /users/login
**Method:** `POST`

### Description
Logs in an existing user and returns a JWT token.

### Required Fields
```json
{
  "email": "must be a valid email",
  "password": "min. 6 chars"
}
```

### Responses
#### 200 OK
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

#### 400 Bad Request  
Returns validation errors if any field is invalid or missing.

#### 401 Unauthorized  
Returns an error if email or password is incorrect.

---

## /users/profile
**Method:** `GET`

### Description
Fetches the profile data of the currently authenticated user.

### Authorization
Requires a valid JWT token in the Authorization header or token cookie.

### Responses
#### 200 OK
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

#### 401 Unauthorized  
Returns an error if the token is missing or invalid.

---

## /users/logout
**Method:** `GET`

### Description
Logs out the currently authenticated user by clearing the token and adding it to a blacklist.

### Authorization
Requires a valid JWT token in the Authorization header or token cookie.

### Responses
#### 200 OK
```json
{
  "message": "Logged Out"
}
```

#### 401 Unauthorized  
Returns an error if the token is missing or invalid.

---

## /captains/register
**Method:** `POST`

### Description
Creates a new captain record and returns a JWT token.

### Required Fields
```json
{
  "fullname": {
    "firstname": "min. 3 chars",
    "lastname": "optional, min. 3 chars"
  },
  "email": "must be a valid email",
  "password": "min. 6 chars",
  "vehicle": {
    "color": "min. 3 chars",
    "plate": "min. 3 chars",
    "capacity": "must be at least 1",
    "vehicleType": "car | motorcycle | auto"
  }
}
```

### Responses
#### 201 Created  
Returns a JWT `token` and the newly created `captain`.

**Example of a Successful Response**:
```json
{
  "token": "sample-jwt-token",
  "captain": {
    "_id": "sample-captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### 400 Bad Request  
Returns validation errors if any field is invalid, missing, or if the captain already exists.

---

## /captains/login
**Method:** `POST`

### Description
Logs in an existing captain and returns a JWT token.

### Required Fields
```json
{
  "email": "must be a valid email",
  "password": "min. 6 chars"
}
```

**Example of a Successful Request**:
```json
{
  "email": "jane.doe@example.com",
  "password": "your-password"
}
```

### Responses
#### 200 OK
```json
{
  "token": "sample-jwt-token",
  "captain": {
    "_id": "sample-captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### 400 Bad Request  
Returns validation errors if any field is invalid or missing.

#### 401 Unauthorized  
Returns an error if email or password is incorrect.

---

## /captains/profile
**Method:** `GET`

### Description
Fetches the profile data of the currently authenticated captain.

### Authorization
Requires a valid JWT token in the Authorization header or token cookie.

### Responses
#### 200 OK  
Returns the captain's profile.
```json
{
  "captain": {
    "_id": "sample-captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### 400 Bad Request  
Returned if the request is malformed or missing some required parameter.

#### 401 Unauthorized  
Returned if the token is missing, invalid, or expired.

---

## /captains/logout
**Method:** `GET`

### Description
Logs out the currently authenticated captain by clearing the token and adding it to a blacklist.

### Authorization
Requires a valid JWT token in the Authorization header or token cookie.

### Responses
#### 200 OK  
```json
{
  "message": "Logged Out"
}
```

#### 400 Bad Request  
Returned if the request is malformed or missing some required parameter.

#### 401 Unauthorized  
Returned if the token is missing, invalid, or expired.

