# Todo App (Expo + TypeScript)

A mobile-first Todo app built with Expo Router, Atomic Design structure, and AsyncStorage persistence.

## Features

- File-based routing with Expo Router
- Atomic component structure (`atoms`, `molecules`, `organisms`, `templates`)
- Todo persistence with `@react-native-async-storage/async-storage`
- Add Task form with category selection
- Native Date picker and Time picker (`@react-native-community/datetimepicker`)
- Completed toggle with immediate persistence

## Tech Stack

- Expo SDK 54
- React Native 0.81
- TypeScript
- Expo Router
- AsyncStorage
- React Native Community DateTimePicker

## Project Structure

```txt
app/
  index.tsx
  add-task.tsx
components/
  atoms/
  molecules/
  organisms/
  templates/
hooks/
  useTodo.ts
lib/
  data/
    todo.ts
  types/
    todo.ts
storage/
  storage.todo.ts
```

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npx expo start
```

3. Run by platform

```bash
npm run ios
npm run android
npm run web
```

## Scripts

```bash
npm run start
npm run ios
npm run android
npm run web
npm run lint
npm run reset-project
```

## Data Flow

- `hooks/useTodo.ts` loads and saves todos to AsyncStorage.
- `storage/storage.todo.ts` handles serialization and normalization.
- `app/index.tsx` reads todo state from hook and passes data to `TodoTemplate`.
- `app/add-task.tsx` saves new tasks and navigates back.

## Notes

- First load seeds default tasks from `lib/data/todo.ts` when storage is empty.
- Shared app types live in `lib/types/todo.ts`.
