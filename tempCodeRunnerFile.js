// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Croudly');

// Create a new document in the collection.
db.getCollection("users").insertMany([
  {
    username: "aditijain",
    firstName: "Aditi",
    lastName: "Jain",
    email: "aditi.jain@example.com",
    password: "Aditi@123",
    age: 22,
    phoneNumber: "9876543202",
    role: "User",
    profileImage: "https://ik.imagekit.io/pzv2idg9d/user2.jpeg",
    isActive: true,
    resetPasswordToken: null,
    resetPasswordExpires: null,
  },
  {
    username: "meehikajain",
    firstName: "Meehika",
    lastName: "Jain",
    email: "meehika.jain@example.com",
    password: "Meehika@123",
    age: 22,
    phoneNumber: "9876543203",
    role: "User",
    profileImage: "https://ik.imagekit.io/pzv2idg9d/user3.jpeg",
    isActive: true,
    resetPasswordToken: null,
    resetPasswordExpires: null,
  },
]);
