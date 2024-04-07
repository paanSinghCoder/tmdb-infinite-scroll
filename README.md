### Infinite scroll with TMDB API

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

- Logic for infinite scroll can be found in `useFetch.hook.tsx` custom hook.
- React.memo for controlling Movie card render.
- Suspence for lazy loading component.
- Typescript for types.
- Structured code.
- Meaningful folder and file naming convention - `[NAME].[TYPE].[EXTENSION]`.
- Deployed on Vercel.
- Minimal and pixel perfect design.
- Error and loading state handling.
- Prettier for code formtting.
- Tailwind for styling.
- `.env.local` file for secret.
- Conventional commit messages.
- Add some types using jest and React-Testing-Library.
- Layout file to keep Navbar constant on route changes.
