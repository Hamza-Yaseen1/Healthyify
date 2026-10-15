# healthy-meals

Healthyify — a single-page marketing landing site for a healthy meal-delivery
service, built with Expo, React Native, and NativeWind (Tailwind CSS).

## Stack

- Expo SDK 57 / React Native 0.86 / React 19
- NativeWind v4 (Tailwind CSS for React Native)
- TypeScript (strict)
- Expo Router is **not** used; this is a single page with in-page scroll
  navigation (see `AGENTS.md`).

## Features

- Responsive landing page with meal plans, testimonials, FAQs, and pricing.
- Pricing cards for three monthly plans, plus a promotional image card.
- Pricing cards keep a consistent minimum height and adapt from a single
  column on narrow screens to multiple columns on wider screens. Cards lift
  slightly on hover where supported and provide press feedback on touch.
- Reusable Unsplash image URLs are defined in `src/data/images.ts`.

## Getting started

```bash
npm install
npx expo start
```

Then open the app in a development build or Expo Go. Other scripts:

```bash
npm run android     # start on Android
npm run ios         # start on iOS
npm run web         # start on web
```

## Quality checks

```bash
npm run lint        # eslint (expo config)
npm run typecheck   # tsc --noEmit
npm test            # jest (jest-expo)
```

`npx expo-doctor` diagnoses dependency and config issues. Use
`npx expo install <package>` (never `npm install`) to add dependencies so
SDK-compatible versions are resolved.

## Project structure

```
src/
  components/   Landing-page sections and reusable UI components
  data/         Static testimonials and image URLs
  screens/      HomeScreen and NotFoundScreen
  theme/        Design-token palette
```

## Configuration

- App config: `app.json` (scheme, icons, splash, plugins).
- Design tokens: `tailwind.config.js`; the component-facing palette mirrors
  them in `src/theme/colors.ts`.

## License

MIT — see `LICENSE`.
