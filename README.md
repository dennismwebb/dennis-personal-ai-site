# dennis-ai-site

Next.js frontend for Dennis's personal AI website — featuring an interactive avatar, real-time chat UI, and a polished portfolio experience.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

---

## Purpose

This is the **frontend application** for the Dennis AI personal website — a showcase of software engineering expertise, built as an AI-native experience. Visitors interact with an intelligent avatar that can discuss Dennis's professional background, technical skills, projects, and interests in real time.

### Highlights

- 🤖 **AI Chat Interface** — Conversational UI with streaming responses, typing indicators, and message history
- 🧑‍💻 **Interactive Avatar** — Animated persona that gives the site a distinctive, personal feel
- 📄 **Portfolio & About** — Professional background, project showcases, and skills presented dynamically
- ⚡ **Modern Stack** — Next.js App Router, React Server Components, TypeScript, Tailwind CSS
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile viewports
- ♿ **Accessible** — WCAG 2.1 AA compliant, keyboard navigable, screen reader friendly

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────────┐
│                dennis-ai-site                     │
│                                                          │
│  ┌────────────────────────────────────────────────────┐   │
│  │                   App Router                       │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │  Home /  │  │  About   │  │  Chat Interface  │  │   │
│  │  │  Landing │  │  Page    │  │  (Client)        │  │   │
│  │  └──────────┘  └──────────┘  └────────┬─────────┘  │   │
│  └───────────────────────────────────────┼────────────┘   │
│                                          │                │
│  ┌───────────────────────────────────────▼────────────┐   │
│  │                 Components                         │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │  Avatar  │  │  Chat    │  │  UI Primitives   │  │   │
│  │  │  Engine  │  │  Window  │  │  (Design System) │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  └───────────────────────────────────────┬────────────┘   │
│                                          │                │
│  ┌───────────────────────────────────────▼────────────┐   │
│  │                Services / Hooks                    │   │
│  │  ┌──────────────┐  ┌──────────┐  ┌─────────────┐  │   │
│  │  │  Chat API    │  │  WebSocket│  │  State      │  │   │
│  │  │  Client      │  │  Hook     │  │  Management │  │   │
│  │  └──────────────┘  └──────────┘  └─────────────┘  │   │
│  └────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
          │                         │
          ▼  REST / WebSocket       ▼
┌─────────────────────┐    ┌───────────────┐
│  dennis-ai-backend  │    │  Static Assets│
│  (.NET 8 API)       │    │  (CDN)        │
└─────────────────────┘    └───────────────┘
```

---

## Repository Structure

```
dennis-ai-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── chat/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── avatar/
│   │   │   ├── Avatar.tsx
│   │   │   ├── AvatarAnimations.tsx
│   │   │   └── AvatarContainer.tsx
│   │   ├── chat/
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── MessageBubble.tsx
│   │   │   ├── MessageInput.tsx
│   │   │   ├── TypingIndicator.tsx
│   │   │   └── ChatHistory.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Modal.tsx
│   │       └── Skeleton.tsx
│   ├── hooks/
│   │   ├── useChat.ts
│   │   ├── useWebSocket.ts
│   │   ├── useAvatar.ts
│   │   └── useMediaQuery.ts
│   ├── services/
│   │   ├── chatApi.ts
│   │   └── websocketClient.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── types/
│   │   ├── chat.ts
│   │   └── api.ts
│   └── styles/
│       └── tokens.css
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── tests/
│   ├── components/
│   ├── hooks/
│   └── e2e/
│       └── chat.spec.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── Dockerfile
├── .env.example
├── .eslintrc.json
├── .prettierrc
└── README.md
```

---

## Prerequisites

| Tool | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org/) | ≥ 20 LTS | Runtime |
| [pnpm](https://pnpm.io/) | ≥ 9.x | Package manager (preferred) |
| [Docker](https://www.docker.com/) | ≥ 24.x | Containerized builds (optional) |

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/dennismwebb/dennis-ai-site
cd dennis-ai-site
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_WS_URL=ws://localhost:5000/hubs/chat

# Site metadata
NEXT_PUBLIC_SITE_TITLE=Dennis AI
NEXT_PUBLIC_SITE_DESCRIPTION=Personal AI-powered portfolio

# Analytics (optional)
NEXT_PUBLIC_GA_ID=
```

### 4. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Full-stack local development

