# Job Portal Web App

## How to Use the App

This MERN full-stack application seamlessly integrates Express for the backend, React for the frontend, and MongoDB for the database. Regular users can register accounts, sign in, and browse jobs posted by admin users. The platform provides intuitive filtering options for jobs based on keywords, location, and category. Users have the capability to apply for jobs, access their personalized dashboard, review job history, and view their profiles. Admin users, upon signing in, gain access to a comprehensive dashboard where they can oversee all current users, jobs, and categories. Admins are able to create and delete jobs and categories, manage users, and perform edits on any job listings.

Below are instructions on how to install, test, and run the app on your local machine.

1. Clone the Repository: Start by cloning this repository to your local machine. You can do this with Git by running the following command in your terminal:

   git clone https://github.com/Ameerah1410/job-portal1.git

2. Navigate to the Project Directory: Change your current directory to the project folder using the cd command:

   cd <project_directory>

3. Install Dependencies: This app has both frontend and backend components. You need to install the dependencies for both.

Frontend Dependencies (React): In the project root directory, cd to frontend and then run:

    npm install

Backend Dependencies (Express): Navigate to the backend directory, cd to backend and then run:

    npm install

### Modifying MongoDB Connection String

You will need to modify the MongoDB connection string to link it to your own database. You can replace the connection string in the index.js file:

const connection_string = "your_connection_string";

### Running the App

Now that you've installed the necessary dependencies, you can run the app. To do this, you'll need two separate terminal instances, one for the frontend (React) and one for the backend (Express).

1. Start the Backend Server:

2. Navigate to the backend directory if you're not already in it:

   cd backend

3. Start the Express server:

   npm start

The server will run on port 5000 by default. If you want to specify a different port, you can set it using the PORT environment variable:

    PORT=5000 npm start

4. Start the Frontend Development Server:

In the project root directory, start the React development server:

    npm start

This will start the development server on port 3000 by default. Your web browser should automatically open to http://localhost:3000, where you can access the app.

### Testing

You can test the app using various testing frameworks and tools like Jest and React Testing Library for the frontend, and Superjest or any testing tool of your choice for the backend.

1. To run tests for the frontend, use the following command in the project root directory:

   npm test

2. For backend tests, navigate to the backend directory and run:

   npm test

### Security Measures Implemented

1. Helmet Middleware:
   Helmet is used to secure the Express app by setting various HTTP headers. It helps protect the app from well-known web vulnerabilities by setting appropriate HTTP headers. These headers can mitigate certain kinds of attacks, such as cross-site scripting (XSS), clickjacking, and other code injection attacks.

2. CORS Middleware:
   Cross-Origin Resource Sharing (CORS) is enabled using the cors middleware. It allows the frontend React application to make requests to the backend Express server, which may be running on a different domain. By enabling CORS, the server specifies who can access the resources on the server.

3. Error Handling:
   Error handling is implemented for various scenarios, including errors during the HTTP requests and internal server errors. Error messages are appropriately logged to the console and frontend providing helpful information for debugging.

4. JWT Tokens with Short Expiry in Cookies:
   JSON Web Tokens (JWT) are used with short expiration times and stored in secure HTTP-only cookies. This practice enhances security by reducing the risk of token misuse, especially in the event of a token being compromised.

5. Environment Variables:
   Sensitive information, such as API keys, should be stored as environment variables. Although API keys were not needed to access this public access API, it is essential to avoid hardcoding any sensitive information in the source code. Instead, these values should be stored as environment variables and accessed using the process.env object in the application code.

6. General Best Practices:
   The application adheres to general best practices for secure coding, including regular updates of dependencies, input validation, secure transmission of data, and proper handling of user sessions.

### Deployment

Separately deploying the backend on Render and the frontend on Netlify enables independent scaling, modular development, enhanced security, and optimized infrastructure costs. This approach streamlines development cycles, improves developer experience, and allows for granular access control, aligning with best practices for efficient and maintainable deployments.

Backend: https://job-portal-backend-6gxk.onrender.com/
Frontend: https://65798c72681e710a29aec5e2--fluffy-blancmange-eace13.netlify.app/

### Additional Notes

- Ensure that you have Node.js and npm installed on your machine before proceeding.
- If you encounter any issues or errors, please check the console for error messages, as they can provide helpful information for debugging.

Now you're ready to explore and use the Job PortaL App on your local machine. Enjoy!

