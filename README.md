# Coffee Website

A simple website about coffee built with Vite and React.

## Features

- Home page
- Coffee types information
- Recipes
- History of coffee

## Модель автоматизации качества и эффективности (RCD)

Проект использует модель Run-Change-Disrupt для баланса между стабильностью, улучшениями и инновациями.

- **Run (70%)**: Стабильность - линтинг, тесты, CI/CD.
- **Change (20%)**: Улучшения - рефакторинг, новые фичи.
- **Disrupt (10%)**: Инновации - эксперименты, новые технологии.

См. [model.md](model.md) для подробностей.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run test`: Run tests
- `npm run format`: Format code with Prettier
- `npm run ci`: Run lint, test, and build

## Ссылка на вход автоматизации

Для запуска полной автоматизации качества и эффективности используйте задачу VS Code: [Run CI Pipeline](command:workbench.action.tasks.runTask?args=Run%20CI%20Pipeline)

Или выполните в терминале: `npm run ci`

## Build

To build for production:
```
npm run build
```

## Preview

To preview the production build:
```
npm run preview
```