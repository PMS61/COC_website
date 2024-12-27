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
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Environment Setup
1. Copy the environment template:
```bash
cp .env.example .env.local
```

2. Install husky hooks:
```bash
npm run prepare
```

## 📝 Contributing

### Branch Naming Convention
All branches must follow the pattern:
```
username/feature-name
```
Example: `john/add-ai-page`

### Pre-commit Checks
Before committing, ensure:
1. Code is linted and formatted:
```bash
npm run lint
```

2. TypeScript types are valid:
```bash
npm run type-check
```

3. Build succeeds:
```bash
npm run build
```

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
