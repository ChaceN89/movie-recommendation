# 🎮 Movie Recommendation App

## 📚 Description
A full-stack **movie recommendation application** built using a **monorepo** structure with **Turborepo**. The app allows users to **browse, search, and manage movie recommendations** with an **admin-protected route** for managing movies.

## ✨ Features
- **Frontend:** Next.js (TypeScript, Tailwind CSS, Daisy UI, Fluid Tailwind)
- **Backend:** Express.js with GraphQL API
- **Storage:** AWS S3 for media assets, DynamoDB for movie data
- **Deployment:** Fully hosted on AWS
- **Monorepo Management:** Turborepo for workspace handling
- **Lightweight Local Dev Database:** NoSQL file-based database for initial development
- **Authentication:** Admin-protected routes for movie management
- **Advanced Search & Filtering:** GraphQL-powered search functionality with filters and pagination
- **CI/CD Integration:** AWS-based automated deployment pipeline (planned)

## 💡 Tech Stack
### Frontend
- Next.js (React framework)
- TypeScript
- Tailwind CSS (Daisy UI, Fluid Tailwind for styling)
- @emotion/react & @emotion/styled (Optional CSS-in-JS styling)
- @headlessui/react (Accessible UI components: dropdowns, modals, etc.)

### Backend
- Express.js (REST + GraphQL API)
- GraphQL (Apollo Server)
- AWS S3 (Storage for images/posters)
- AWS DynamoDB (NoSQL database, initially using a local NoSQL store)

### DevOps & Deployment
- AWS EC2 or AWS Lambda (for backend hosting)
- AWS Amplify (for frontend hosting, or alternative AWS service)
- CI/CD pipeline setup (GitHub Actions + AWS integration in progress)

## 📚 Folder Structure
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

### Running the Project
- **Frontend:**
  ```sh
  cd apps/frontend
  pnpm dev
  ```
- **Backend:**
  ```sh
  cd apps/backend
  pnpm dev
  ```
- **Run Everything from Root:**
  ```sh
  pnpm dev
  ```

### Listing Dependencies
- View all dependencies:
  ```sh
  pnpm list
  ```
- View frontend dependencies only:
  ```sh
  pnpm list --filter=frontend
  ```
- View backend dependencies only:
  ```sh
  pnpm list --filter=backend
  ```

## 📈 Build & Testing
### Development Running Commands
- Start the development environment:
  ```sh
  pnpm dev
  ```

### Build Commands
- Build the frontend:
  ```sh
  pnpm --filter frontend build
  ```
- Build the backend:
  ```sh
  pnpm --filter backend build
  ```
- Build everything:
  ```sh
  pnpm build
  ```

### Running Tests
#### Backend Tests
- Run all backend tests:
  ```sh
  pnpm --filter backend test
  ```
- Run a single backend test file:
  ```sh
  pnpm test -- tests/graphql.test.ts
  ```
  ```sh
  pnpm test -- tests/movies.test.ts
  ```

#### Frontend Tests
- Run all frontend tests:
  ```sh
  pnpm --filter frontend test
  ```
- Run a single frontend test file:
  ```sh
  pnpm test src/__tests__/Sample.test.tsx
  ```

## ⚡ Major Libraries Used
### UI & Styling
- **@emotion/react & @emotion/styled** → (Optional) CSS-in-JS styling if needed
- **daisyui** → UI components for Tailwind
- **@headlessui/react** → Accessible UI components (dropdowns, modals, etc.)

### Testing
- **Jest** → Unit & integration testing
- **React Testing Library** → Component testing
- **Supertest** → API testing for GraphQL & Express

## 📂 Notes
This movie recommendation app is a **full-stack application** focused primarily on **DevOps and deployment to AWS**. The project also includes **comprehensive frontend and backend testing setups using Jest**.

## 🏢 Running the Application
- **Frontend:** `./apps/frontend` → `pnpm dev`
- **Backend:** `./apps/backend` → `pnpm dev`
- **Run everything from the root:** `pnpm dev`

## 📂 Managing Dependencies
- **See all dependencies:** `pnpm list`
- **See frontend dependencies:** `pnpm list --filter=frontend`
- **See backend dependencies:** `pnpm list --filter=backend`

## ⚙️ Running Builds
- **Start the frontend build:** `pnpm --filter frontend start`
- **Start the backend build:** `pnpm --filter backend start`
<!-- Could add a command to start both builds at once but currently not implemented -->



adding new packages 
add a tsconfig.json and a package.json 

run in the root -> pnpm run build --filter @movie-recommendation/utils
