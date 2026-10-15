const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?w=${width}&q=80`;

export const images = {
  healthyBowl: unsplash("photo-1512621776951-a57141f2eefd", 800),
  kitchenPrep: unsplash("photo-1556910103-1c02745aae4d", 400),
  greenSalad: unsplash("photo-1546069901-ba9599a7e63c", 600),
  weightLoss: unsplash("photo-1490645935967-10de6ba17061", 600),
  highProtein: unsplash("photo-1467003909585-2f8a72700288", 600),
} as const;
