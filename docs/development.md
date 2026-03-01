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

---

## Feature Development Workflow (SDLC)

All new features, bug fixes, or significant changes must follow this structured Software Development Lifecycle (SDLC) to ensure quality, clarity, and alignment. The process involves acting in distinct roles, with a strong emphasis on **committing only fully verified changes.**

**1. Specification Phase**

- **Action:** Create a **Tech Spec** document.
- **Details:** This document describes in extensive detail _how_ the feature will be implemented from a technical perspective, but without writing the code itself. It should cover components, state management, data flow, and API interactions.
- **Location:** `docs/features/[feature-name]-tech-spec.md`

- **Action:** Create a **QA Plan** document.
- **Details:** This document describes how the feature will be tested. It must include positive cases (happy paths), negative cases (error conditions, edge cases), and a section on usability/UX review.
- **Location:** `docs/features/[feature-name]-qa-plan.md`

**2. Implementation Phase (Senior Engineer Role)**

- **Action:** Announce the role: "Acting as the Senior Engineer..."
- **Details:** Implement the feature precisely according to the created Tech Spec. After implementation, run local quality checks (`npm run format:write`, `npm run lint`) to ensure code quality _before_ handing it over for QA. **No commits are made at this stage.**

**3. Verification Phase (Senior QA Agent Role)**

- **Action:** Announce the role: "Acting as the Senior QA Agent..."
- **Details:** After implementation is complete, rigorously test the feature against the Tech Spec and the QA Plan. This involves:
  - **Code Review:** Analyzing the implementation for correctness and adherence to standards.
  - **Browser Testing:** Using **`chrome-devtools`** tools (e.g., `navigate_page`, `list_console_messages`, `click`, `take_screenshot`) to perform live browser checks, including DOM inspection, accessibility analysis, taking screenshots to verify visual output, and checking console logs for errors or warnings **after every interaction with the page**.

**4. Iteration Loop & Final Commit**

- If the Senior QA Agent finds **any** bugs, visual discrepancies, or deviations from the specs, they will compile a detailed list of issues.
- The list is handed back to the **Senior Engineer Role** for fixing.
- The **Engineer** fixes the issues, runs local quality checks, and hands it back to **QA**, repeating this cycle until the **Senior QA Agent finds zero errors.**
- **ONLY THEN** is the feature considered complete, and the Engineer will perform a single, final commit for the verified changes.

This cycle ensures that every feature is built to spec and is of high quality before completion.
