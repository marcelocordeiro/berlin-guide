# BOOTSTRAP INSTRUCTIONS FOR AI AGENTS

**AGENT DIRECTIVE: ALWAYS READ THIS FILE FIRST.**

This file is your primary entry point. Do not proceed with any task without first consulting this guide to understand the project's structure and conventions.

## 1. Project Mission

Your goal is to help build **"Kiez,"** a cross-platform application for personalized walking tours. The app's unique mission is to blend major landmarks with authentic local discovery, helping users explore the unique character of a city's neighborhoods ("Kiez"). The app will feature a responsive web/PWA front-end and native mobile apps, all powered by a Next.js backend, with a modern, intuitive, and polished design.

## 2. Core Technologies

- **Full-Stack & Web App:** Next.js (React/TypeScript)
- **Styling:** MUI (Material-UI) v5 with Material 3 (Expressive Style) & Tailwind CSS
- **Native Mobile Apps:** Compose Multiplatform (Kotlin)
- **Database:** PostgreSQL with PostGIS
- **Mapping & Navigation:** Mapbox
- **Testing:** Vitest, React Testing Library, Playwright

## 3. Key Commands

This section will be updated as the project is scaffolded.

- **Run development server:** `npm run dev`
- **Run unit tests:** `npm test`
- **Run E2E tests:** `npm run test:e2e`

## 4. Documentation Index

To maintain an efficient context window, use this index to find and read only the specific document you need for your current task.

- **Architecture & High-Level Decisions**: `docs/architecture.md`
- **Project Roadmap & Plan**: `docs/development-plan.md`
- **Local Development Setup**: `docs/development.md`
- **Git Branching Strategy**: `docs/branching-strategy.md`
- **Automated Testing**: `docs/testing.md`
- **Deployment & Hosting**: `docs/deployment.md`

## 5. Guiding Principles

- **Follow the Official SDLC**: All feature development, bug fixes, or significant changes MUST strictly follow the official Software Development Lifecycle (SDLC) documented in `docs/development.md`. This process (Spec -> Build -> QA -> Repeat -> **Commit Verified Code**) is mandatory.
- **Commit Strategy**: **ONLY commit fully verified changes** after the QA Agent has found zero errors. Avoid committing incremental changes during the implementation phase.
- **Quality Checks Timing**: Run all quality checks (lint, format, test) _after_ implementation, but _before_ handing over to QA. These checks must pass before QA begins and before any final commit.
- **Browser Interaction Tools**: For all browser interactions, including navigation, DOM manipulation, console log retrieval, and screenshots, always prioritize and use the tools available via the **`chrome-devtools`** MCP server for granular control and direct access to browser features. Use `gasoline` only for `analyze` or `generate` functions not available in `chrome-devtools`.
- **Analyze Before Acting**: For any significant technical decision (e.g., choice of a new library, package manager, architectural pattern), you must first present a balanced analysis of the available options. Make a recommendation based on this analysis and the project's context.
- **Confirm Before Implementing**: After presenting the analysis and recommendation, you must always ask for final approval from the user before proceeding with the implementation of the choice.
- **End-of-Prompt Documentation**: At the end of every interaction, you MUST ensure relevant documentation, especially the `README.md` (for major milestones) and specific feature docs, is up-to-date. The `README.md` should reflect significant project progress but does not require a granular "Current Status" line.
