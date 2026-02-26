# Todo App (Expo + TypeScript)

A mobile-first Todo app built with Expo Router, Atomic Design structure, and AsyncStorage persistence.

## Features

- File-based routing with Expo Router
- Atomic component structure (`atoms`, `molecules`, `organisms`, `templates`)
- Todo persistence with `@react-native-async-storage/async-storage`
- Add Task form with category selection
- Native Date picker and Time picker (`@react-native-community/datetimepicker`)
- Notes field in Add Task and Task Detail
- Task detail screen (`/task/[id]`)
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
  _layout.tsx
  index.tsx
  add-task.tsx
  task/
    [id].tsx
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
    index.ts
    todo.ts
storage/
  storage.todo.ts
constants/
  theme.ts
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

- `hooks/useTodo.ts` hydrates todos on focus and persists changes.
- `storage/storage.todo.ts` handles AsyncStorage read/write + data normalization.
- `app/index.tsx` acts as page container and passes state/actions to `TodoTemplate`.
- `app/add-task.tsx` handles add-task submit side effects (save + feedback + navigation).
- `app/task/[id].tsx` loads selected task and passes it to `TodoDetailTemplate`.

## Notes

- First load seeds default tasks from `lib/data/todo.ts` when storage is empty.
- Shared app types live in `lib/types/todo.ts`.
- `templates` are layout-level UI; route logic stays in `app/*` pages.
