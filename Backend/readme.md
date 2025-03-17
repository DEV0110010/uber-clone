
---

# 🚀 **API Documentation**

## 📌 **Users Endpoints**

### 🔹 **Register a User**
- **Endpoint:** `/users/register`
- **Method:** `POST`
- **Description:** Creates a new user account and returns a JWT token.

#### 📥 **Request Body**
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

#### 📤 **Responses**
✅ **201 Created**
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
❌ **400 Bad Request** - Invalid or missing fields.

---

### 🔹 **User Login**
- **Endpoint:** `/users/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a JWT token.

#### 📥 **Request Body**
```json
{
  "email": "must be a valid email",
  "password": "min. 6 chars"
}
```

#### 📤 **Responses**
✅ **200 OK**
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
❌ **400 Bad Request** - Invalid or missing fields.  
❌ **401 Unauthorized** - Incorrect email or password.

---

### 🔹 **Get User Profile**
- **Endpoint:** `/users/profile`
- **Method:** `GET`
- **Authorization:** Requires a valid JWT token.

#### 📤 **Responses**
✅ **200 OK**
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
❌ **401 Unauthorized** - Missing or invalid token.

---

### 🔹 **User Logout**
- **Endpoint:** `/users/logout`
- **Method:** `GET`
- **Authorization:** Requires a valid JWT token.

#### 📤 **Responses**
✅ **200 OK**
```json
{
  "message": "Logged Out"
}
```
❌ **401 Unauthorized** - Missing or invalid token.

---

## 🚖 **Captains Endpoints**

### 🔹 **Register a Captain**
- **Endpoint:** `/captains/register`
- **Method:** `POST`
- **Description:** Creates a new captain account and returns a JWT token.

#### 📥 **Request Body**
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

#### 📤 **Responses**
✅ **201 Created**
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
❌ **400 Bad Request** - Invalid or missing fields.

---

### 🔹 **Captain Login**
- **Endpoint:** `/captains/login`
- **Method:** `POST`
- **Description:** Authenticates a captain and returns a JWT token.

#### 📥 **Request Body**
```json
{
  "email": "must be a valid email",
  "password": "min. 6 chars"
}
```

#### 📤 **Responses**
✅ **200 OK**
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
❌ **400 Bad Request** - Invalid or missing fields.  
❌ **401 Unauthorized** - Incorrect email or password.

---

### 🔹 **Get Captain Profile**
- **Endpoint:** `/captains/profile`
- **Method:** `GET`
- **Authorization:** Requires a valid JWT token.

#### 📤 **Responses**
✅ **200 OK**
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
❌ **400 Bad Request** - Malformed request.  
❌ **401 Unauthorized** - Missing or invalid token.

---

### 🔹 **Captain Logout**
- **Endpoint:** `/captains/logout`
- **Method:** `GET`
- **Authorization:** Requires a valid JWT token.

#### 📤 **Responses**
✅ **200 OK**
```json
{
  "message": "Logged Out"
}
```
❌ **400 Bad Request** - Malformed request.  
❌ **401 Unauthorized** - Missing or invalid token.

---



