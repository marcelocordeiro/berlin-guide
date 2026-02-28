# Git Branching Strategy

This project follows the **Git Flow** branching model. It is a robust model that is well-suited for projects with scheduled release cycles.

## Main Branches

The repository holds two main branches with an infinite lifetime:

-   `main`: This branch contains production-ready code. All code in `main` is deployable. The `main` branch is tagged at every release (e.g., `v1.0.0`, `v1.1.0`).
-   `develop`: This is the primary development branch where all completed features are merged. It reflects the state of the next planned release. Daily development work is **not** done directly on this branch.

## Supporting Branches

Alongside the main branches, we use several types of supporting branches for development, releases, and maintenance. These branches have a limited lifetime.

### 1. Feature Branches

-   **Convention:** `feature/<feature-name>` (e.g., `feature/tour-customization-form`)
-   **Branched from:** `develop`
-   **Merged back into:** `develop`

Feature branches are used to develop new features for the upcoming or a future release. When a feature is complete, it gets merged back into the `develop` branch.

### 2. Release Branches

-   **Convention:** `release/<version>` (e.g., `release/v1.0.0`)
-   **Branched from:** `develop`
-   **Merged back into:** `main` and `develop`

Once the `develop` branch is nearing a state ready for a release, a release branch is created. No new features are added to this branch, only bug fixes, documentation generation, and other release-oriented tasks. Once it's ready, the release branch is merged into `main` and tagged with a version number. It must also be merged back into `develop` to ensure that any critical fixes made on the release branch are incorporated into future development.

### 3. Hotfix Branches

-   **Convention:** `hotfix/<fix-name>` (e.g., `hotfix/fix-login-bug`)
-   **Branched from:** `main`
-   **Merged back into:** `main` and `develop`

Hotfix branches are used to address urgent issues in the production version (`main`). A hotfix branch is created from the corresponding tag on the `main` branch that marks the production version. Once the fix is complete, it is merged into both `main` (and a new version is tagged) and `develop` to ensure the fix is included in the next release.
