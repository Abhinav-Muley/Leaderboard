#Leaderboard

*Overview: -

Leaderboard is a web-based project management tool designed to streamline task assignment and tracking within an organization. Built using HTML, CSS, and JavaScript for the frontend, it leverages Firebase for authentication, image storage, and a NoSQL database. The application allows admins to manage employees and their tasks efficiently, ensuring smooth workflow and clear communication.

*Features: -

**Admin Capabilities: -
1. Add Employees: Admins can add new employees to the system, complete with details and a profile picture.
2. Assign Tasks: Admins can assign tasks to any employee, set deadlines, and track progress.
3. Project Management: Create, read, update, and delete projects as needed. Each project can have multiple tasks associated with it.
4. Task Tracking: Monitor the status of tasks assigned to employees, including how many have been completed.
5. Employee Management: Admins can update employee details, deactivate employees (preventing them from logging in), and manage their permissions.
6. Issue Handling: Review issues raised by employees who are stuck on a task and provide assistance.

**Employee Capabilities: -
1. Task Management: Employees can view their tasks on the dashboard, update the status of each task, and raise issues if they encounter difficulties.
2. Profile Management: Employees can update their own details, but their access is limited compared to admins.

*Technologies Used: -

**Frontend:
HTML: Structure of the web pages.
CSS: Styling for the web pages to ensure a responsive and visually appealing interface.
JavaScript: Handles user interactions, DOM manipulation, and dynamic content loading.

**Backend & Database:
Firebase Authentication: Secures the application by managing user sign-ins and ensuring that only authorized users have access.
Firebase Storage: Stores employee profile images and other media assets securely.
Firebase Realtime Database (NoSQL): Stores and manages the application data, including employee details, tasks, and projects.


*Configuration
To use this project, you must configure Firebase with your own project's credentials. This involves replacing the Firebase configuration details in files that begin with fb (e.g., fbConfig.js) with your Firebase project's configuration.

**Steps: -
Create a Firebase Project:

Visit the Firebase Console and create a new project.
Enable Required Firebase Services:

Enable Firebase Authentication, Realtime Database, and Storage for your project.
Obtain Firebase Configuration:

In your Firebase project settings, find the Firebase SDK configuration object, which includes apiKey, authDomain, databaseURL, etc.
Update Firebase Configuration Files:

Open each Firebase configuration file in the project (files starting with fb, such as fbConfig.js).
Replace the placeholder values with your actual Firebase configuration.
