# VTube

## Project Overview

The VTube Backend is the server-side component of a video-sharing platform, similar in concept to YouTube. Built using Node.js, Express.js, and MongoDB, this backend provides a robust and scalable API for managing users, videos, authentication, and other essential functionalities. The project aims to deliver a seamless experience for users to upload, view, and interact with video content.

This README provides a detailed overview of the project structure, the API endpoints implemented, the technologies used, and the use cases it addresses.

## Technologies Used

* **Node.js:** The JavaScript runtime environment for building scalable network applications.
* **Express.js:** A minimal and flexible Node.js web application framework.
* **MongoDB:** A NoSQL database.
* **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
* **jsonwebtoken (JWT):** For secure authentication and authorization.
* **bcrypt:** For secure password hashing.
* **cookie-parser:** Express middleware to parse Cookie headers.
* **cors:** Express middleware to enable Cross-Origin Resource Sharing (CORS).
* **dotenv:** To load environment variables from a `.env` file.
* **cloudinary:** For cloud-based image and video management (avatars).
* **multer:** For handling `multipart/form-data` (file uploads).
* **joi:** For data validation.
* **asyncHandler:** Utility for simplifying asynchronous error handling.
* **ApiError:** Custom error class for API responses.
* **ApiResponse:** Custom success response class for API responses.
* **fs (fs/promises):** Node.js module for file system operations (async).

## Project Structure
├── node_modules            # Project dependencies
├── public                  # Publicly accessible files (e.g., static uploads)
│   └── temp                # Temporary storage for uploaded files
├── src
│   ├── controllers         # Route handler functions (API endpoint logic)
│   ├── db                  # Database connection and configuration
│   ├── middlewares         # Custom middleware (authentication, file upload, etc.)
│   ├── models              # Mongoose schema definitions
│   ├── public              # (Duplicate - consider removing or merging with root /public)
│   │   └── temp
│   ├── routes              # API route definitions
│   ├── utils               # Utility classes and functions (error handling, responses)
│   └── validators          # Joi schema definitions for validation


## Implemented API Endpoints and Use Cases

### 1. User Authentication

* **`POST /api/users/login`:** User login, generates access and refresh tokens (HTTP-only cookie).
* **`POST /api/users/logout`:** User logout, invalidates refresh token and clears cookie.

### 2. User Profile Management

* **`POST /api/users/change-password`:** Authenticated users change their password.
* **`PATCH /api/users/update-info`:** Authenticated users update profile information (username, email, fullName).
* **`GET /api/users/me`:** Authenticated users retrieve their profile information (excluding sensitive data).
* **`POST /api/users/change-avatar` (or `PATCH`):** Authenticated users update their profile avatar (uploads to Cloudinary).

## Middleware

* **`verifyJwt` (`src/middlewares/auth.middlewares.js`):** Authenticates users via JWT in the `Authorization` header.
* **`upload` (`src/middlewares/multer.middlewares.js`):** Handles `multipart/form-data` for file uploads.

## Error Handling and Response Structure

Consistent API responses using `ApiResponse` (success) and `ApiError` (failure) with status codes, messages, and data/errors. `asyncHandler` simplifies asynchronous error handling.

## Future Enhancements

* Video upload and management.
* Video viewing and streaming.
* User subscriptions and channels.
* Liking, disliking, and commenting.
* Search functionality.
* Real-time notifications.
* More robust error handling and logging.
* Unit and integration testing.

## Contact me : harsxit04@gmail.com
## Postman : https://.postman.co/workspace/My-Workspace~6a352d83-98eb-4fd1-8aa4-5201a911b9e0/collection/44616569-59d76e1c-7497-4cd9-86a4-b3c9835be3a0?action=share&creator=44616569
