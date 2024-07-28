# Office Transaction Management System

This project is a simple transaction management system for an office where the Account Manager can manage daily expenses for cash inflow and outflow. The application consists of two main screens: the Office Transactions screen and the Add Transaction screen. deployed link https://office-transactions.netlify.app/

## Technologies Used
### Backend

- **Node.js** with Express.
- **Mongo DB** for the database.

### Frontend

- **React** for building the user interface
- **Axios**: for making HTTP requests
- **React Router**:  for client-side routing

## Features
- View all transactions with running balance.
- Add new transactions with type (Credit/Debit), amount, and description.
- Responsive design.

## Installation and Setup
### Prerequisites

- Node.js (v12 or higher)
- MongoDB (local or cloud-based instance)



1. Clone the repository:

```bash
git clone https://github.com/Phanindrababu5868/Office-Transactions.git
```
2. Navigate to the project directory:

```bash
cd Office-Transactions
```
3. Install backend dependencies::

```bash
cd backend
npm install
```
4. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

### Usage

1. Open your browser and navigate to http://localhost:3000 to view the application.
2. Use the "Office Transactions" screen to view all transactions with running balance.
3. Use the "+ Add Transaction" button to navigate to the Add Transaction screen and create new transactions.

### Running the Application

1. Start the backend server::

```bash
cd backend
npm run dev

```
2. Start the frontend server:
   
```bash
cd ../frontend
npm start

```
The application should now be running on `http://localhost:3000`.

# API Endpoints


### Authentication

- GET /api/transactions: Get all transactions
- POST /api/transactions: Create a new transaction


## Folder Structure
   ```arduino
     notes-app/
     │
     ├── backend/
     │   ├── controllers/
     │   ├── models/
     │   ├── routes/
     │   └── server.js
     │
     ├── frontend/
     │   ├── public/
     │   ├── src/
     │   │   ├── components/
     │   │   ├── context.jsx
     │   │   ├── App.jsx
     │   │   ├── error-page.jsx
     │   │   ├── index.css 
     │   │   ├── main.jsx
     │   └── index.html
     │   └── package.json
     │
     └── README.md

   ```  
  ## Contributing

  Contributions are welcome! Please fork the repository and create a pull request.
  
  #### Happy coding!
