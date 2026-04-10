# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows a simple unreleased-first format until versioned releases are introduced.

## [Unreleased]

### Added

- Added a project-focused `README.md` with setup, scripts, structure, and verification notes.
- Added a `CHANGELOG.md` to track future repository updates.
- Added a `.gitignore` for generated dependencies, build output, and local macOS files.

### Changed

- Upgraded `react` from `16.13.1` to `19.2.5`.
- Upgraded `react-dom` from `16.13.1` to `19.2.5`.
- Upgraded `react-redux` from `7.2.0` to `9.2.0`.
- Upgraded `redux` from `4.0.5` to `5.0.1`.
- Upgraded `react-scripts` from `3.4.1` to `5.0.1`.
- Updated the application bootstrap to use `createRoot` from `react-dom/client`.
- Updated the test setup to render the app with the current React root API and Redux provider.
- Regenerated `package-lock.json` after reinstalling dependencies.

### Verified

- `CI=true npm test -- --watchAll=false`
- `npm run build`

### Known Issues

- `npm audit` still reports transitive vulnerabilities from the Create React App toolchain. Resolving those fully will likely require moving away from `react-scripts` rather than applying a non-breaking package bump inside this repository.
