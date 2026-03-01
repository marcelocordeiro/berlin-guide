# Kiez

## Project Vision

Kiez is a cross-platform application for personalized walking tours. Its unique mission is to blend major landmarks with authentic local discovery, helping users explore the unique character of a city's neighborhoods ("Kiez").

## Project Status

- **Phase:** Development
-   **Current Status:** A critical React hydration mismatch error was discovered during QA. A more robust fix relying solely on client-side rendering (without `suppressHydrationWarning`) has been implemented and is pending re-verification.

## Roadmap

This project is being built in phases. The high-level roadmap is as follows:

1.  **Phase 1: Frontend Foundations** - Build the core UI components and pages.
2.  **Phase 2: Backend & Data** - Develop the API, database, and core tour generation logic.
3.  **Phase 3: Tour Experience** - Implement the live map, navigation, and interactive stop details.

For a detailed breakdown of each phase and task, see the [full development plan](./docs/development-plan.md).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
