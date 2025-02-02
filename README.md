# 🎮 Movie Recommendation App

## 📚 Description
A full-stack **movie recommendation application** built using a **monorepo** structure with **Turborepo**. The app allows users to **browse, search, and manage movie recommendations** with an **admin-protected route** for managing movies.

---

## 📖 Table of Contents
- [Project Overview](#🚀-project-overview)
  - [Features & Tech Stack](#features--tech-stack)
  - [Folder Structure](#📁-folder-structure)
- [Installation & Development](#🔧-installation--development)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
  - [Running the Project in Development Mode](#running-the-project-in-development-mode)
- [Testing](#🧪-testing)
- [Building & Starting the Application](#📦-building--starting-the-application)
- [Helpful Commands](#🔧-helpful-commands)
- [Packages](#📦-packages)
- [References](#📚-references)

---

## 🚀 Project Overview

### Features & Tech Stack
#### Frontend
- **Next.js** (React framework)
- **TypeScript**
- **Tailwind CSS** (Daisy UI, Fluid Tailwind for styling)
- **@emotion/react & @emotion/styled** (Optional CSS-in-JS styling)
- **@headlessui/react** (Accessible UI components: dropdowns, modals, etc.)

#### Backend
- **Express.js** (REST + GraphQL API)
- **GraphQL** (Apollo Server)
- **AWS S3** (Storage for images/posters)
- **AWS DynamoDB** (NoSQL database, initially using a local NoSQL store)

#### DevOps & Deployment
- **AWS EC2 or AWS Lambda** (for backend hosting)
- **AWS Amplify** (for frontend hosting, or alternative AWS service)
- **CI/CD pipeline setup** (GitHub Actions + AWS integration in progress)

### 📁 Folder Structure
```
/movie-recommendation-app/
├── apps/
│   ├── frontend/ (Next.js app)
│   ├── backend/ (Express + GraphQL backend)
│
├── packages/
│   ├── ui/ (Reusable UI components)
│   ├── utils/ (Shared utilities)
│   ├── db/ (Shared database logic)
│
├── pnpm-workspace.yaml (Monorepo workspace config)
├── turbo.json (Turborepo tasks configuration)
├── README.md (This file)
```

---

## 🔧 Installation & Development
### Prerequisites
- **Node.js** (Latest LTS recommended)
- **pnpm** (Monorepo package manager)
- **AWS CLI** (For deployment, if using AWS services)

### Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-recommendation-app.git
   ```
2. Navigate to the project root and install dependencies:
   ```sh
   cd movie-recommendation-app
   pnpm install
   ```

### Running the Project in Development Mode
- **Frontend:**
  ```sh
  pnpm --filter frontend dev
  ```
- **Backend:**
  ```sh
  pnpm --filter backend dev
  ```
- **Run Everything from Root:**
  ```sh
  pnpm dev
  ```

### Environment Variables
- The `.env.example` file contains required environment variable names with dummy data.
- `NODE_ENV` is determined by the running command:
  - `pnpm dev` → `NODE_ENV=development`
  - `pnpm build` and `pnpm start` → `NODE_ENV=production`
- The `utils/env` package handles loading the correct `.env` file based on `NODE_ENV`.

---

## 🧪 Testing
### Running Tests
#### Backend Tests
```sh
pnpm --filter backend test
```
- Run a single test file:
  ```sh
  pnpm test -- tests/graphql.test.ts
  ```

#### Frontend Tests
```sh
pnpm --filter frontend test
```
- Run a single test file:
  ```sh
  pnpm test src/__tests__/Sample.test.tsx
  ```

---

## 📦 Building & Starting the Application
### Building
- **Build everything:**
  ```sh
  pnpm build
  ```
- **Build frontend:**
  ```sh
  pnpm --filter frontend build
  ```
- **Build backend:**
  ```sh
  pnpm --filter backend build
  ```

### Starting the Application
- **Start frontend build:**
  ```sh
  pnpm --filter frontend start
  ```
- **Start backend build:**
  ```sh
  pnpm --filter backend start
  ```
- **Start everything:**
  ```sh
  pnpm start
  ```

---

## 🔧 Helpful Commands
### List Dependencies
- View all dependencies:
  ```sh
  pnpm list
  ```
- View frontend dependencies:
  ```sh
  pnpm list --filter=frontend
  ```
- View backend dependencies:
  ```sh
  pnpm list --filter=backend
  ```

### Clean Build Artifacts
```sh
rm -rf node_modules .turbo .next dist
pnpm install
```

---

## 📦 Packages
### Managing Packages
- **Building a Package:**
  ```sh
  pnpm build --filter @movie-recommendation/ui
  ```
- **Adding a Package to an App:**
  ```sh
  pnpm add @movie-recommendation/ui --workspace --filter frontend
  ```

#### Example of Installed Packages in `frontend/package.json`:
```json
"dependencies": {
  "@movie-recommendation/ui": "workspace:^",
  "@movie-recommendation/utils": "workspace:^"
}
```

---

## 📚 References
- [Turborepo Documentation](https://turbo.build/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [GraphQL Documentation](https://graphql.org/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
