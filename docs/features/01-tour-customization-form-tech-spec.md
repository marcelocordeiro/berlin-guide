# Tech Spec: 01 - Complete Tour Customization Form

**Feature:** Task 1.1 - Complete the Tour Customization Form

**Objective:** To implement the full set of UI controls on the main page (`src/app/page.tsx`) allowing a user to specify all parameters for their desired walking tour.

---

### 1. State Management

- A single state object will be created to hold all form values. This will be managed within the `Home` component (`src/app/page.tsx`) using the `React.useState` hook.
- A TypeScript `interface` named `TourPreferences` will be defined to type this state object. It will include all the fields listed below.
- Each form input will have an `onChange` handler that updates the corresponding field in this state object.

### 2. Form Data Structure (`TourPreferences` interface)

```typescript
interface TourPreferences {
  duration: number // in hours
  distance: number // in kilometers
  startTime: string // "HH:MM" format
  isMultiDay: boolean
  includeMeals: boolean
  mealDuration: number // in hours
  interests: string[] // array of selected interest strings
}
```

### 3. Component Implementation (`src/app/page.tsx`)

The existing `Card` component will be populated with the following MUI components, organized using `<Stack>` for vertical spacing.

- **Walking Distance:**
  - **Component:** `FormControl` with a `FormLabel` ("Max Walking Distance (km)").
  - **Input:** MUI `Slider`.
  - **Details:** Similar to the existing duration slider, with a range (e.g., 2 to 20 km). It will update the `distance` field in the state.

- **Start Time:**
  - **Component:** `FormControl` with a `FormLabel` ("Ideal Start Time").
  - **Input:** MUI `TextField`.
  - **Details:** Will be configured with `type="time"`. It will update the `startTime` field in the state.

- **Multi-Day & Meals:**
  - **Component:** A `Box` containing two `FormControlLabel` components for layout.
  - **Controls:**
    1.  An MUI `Switch` for "Split across multiple days?". Updates the `isMultiDay` boolean field.
    2.  An MUI `Switch` for "Include a meal break?". Updates the `includeMeals` boolean field.

- **Meal Duration:**
  - **Component:** `FormControl` with a `FormLabel` ("Meal Break Duration (hours)").
  - **Input:** MUI `Slider`.
  * **Conditional Rendering:** This entire `FormControl` will only be rendered and visible if the `includeMeals` state is `true`.
  - **Details:** A slider with a range (e.g., 1 to 3 hours). Updates the `mealDuration` field.

- **Interests:**
  - **Component:** `FormControl` with a `FormLabel` ("I'm interested in...").
  - **Input:** A `Box` containing a series of MUI `Chip` components.
  - **Details:**
    - A predefined array of interest strings will be available (e.g., `['History', 'Art', 'Food', 'Architecture', 'Nightlife', 'Local Gems']`).
    - Each interest will be rendered as a `Chip`. The `variant` will be `"outlined"` by default.
    - When a user clicks a chip, it will be added or removed from the `interests` array in the state.
    - The selected state of the chip will be visually indicated by changing its `variant` to `"filled"`.

### 4. Layout & Styling

- The form controls will be vertically stacked with consistent spacing.
- The overall layout will remain centered within the `Container` as previously implemented.
- All new components will automatically inherit the M3 Blue theme styles. No custom styling is anticipated.
