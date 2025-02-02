# 📦 Packages

This project contains shared packages used across the **Movie Recommendation App** monorepo. Each package serves a specific purpose to keep the application modular and maintainable.

## 📖 Table of Contents

- [UI Package](#🎨-ui-package)
- [Utils Package](#🔧-utils-package)
- [Importing Packages](#📥-importing-packages)

---

## 🎨 UI Package

The `@movie-recommendation/ui` package provides reusable **UI components** used in the frontend application.

### 🔹 Main Components

#### **DevTools**

- Displays **Tailwind Breakpoints** and **Dark Mode Toggle** when in development mode.
- Useful for debugging and UI responsiveness testing.
- Option for noDarkMode prop to only use the tailwind break points component

#### **HelloWorld & GreetComponent**

- Simple test components to verify the package is working.
- `GreetComponent` ensures the **utils package** is correctly imported and used.

### 🔹 Import Statements

```ts
import { HelloWorld } from "@movie-recommendation/ui";
import { GreetComponent } from "@movie-recommendation/ui";
import { DevTools } from "@movie-recommendation/ui";
```

---

## 🔧 Utils Package

The `@movie-recommendation/utils` package provides **helper functions** for logging, formatting, and environment variable management.

### 🔹 Main Functions

#### **Logging & Formatting**

- `logDebug(message: string)`: Logs debug messages in development mode.
- `greet(name: string)`: Returns a greeting string.
- `capitalize(word: string)`: Capitalizes the first letter of a word.

#### **Environment Management**

- `getEnv(key: string, fallback?: string)`: Retrieves environment variables safely for both frontend and backend.
- Automatically loads the correct `.env` file based on `NODE_ENV`.

### 🔹 Import Statements

```ts
import { logDebug } from "@movie-recommendation/utils";
import { greet } from "@movie-recommendation/utils";
import { capitalize } from "@movie-recommendation/utils";
import { getEnv } from "@movie-recommendation/utils";
```

---

## 📥 Importing Packages

To use shared packages in your applications, follow these steps:

### **1️⃣ Configure TypeScript Paths**
In your application's `tsconfig.json`, add the following paths:

```json
"paths": {
  "@movie-recommendation/utils": ["../../packages/utils/src"]
}
```

This ensures TypeScript resolves the package correctly in development.

### **2️⃣ Install the Package**
There are two ways to add a package to your application:

#### **Option 1: Add to `package.json` Manually**
In your `frontend/package.json` or `backend/package.json`, add the dependency:

```json
"dependencies": {
  "@movie-recommendation/utils": "workspace:^"
}
```
Then run:
```sh
pnpm install
```

#### **Option 2: Use `pnpm add`**
You can also install the package using `pnpm`:
```sh
pnpm add @movie-recommendation/utils --workspace --filter frontend
```

This method ensures the package is correctly linked in the monorepo.


