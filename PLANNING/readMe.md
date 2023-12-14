# Job Portal Web App - Readme

## Software Architecture:

The proposed architecture for the Job Portal Web App is a **MERN stack** (MongoDB, Express.js, React, Node.js) application. The client-side is built using React, which enables the creation of a dynamic and responsive user interface. The server-side is powered by Node.js and Express.js, providing a robust and scalable backend. MongoDB, a NoSQL database, is employed to store data efficiently.

## Web Stack:

1. **Frontend:**

   - **Framework:** React
   - **Styling:** Material-UI for a clean and consistent user interface
   - **State Management:** Redux for state management
   - **Authentication:** Passport.js with three strategies (Google, Facebook, Local)

2. **Backend:**
   - **Server:** Node.js with Express.js
   - **Database:** MongoDB for data storage
   - **Authentication:** Passport.js for user authentication

## Motivation:

- **React for Frontend:** Create React App (CRA) is chosen for its simplicity, efficiency, and a well-organized development environment, allowing for rapid development and easy maintenance.

- **Material-UI for Styling:** Material-UI is a popular React UI framework that provides a set of pre-designed components and styles following the Material Design guidelines, ensuring a modern and visually appealing user interface.

## Deployment:

The app will be deployed on a cloud platform, such as Render or Netlify. This choice allows for easy scalability, reliability, and accessibility from anywhere with an internet connection.

## System Requirements Specification:

### How the App Works:

1. **Admin User:**

   - Logs in to access admin functionalities.
   - Manages job listings (Add, Delete, Update, View).
   - Manages users (Add, Delete, Edit, View).

2. **Normal User:**
   - Registers for an account.
   - Logs in to search and view job listings.
   - Filters and searches for jobs based on keywords, categories, or locations.

### Users and Benefits:

- **Admin User:** HR personnel or system administrators who need to manage job listings and user accounts efficiently.
- **Normal User:** Job seekers who want to browse and apply for available positions easily.

### User Stories:

**Admin User:**

1. As an admin, I want to log in to access the admin dashboard.
2. As an admin, I want to add a new job listing.
3. As an admin, I want to delete a job listing.
4. As an admin, I want to view all job listings.
5. As an admin, I want to view all users.

**Normal User:**

1. As a normal user, I want to register for an account.
2. As a normal user, I want to log in to access personalized features.
3. As a normal user, I want to log out when I'm done using the platform.
4. As a normal user, I want to view all available job listings.
5. As a normal user, I want to search for jobs using keywords or filter by category or location.

### Functional Requirements:

1. **Authentication:**

   - User registration with email verification.
   - Login with three passport strategies (Google, Facebook, Local).
   - Logout functionality.

2. **Admin Functionalities:**

   - Add, delete, update job listings.
   - View all job listings.
   - Add, delete, edit user accounts.
   - View all user accounts.

3. **Normal User Functionalities:**
   - Register for an account.
   - Log in and log out.
   - View all job listings.
   - Search for jobs using keywords.
   - Filter job listings by category or location.

### Non-Functional Requirements:

1. **Performance:**

   - The app should load quickly, even with a large number of job listings and users.

2. **Security:**

   - User passwords should be securely hashed and stored.
   - User sessions should be securely managed.

3. **Scalability:**

   - The application should be able to handle an increasing number of job listings and users.

4. **Usability:**
   - The user interface should be intuitive and easy to navigate.

## Similar Apps:

There are several similar job portal applications like LinkedIn Jobs, Indeed, and Glassdoor. Our app aims to stand out by providing a clean and user-friendly interface, efficient job search and filtering options, and a robust admin panel for easy management of job listings and user accounts. Additionally, the use of Material-UI ensures a modern and visually appealing design.
