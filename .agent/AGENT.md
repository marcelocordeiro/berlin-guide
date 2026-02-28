# BOOTSTRAP INSTRUCTIONS FOR AI AGENTS

**AGENT DIRECTIVE: ALWAYS READ THIS FILE FIRST.**

This file is your primary entry point. Do not proceed with any task without first consulting this guide to understand the project's structure and conventions.

## 1. Project Mission

Your goal is to help build **"Berlin Guide,"** a cross-platform application for personalized, self-guided walking tours. The app will feature a responsive web/PWA front-end and native mobile apps, all powered by a Next.js backend. The user experience and design must be modern, intuitive, and polished.

## 2. Core Technologies

-   **Full-Stack & Web App:** Next.js (React/TypeScript)
-   **Styling:** Tailwind CSS & MUI (Material-UI) v5
-   **Native Mobile Apps:** Compose Multiplatform (Kotlin)
-   **Database:** PostgreSQL with PostGIS
-   **Mapping & Navigation:** Mapbox
-   **Testing:** Vitest, React Testing Library, Playwright

## 3. Key Commands

This section will be updated as the project is scaffolded.

-   **Run development server:** `npm run dev`
-   **Run unit tests:** `npm test`
-   **Run E2E tests:** `npm run test:e2e`

## 4. Documentation Index

To maintain an efficient context window, use this index to find and read only the specific document you need for your current task.

-   **Architecture & High-Level Decisions**: `docs/architecture.md`
-   **Local Development Setup**: `docs/development.md`
-   **Git Branching Strategy**: `docs/branching-strategy.md`
-   **Automated Testing**: `docs/testing.md`
-   **Deployment & Hosting**: `docs/deployment.md`

## 5. Guiding Principles

-   **Analyze Before Acting**: For any significant technical decision (e.g., choice of a new library, package manager, architectural pattern), you must first present a balanced analysis of the available options. Make a recommendation based on this analysis and the project's context.
-   **Confirm Before Implementing**: After presenting the analysis and recommendation, you must always ask for final approval from the user before proceeding with the implementation of the choice.
