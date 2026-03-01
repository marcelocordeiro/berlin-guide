# Architecture

# Architecture

This document outlines the high-level architecture and core feature set of the Kiez application.

## Core Features

The application's experience is built on a foundation that blends traditional landmark tourism with authentic, local discovery.

### 1. Landmark Tours

This is the primary tour generation feature. Users can customize a walking tour based on parameters like available time, walking distance, and interests (e.g., "History," "Art"). The app generates an optimized route between major city landmarks that fits the user's criteria.

### 2. Kiez Explorer

A distinct mode focused purely on neighborhood discovery. Users can select a specific "Kiez" (neighborhood) and get a curated map of local gems, such as independent cafes, street art, small shops, and historical tidbits. This mode encourages free-form exploration rather than following a predefined route.

### 3. Integrated Discovery Features

To weave the "Kiez" concept into all tours, we will implement two key features:

- **Kiez Detours:** While on a standard Landmark Tour, as a user enters a notable neighborhood, the app can offer an optional, timed "detour loop." This allows them to briefly step off the main path to discover a few local highlights before rejoining their original route.
- **Local Gems:** During any tour, the main map will be populated with small, tappable icons representing minor points of interest ("Local Gems"). These are things that don't warrant a full stop but add character to the walk, such as a historic plaque, a unique photo spot, or a famous street food vendor.

## Design System

To ensure a high-quality, accessible, and consistent user experience, this project has adopted **Google's Material 3 (M3) design system** with the **"Expressive"** style variant.

- **Rationale:** M3 provides a robust, production-ready foundation that guarantees accessibility compliance (e.g., color contrast), supports seamless light/dark modes, and offers a comprehensive component library via MUI. The "Expressive" style allows for more brand personality.
- **Seed Color:** The official brand seed color is **International Klein Blue (`#002FA7`)**. All UI colors (primary, secondary, surface, etc.) are algorithmically generated from this seed color to create a full, accessible tonal palette.
- **Official Visual Reference:** The definitive visual guide, showcasing the full color palette, typography, and component styles in both light and dark modes, is available in the root of this repository: `style-guide.html`.
