# Emergency Waitlist Application
# Rudra Patel
# 300247682

## Description
The Hospital Triage application helps staff and patients better understand wait times while in the emergency room. 

## Developer Instructions

### Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/emergency_waitlist.git
    ```
2. Navigate to the project directory:
    ```bash
    cd emergency_waitlist
    ```
3. Install dependencies:
    ```bash
    composer install
    ```
4. Setup the database:
    ```bash
    psql -U postgres -f database/setup.sql
    ```

### Running the Application
1. Start the server:
    ```bash
    php -S localhost:8000
    ```
2. Open your browser and navigate to `http://localhost:8000`.

## User Instructions

### Admin
1. Login to the admin dashboard.
2. Manage patient records by adding, updating, or deleting entries.
3. View patient wait times and severity of injuries.

### Patient
1. Sign in with your name and 3-letter code.
2. View your approximate wait time.
3. Wait times update dynamically as patients are treated.

## Screenshots
![Admin Dashboard](screenshots/admin_dashboard.png)
![Patient View](screenshots/patient_view.png)

## Portfolio Link
[View Project on Portfolio](https://github.com/RudraPatel973/Assignement-4-csi3140)
