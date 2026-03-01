# QA Plan: 01 - Complete Tour Customization Form

**Feature:** Task 1.1 - Complete the Tour Customization Form

**Objective:** To verify that the UI controls for customizing a tour are implemented correctly, are usable, accessible, and function as described in the Tech Spec.

---

### 1. Functional Testing (Positive Cases)

| Test Case ID | Action                                                       | Expected Result                                                                                                               |
| :----------- | :----------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **TC-01**    | Adjust the "Tour Duration" slider.                           | The slider handle moves and the component's state for `duration` is updated.                                                  |
| **TC-02**    | Adjust the "Max Walking Distance" slider.                    | The slider handle moves and the component's state for `distance` is updated.                                                  |
| **TC-03**    | Input a time into the "Ideal Start Time" field.              | The text field accepts the time input and the `startTime` state is updated.                                                   |
| **TC-04**    | Toggle the "Split across multiple days?" switch ON and OFF.  | The switch toggles its state and the `isMultiDay` state is updated accordingly.                                               |
| **TC-05**    | Toggle the "Include a meal break?" switch ON.                | The switch toggles ON, the `includeMeals` state becomes `true`, AND the "Meal Break Duration" slider control becomes visible. |
| **TC-06**    | Toggle the "Include a meal break?" switch OFF.               | The switch toggles OFF, the `includeMeals` state becomes `false`, AND the "Meal Break Duration" slider control is hidden.     |
| **TC-07**    | With meal break ON, adjust the "Meal Break Duration" slider. | The slider handle moves and the `mealDuration` state is updated.                                                              |
| **TC-08**    | Click on an unselected "Interest" chip.                      | The chip's visual style changes to "filled" and its string value is added to the `interests` state array.                     |
| **TC-09**    | Click on a selected "Interest" chip.                         | The chip's visual style changes back to "outlined" and its string value is removed from the `interests` state array.          |

### 2. Functional Testing (Negative Cases)

_(This section will be expanded once validation logic is implemented. For the initial implementation, there are few negative functional cases.)_

| Test Case ID | Action                                                                                     | Expected Result                                                                                                |
| :----------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| **TC-10**    | (Manual) Attempt to enter non-numeric/invalid time text into the "Ideal Start Time" field. | The native `type="time"` input should prevent or handle non-standard text gracefully depending on the browser. |

### 3. Usability & UX Review

This is a qualitative review to be performed by a human (or an agent acting as a human user).

- **Clarity:** Are all labels clear and unambiguous? Is it obvious what each control does?
- **Layout:** Is the vertical flow of the form logical? Is there enough spacing between form controls to prevent a cluttered feeling?
- **Feedback:** Is the visual feedback for interacting with controls (especially the interest chips) immediate and clear?
- **Effort:** Does the form feel easy and quick to fill out?

### 4. Accessibility Review

- **Labels:** Verify that every input control (`Slider`, `TextField`, `Switch`) is programmatically associated with its corresponding `FormLabel`.
- **Keyboard Navigation:**
  - Can you `Tab` to every interactive element (Slider, TextField, Switch, Chip, Button) in a logical order?
  - Can you adjust the `Slider` values using only the arrow keys?
  - Can you toggle the `Switch` and `Chip` components using `Space` or `Enter` keys?
- **Color Contrast:** While the Material 3 theme is designed for accessibility, a visual check should be performed to ensure that all text, including labels and helper text, meets WCAG AA contrast ratios against its background. This will be verified using the Gasoline MCP server's accessibility analysis tools.
