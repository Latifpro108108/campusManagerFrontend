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

### Frontend Setup
1. Clone the frontend repository:
   ```bash
   git clone https://github.com/Latifpro108108/campusManagerFrontend.git
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

### Backend Setup
1. Clone the backend repository:
   ```bash
   git clone https://github.com/Latifpro108108/campusmanagerBackend.git
   cd campusmanagerBackend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add your environment variables (e.g., database connection string).

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