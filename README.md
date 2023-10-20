## Getting Started

First, install the packages and run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder and Files structure

To standardize the projects structures this folder and files structure was planned.

app/
  api/ <!-- for api routes -->
    - route.ts
  [locale]/
    example/
       (hooks)/ <!-- the hooks folder needs be wrapped by () to don't create a new route -->
        - useExample.ts
        - ...
      - page.tsx
      - layout.tsx
      - loading.tsx

dictionaries/ <!-- for languages translations -->

services/
  requests/ <!-- all requests will be placed here -->
    - fetchExample.ts
    - fetchExample.types.ts
  - otherServices...

shared/
  components/
    common-components/ <!-- components to be use in many places like buttons -->
      Example/
        hooks/
            - useExample.ts
            - useExample.types.ts
            - useExample.test.ts
        - Example.test.tsx
        - Example.style.ts
        - Example.types.ts
        - Example.tsx
    page-components/ <!-- components to be used only in a specific page -->
      page-name/
        Example/
          hooks/
              - useExample.ts
              - useExample.types.ts
              - useExample.test.ts
          - Example.test.tsx
          - Example.style.ts
          - Example.types.ts
          - Example.tsx

  constants/
  contexts/
  hooks/ <!-- for hooks that will be used in many places -->
  loadings/ <!-- loadings and skeletons for pages and components -->
  types/
  utils/


## Learn More

To learn more about the libs used on the project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind Documentation](https://tailwindcss.com/)
- [Tailwind Variants Documentation](https://www.tailwind-variants.org/)
- [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Next Internationalization Documentation](https://next-intl-docs.vercel.app/)
