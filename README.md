# Protect Group Test Project

Welcome to the Protect Group repository! This project serves as a test project for evaluating potential hires. Please follow the instructions below to complete the tasks. Your work will be evaluated based on the criteria provided.

## Table of Contents
1. [Tasks](#tasks)
    - [1. Add Routes for Transactions](#1-add-routes-for-transactions)
    - [2. Create the Database Table for Transactions](#2-create-the-database-table-for-transactions)
    - [3. CRUD Operations for Transactions](#3-crud-operations-for-transactions)
    - [4. Write Unit Tests](#4-write-unit-tests)
2. [Evaluation Criteria](#evaluation-criteria)
3. [Submission](#submission)
4. [License](#license)

## Tasks

### 1. Add Routes for Transactions

- **Description:** Add routes for handling transactions in the application.
- **Instructions:**
    1. Create a new route file named `transactions.js` in the `routes` directory.
    2. You can decide routes yourself. Following are the example routes:
        - GET `/transactions`
        - GET `/transactions/:id`
        - POST `/transactions`
        - PUT `/transactions/:id`
        - DELETE `/transactions/:id`

### 2. Create the Database Table for Transactions

- **Description:** Create a database table to store transaction records.
- **Instructions:**
    1. Use a migration tool like `sequelize-cli` to create a new migration file.
    2. Define the `transactions` table columns your self. This should be similar to real blockchain transaction. Following are example columns:
        - `id` (Primary Key)
        - `amount` (Decimal)
        - `description` (String)
        - `date` (Date)
        - `createdAt` (Timestamp)
        - `updatedAt` (Timestamp)

### 3. CRUD Operations for Transactions

- **Description:** Implement CRUD operations to manage transactions.
- **Instructions:**
    1. In the `controllers` directory, create a new file named `transactionController.js`.
    2. Implement the following methods:
        - `getAllTransactions`
        - `getTransactionById`
        - `createTransaction`
        - `updateTransaction`
        - `deleteTransaction`
    3. Connect these methods to the routes defined in `transactions.js`.

### 4. Write Unit Tests

- **Description:** Write unit tests for the routes and controller methods.
- **Instructions:**
    1. Use a testing framework like `jest` or `mocha`.
    2. Create a `tests` directory in the root of the project.
    3. Add unit tests for each CRUD operation in the `transactionController.js`.
    4. Ensure tests cover various scenarios, including edge cases.

## Evaluation Criteria

The total score for the test project is 100 points. The breakdown is as follows:

1. **Routes for Transactions (20 points)**
    - Correctly added routes: 20 points

2. **Database Table Creation (20 points)**
    - Correctly defined `transactions` table: 20 points

3. **CRUD Operations (40 points)**
    - Implemented `getAllTransactions`: 10 points
    - Implemented `getTransactionById`: 10 points
    - Implemented `createTransaction`: 10 points
    - Implemented `updateTransaction`: 5 points
    - Implemented `deleteTransaction`: 5 points

4. **Unit Tests (20 points)**
    - Coverage of CRUD operations: 15 points
    - Handling edge cases: 5 points

5. **Project Runs Successfully (20 points)**
    - Project setup and runs without errors: 20 points

## Submission

Once you have completed the tasks, please submit the following:
1. A link to your GitHub repository or just zip the code is also fine.
2. Any additional notes or documentation you think are relevant.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
