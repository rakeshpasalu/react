# React Redux Counter Demo

This repository contains a small counter application built with React and Redux. It is useful as a lightweight example of state management with a shared store, action-driven updates, and a simple UI for mutating and reviewing state.

## Features

- Increment and decrement the counter
- Add or subtract `5` from the current value
- Store snapshot values from the Redux store
- Delete stored results from the history list

## Tech Stack

- React `19.2.5`
- React DOM `19.2.5`
- React Redux `9.2.0`
- Redux `5.0.1`
- Create React App scripts `5.0.1`

## Getting Started

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm start
```

The app runs locally at [http://localhost:3000](http://localhost:3000).

## Available Scripts

### `npm start`

Starts the development server.

### `npm test`

Runs the Jest test suite.

### `npm run build`

Creates an optimized production build in the `build/` directory.

## Project Structure

```text
.
|-- public/
|   `-- index.html
|-- src/
|   |-- components/
|   |-- containers/
|   `-- store/
|-- CHANGELOG.md
|-- package.json
`-- README.md
```

## Recent Update

The application dependencies were refreshed to current major versions and the app entry points were updated to use the modern React root API. The test setup was also adjusted so the suite continues to pass cleanly on the upgraded runtime.

## Verification

The current project state has been verified with:

```bash
CI=true npm test -- --watchAll=false
npm run build
```

## Notes

The project still uses `react-scripts`, so some remaining `npm audit` findings come from transitive Create React App dependencies rather than from the app code in this repository.
