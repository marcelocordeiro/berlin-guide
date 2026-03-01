# Kiez Development Plan

This document outlines the phased development plan for the Kiez application. The project is broken down into modular phases to allow for focused and parallel development.

---

### **Phase 1: Core Frontend Foundation (Sequential)**

_This phase must be completed first as it provides the foundation for all other features._

- **Task 1.1: Complete Tour Customization Form** - **[COMPLETED]**
  - **Goal:** Implemented all remaining UI controls on the main page (`/src/app/page.tsx`).
  - **Details:** All form controls, including sliders, switches, text field, and interest chips, along with their state management and accessibility attributes, have been successfully implemented.

- **Task 1.2: Implement Dark Mode Toggle** - **[COMPLETED]**
  - **Goal:** Created a functional light/dark mode toggle button.
  - **Details:** The toggle button correctly switches between light and dark themes, persists user preference in `localStorage`, and ensures the UI adapts appropriately. All QA checks passed.

---

### **Phase 2: Backend & Data Modeling (Parallel Workstream)**

_This phase can be developed concurrently with Phase 3._

- **Task 2.1: Define Database Schema**
  - **Goal:** Create the database table structure for users, points of interest (landmarks and local gems), and saved tours.
  - **Details:** This involves writing SQL or migration scripts to define tables using PostGIS for location data.

- **Task 2.2: Build Core Tour Generation API**
  - **Goal:** Create the main API endpoint (`POST /api/generate-tour`) that contains the core logic of the application.
  - **Details:** This endpoint will take the user's tour preferences, select the best points of interest, and use a routing algorithm to calculate the optimal path and itinerary.

- **Task 2.3: Develop User & Tour Management APIs**
  - **Goal:** Create the necessary API endpoints for a user to save, view, and delete their generated tours.
  - **Details:** Build standard CRUD (Create, Read, Update, Delete) endpoints for managing user data and their saved tours.

---

### **Phase 3: Frontend - Tour Experience (Parallel Workstream)**

_This phase can be developed concurrently with Phase 2._

- **Task 3.1: Build Tour Display Page**
  - **Goal:** Create the main page where a user follows their generated tour.
  - **Details:** This page will feature an interactive Mapbox map displaying the route and an itinerary list showing the stops in order.

- **Task 3.2: Implement Live Navigation**
  - **Goal:** Add live GPS tracking and turn-by-turn instructions to the tour page.
  - **Details:** Use the browser's Geolocation API to show the user's live position on the map and display navigational cues.

- **Task 3.3: Develop Stop Detail View**
  - **Goal:** Create the UI that appears when a user arrives at a stop.
  - **Details:** This will be a modal or a separate page that displays the rich content for the point of interest (images, text, video, audio player).

---

### **Future Phases**

_High-level goals for after the initial MVP is complete._

- **Guide Mode:** Features for professional guides to create and share tours.
- **Monetization:** Integration with a payment provider (e.g., Stripe) for premium subscriptions.
- **Native App:** Scaffolding and implementation of the Compose Multiplatform mobile applications.
