# Movie Recommendation App

## Description
A full-stack movie recommendation application built using a **monorepo** structure with **Turborepo**. The app allows users to browse, search, and manage movie recommendations. It includes an **admin-protected route** for managing movies, a **browse page**, and individual **movie detail pages**.

## Features
- **Frontend:** Next.js (TypeScript, Tailwind CSS, Daisy UI, Fluid Tailwind)
- **Backend:** Express.js with GraphQL API
- **Storage:** AWS S3 for media assets, DynamoDB for movie data
- **Deployment:** Fully hosted on AWS
- **Monorepo Management:** Turborepo for workspace handling
- **Lightweight Local Dev Database:** NoSQL file-based database for initial development
- **Authentication:** Admin-protected routes for movie management
- **Advanced Search & Filtering:** GraphQL-powered search functionality with filters and pagination
- **CI/CD Integration:** AWS-based automated deployment pipeline (planned)

## Tech Stack
### Frontend
- Next.js (React framework)
- TypeScript
- Tailwind CSS (Daisy UI, Fluid Tailwind for styling)
- @emotion/react & @emotion/styled (Optional) CSS-in-JS styling if needed
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

## Folder Structure
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

## Installation & Development
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

## Build & Testing
### Development Running Commands
- Start the development environment:
  ```sh
  pnpm dev
  ```

### Build Commands
- Build the frontend:
  ```sh
  cd apps/frontend
  pnpm build
  ```
- Build the backend:
  ```sh
  cd apps/backend
  pnpm build
  ```
- Build everything:
  ```sh
  pnpm build
  ```

### Test & Validate Build
- Run tests for frontend:
  ```sh
  cd apps/frontend
  pnpm test
  ```
- Run tests for backend:
  ```sh
  cd apps/backend
  pnpm test
  ```
- Run tests for all workspaces:
  ```sh
  pnpm test
  ```





------------

# Notes
A movie reccomendation application. This is a full stack application mainly focused on dev Ops and deplopyment to AWS

is a mono repo using turbo repo 


nextjs
express and grpah QL 
dynamoDB 

Some libraires I have installed
@emotion/react & @emotion/styled → (Optional) CSS-in-JS styling if needed
daisyui → UI components for Tailwind
@headlessui/react → Accessible UI components (dropdowns, modals, etc.)



running the frontend  ./apps/frontend - > pnpm dev
running the backend ./apps/backend -> pnpm dev
or run everything in root - > pnpm dev



pnpm list -> see all dependancie s
 pnpm list --filter=frontend   -> see frontend dependances only
 pnpm list --filter=backend   -> see backend dependances only



running builds 
pnpm --filter frontend start
pnpm --filter backend start

<!-- could add command to start both builds at once but i don't currentl;y have that  -->


