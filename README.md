# COC Landing Page

A modern landing page for COC (Community of Coders) built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/SharanRP/COC_Landing.git
cd COC_Landing
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
# or with Docker
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Docker (optional)

### Environment Setup
1. Copy the environment template:
```bash
cp .env.example .env.production
```

2. Install husky hooks:
```bash
npm run prepare
git config core.hooksPath .husky
```

## 🐳 Docker

### Build and Run
```bash
docker compose up --build
```

### Environment Variables
Required in `.env.production`:
```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
POSTHOG_KEY=your_key
POSTHOG_HOST=your_host
```

## 📝 Contributing

### Strict Git Enforcement
All commits and branches are strictly enforced through:
- Local git hooks (husky)
- Server-side hooks
- GitHub Actions
- GUI client configurations

### Branch Naming Convention
All branches must follow the pattern:
```
username/feature-name
```
Example: `john/add-ai-page`

Enforcement:
- Pre-receive hooks
- GitHub Actions
- Local git hooks
- No force pushes allowed

### Pre-commit Checks
Before committing, the following are automatically enforced:
1. Code linting and formatting
2. TypeScript type checking
3. Successful build
4. Branch name validation
5. Commit message format

### Commit Message Format
Follow the conventional commits specification:
```
type(scope): description

Examples:
feat(ai-page): add machine learning section
fix(navbar): resolve mobile menu overlap
docs(readme): update installation steps
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

### Pull Request Process
1. Create branch following naming convention
2. Make changes and commit following guidelines
3. Push changes and create PR to `develop` branch
4. Ensure all checks pass
5. Request review

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Check code style
- `npm run type-check` - Verify TypeScript
- `npm run prepare` - Install husky hooks

## 🏗️ Project Structure

```
├── app/                # Next.js pages
├── components/         # React components
├── lib/               # Utilities and helpers
├── public/            # Static assets
└── styles/            # Global styles
```

## 🔐 Commit Hooks

The project uses husky for git hooks:
- Pre-commit: Runs linting, type checking, and build
- Commit-msg: Validates commit message format and branch naming

## 📚 Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Husky
- Commitlint

## 📄 License

This project is licensed under the MIT License.