For the complete experience with the AI backend, use Docker Compose from [dennis-ai-infra](https://github.com/dennismwebb/dennis-ai-infra):

```bash
cd ../dennis-ai-infra/docker
docker compose up -d
```

This starts the frontend, backend, vector database, and all supporting services together.

---

## Development Workflow

### Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with hot reload |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Auto-fix linting issues |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run unit tests (Vitest) |
| `pnpm test:e2e` | Run end-to-end tests (Playwright) |
| `pnpm type-check` | TypeScript type checking |

### Component Development

The project uses a component-driven architecture:

- **`components/ui/`** — Reusable design system primitives (Button, Card, Modal, etc.)
- **`components/chat/`** — Chat-specific components (window, messages, input, indicators)
- **`components/avatar/`** — Avatar rendering and animation logic
- **`components/layout/`** — Page structure (header, footer, navigation)

### Key Patterns

- **React Server Components** for static content (About, Projects) — zero client JS
- **Client Components** for interactive features (Chat, Avatar) — explicitly marked with `'use client'`
- **Custom hooks** (`useChat`, `useWebSocket`) encapsulate API communication and state
- **Tailwind CSS** with design tokens in `styles/tokens.css` for consistent theming

### Chat Flow

```
User types message
    │
    ▼
ChatWindow → useChat hook → chatApi.ts
    │                           │
    │                    POST /api/chat
    │                    or WebSocket
    │                           │
    ▼                           ▼
TypingIndicator          Backend streams response
    │                           │
    ▼                           ▼
MessageBubble ◄──── Tokens arrive incrementally
    │
    ▼
Avatar reacts to response context
```

---

## Testing

### Unit Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test -- --watch

# Coverage report
pnpm test -- --coverage
```

### End-to-End Tests

```bash
# Install Playwright browsers (first time)
pnpm exec playwright install

# Run E2E tests
pnpm test:e2e

# Run with UI
pnpm test:e2e -- --ui
```

---

## Deployment

### Docker

```bash
# Build production image
docker build -t dennis-ai-site:latest .

# Run
docker run -p 3000:3000 --env-file .env.production dennis-ai-site:latest
```

### Static Export (Optional)

If hosting on a static CDN without Node.js:

```bash
pnpm build
# Output in .next/ or out/ depending on config
```

### Environment-Specific Configuration

| Variable | Dev | Staging | Production |
|---|---|---|---|
| `NEXT_PUBLIC_API_URL` | `localhost:5000` | `api.staging.dennisai.dev` | `api.dennisai.dev` |
| `NEXT_PUBLIC_WS_URL` | `ws://localhost:5000/hubs/chat` | `wss://api.staging.dennisai.dev/hubs/chat` | `wss://api.dennisai.dev/hubs/chat` |
| `NODE_ENV` | `development` | `production` | `production` |

### CI/CD

Build and deployment pipelines are managed in [dennis-ai-infra](https://github.com/dennismwebb/dennis-ai-infra). The frontend pipeline:

1. Installs dependencies (`pnpm install --frozen-lockfile`)
2. Runs linting and type checks
3. Executes unit and E2E tests
4. Builds the production Docker image
5. Pushes to the container registry
6. Deploys to the target environment (Kubernetes / Container Apps)

---

## Performance

- **Core Web Vitals** optimized — LCP, FID, CLS targets met
- **Image optimization** via `next/image` with automatic format selection and lazy loading
- **Font optimization** via `next/font` with subsetting and preloading
- **Code splitting** — automatic per-route and component-level splitting
- **Streaming SSR** for initial page loads with Suspense boundaries

---

## Accessibility

- Semantic HTML with proper heading hierarchy and landmark regions
- ARIA attributes on interactive components (chat input, modal, navigation)
- Keyboard navigation for all interactive elements
- Reduced motion support via `prefers-reduced-motion` media query
- Color contrast ratios meet WCAG 2.1 AA standards
- Screen reader announcements for chat messages and avatar state changes

---

## Related Repositories

| Repository | Description |
|---|---|
| [dennis-ai-backend](https://github.com/dennismwebb/dennis-ai-backend) | .NET 8 API — AI agent orchestration, services |
| [dennis-ai-data](https://github.com/dennismwebb/dennis-ai-data) | AI data assets — prompts, embeddings, knowledge base |
| [dennis-ai-infra](https://github.com/dennismwebb/dennis-ai-infra) | Infrastructure-as-code — Terraform, K8s, CI/CD |

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and proprietary. All rights reserved.
