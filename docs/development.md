# Development

# Development

This document provides instructions for setting up the local development environment and an overview of our code quality tooling.

## Local Development

1.  **Install Dependencies:** After cloning the repository, install the required dependencies using npm:

    ```bash
    npm install
    ```

2.  **Run the Development Server:** To start the Next.js development server, run:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Quality & Tooling

To ensure a high-quality and consistent codebase, this project uses a set of automated tools that are run automatically before every commit.

- **ESLint:** A pluggable linter for identifying and reporting on patterns in JavaScript and TypeScript. It helps prevent bugs and enforce code style.
- **Prettier:** An opinionated code formatter that ensures a single, consistent style across the entire codebase.
- **Husky & lint-staged:** We use Husky to manage Git hooks. A `pre-commit` hook is configured to run `lint-staged`. This script ensures that Prettier and ESLint are run on all staged files before they can be committed.

This automated workflow means that all code pushed to the repository is guaranteed to be formatted and linted according to our defined standards.
