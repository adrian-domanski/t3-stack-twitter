# T3 Stack Twitter

A simple project for practice based on the T3 Stack with tRPC, Prisma, Next.js, Zod, Upstash, Clerk, Tailwind, and TypeScript.

## Live Demo 🎉

👉 [[Live Demo](https://bird.kodario.com/)] - preview this project in your browser!

## Installation

1. Clone the repository:

```bash
git clone https://github.com/adrian-domanski/t3-stack-twitter.git
```

2. Navigate to the project directory:

```bash
cd t3-stack-twitter
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:
   
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables to the `.env` file. Refer to the `.env.example` file for the required variables.

5. Generate Prisma client:

```bash
npx prisma generate
```

6. Start the development server:

```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for server-rendered applications.
- [Prisma](https://www.prisma.io) - Database toolkit and Object-Relational Mapping (ORM).
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation.
- [tRPC](https://trpc.io) - TypeScript RPC (Remote Procedure Call) framework.
- [Upstash](https://upstash.com) - Managed Redis hosting service.
- [Clerk](https://clerk.dev) - User authentication and identity management.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework.
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript at scale.

## Scripts

- `npm run build` - Build the Next.js application.
- `npm run dev` - Start the development server.
- `npm run postinstall` - Generate Prisma client.
- `npm run lint` - Run linting checks.
- `npm start` - Start the production server.

## Dependencies

- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs) - Clerk integration for Next.js.
- [@prisma/client](https://www.npmjs.com/package/@prisma/client) - Prisma client library.
- [@t3-oss/env-nextjs](https://www.npmjs.com/package/@t3-oss/env-nextjs) - Helper package for environment variables in Next.js.
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query) - React Query library for data fetching and caching.
- [@trpc/client](https://www.npmjs.com/package/@trpc/client) - tRPC client library.
- [@trpc/next](https://www.npmjs.com/package/@trpc/next) - tRPC integration for Next.js.
- [@trpc/react-query](https://www.npmjs.com/package/@trpc/react-query) - React Query integration for tRPC.
- [@trpc/server](https://www.npmjs.com/package/@trpc/server) - tRPC server library.
- [@upstash/ratelimit](https://www.npmjs.com/package/@upstash/ratelimit) - Upstash Redis-based rate limiter.
- [@upstash/redis](https://www.npmjs.com/package/@upstash/redis) - Upstash Redis client.
- [dayjs](https://www.npmjs.com/package/dayjs) - JavaScript date library.
- [next](https://nextjs.org) - React framework for server-rendered applications.
- [react](https://reactjs.org) - JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html) - Entry point to the DOM and server renderers for React.
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast) - Toast notifications for React.
- [superjson](https://www.npmjs.com/package/superjson) - Library for serializing/deserializing data with circular references.
- [zod](https://www.npmjs.com/package/zod) - TypeScript-first schema validation library.

## Dev Dependencies

- [@types/eslint](https://www.npmjs.com/package/@types/eslint) - Type definitions for ESLint.
- [@types/node](https://www.npmjs.com/package/@types/node) - Type definitions for Node.js.
- [@types/prettier](https://www.npmjs.com/package/@types/prettier) - Type definitions for Prettier.
- [@types/react](https://www.npmjs.com/package/@types/react) - Type definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - Type definitions for React DOM.
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - ESLint plugin for TypeScript.
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - Parser for TypeScript.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes.
- [eslint](https://www.npmjs.com/package/eslint) - Pluggable JavaScript linter.
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) - ESLint configuration for Next.js.
- [postcss](https://www.npmjs.com/package/postcss) - CSS post-processing tool.
- [prettier](https://prettier.io) - Opinionated code formatter.
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) - Prettier plugin for Tailwind CSS.
- [prisma](https://www.prisma.io) - Database toolkit and Object-Relational Mapping (ORM).
- [tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar) - Tailwind CSS plugin for custom scrollbars.
- [tailwindcss](https://tailwindcss.com) - Utility-first CSS framework.
- [typescript](https://www.typescriptlang.org) - Typed JavaScript at scale.

## Credits

This project was built using the [T3 Stack](https://create.t3.gg/), a modern TypeScript-first full-stack framework.

## License

This project is licensed under the [MIT License](LICENSE).
