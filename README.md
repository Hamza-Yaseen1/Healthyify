# Healthyify

Healthyify is a responsive healthy meal-delivery landing page built with Expo, React Native, TypeScript, and NativeWind.

**Live Demo:** [https://healthyify.vercel.app](https://healthyify.vercel.app)

## Run locally

### Requirements

- Node.js and npm
- Git

### Setup

```bash
git clone https://github.com/Hamza-Yaseen1/Healthyify.git
cd Healthyify
npm ci
```

### Start the app

To run the web version locally:

```bash
npm run web
```

To start Expo and choose a target, or open the app on a device with Expo Go:

```bash
npm start
```

You can also start directly on Android or iOS:

```bash
npm run android
npm run ios
```

Running on Android or iOS requires the corresponding development tools, or a compatible Expo Go setup.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
```

## Project structure

```text
src/
  components/   Landing-page sections and UI components
  data/         Static testimonials and image URLs
  screens/      App screens
  theme/        Design tokens
```

## License

MIT. See [LICENSE](LICENSE).
