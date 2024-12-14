# Campus Events Management System

## Project Overview
This is a web app called the Campus Events Management System. It allows users to view, register for, and manage campus events. Users can filter events by type and see them in a calendar view.

## Deployment Link
Live version: [Campus Events Management System](https://event4camp.vercel.app/)

## Login Details
Test accounts:
- **User Account:**
  - Email: example@gmail.com
  - Password: test
- **Admin Account:**
  - Email: example1@gmail.com
  - Password: test

## Feature Checklist
- [x] User Registration
- [x] User Login
- [x] View Upcoming Events
- [x] Register for Events
- [x] Admin Panel for Event Management
- [x] Calendar View for Events
- [x] Event Filtering by Type
- [x] Event Details Page
- [x] Responsive Design

## Installation Instructions

### Step 1: Fork the Repositories
1. Go to the [Frontend Repository](https://github.com/Latifpro108108/campusManagerFrontend.git).
2. Click on the "Fork" button in the top right corner to create a copy of the repository in your GitHub account.
3. Repeat the same process for the [Backend Repository](https://github.com/Latifpro108108/campusmanagerBackend.git).

### Step 2: Clone the Repositories
To get the project on your local machine, you need to clone both the frontend and backend repositories.

1. **Clone the Frontend Repository:**
   ```bash
   git clone https://github.com/yourusername/campusManagerFrontend.git
   ```
   (Replace `yourusername` with your GitHub username)

2. **Clone the Backend Repository:**
   ```bash
   git clone https://github.com/yourusername/campusmanagerBackend.git
   ```
   (Replace `yourusername` with your GitHub username)

### Step 3: Set Up the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd campusManagerFrontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:5174` to view the frontend.

### Step 4: Set Up the Backend

1. Open a new terminal window and navigate to the backend directory:
   ```bash
   cd campusmanagerBackend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add your environment variables (e.g., database connection string). Here’s an example of what you might include:
   ```
   DATABASE_URL=mongodb://localhost:27017/yourdbname
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. The backend will typically run on `http://localhost:5000` (or the port specified in your configuration).

## API Documentation
Screenshots of Postman API tests for the endpoints used in the app:

- **Get All Events Endpoint:**
  ![Get All Events](public/screenshots/get_all_events.png)  <!-- Replace with the actual path to your screenshot -->

- **Register for Event Endpoint:**
  ![Register for Event](public/screenshots/register_event.png)  <!-- Replace with the actual path to your screenshot -->

- **User Registration Endpoint:**
  ![User Registration](public/screenshots/user_registration.png)  <!-- Replace with the actual path to your screenshot -->

- **User Login Endpoint:**
  ![User Login](public/screenshots/user_login.png)  <!-- Replace with the actual path to your screenshot -->

- **Get User Profile Endpoint:**
  ![Get User Profile](public/screenshots/get_user_profile.png)  <!-- Replace with the actual path to your screenshot -->