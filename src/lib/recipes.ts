export const ingredientColors: Record<string, string> = {
  // dark brown
  espresso: "#3c2e1e",

  // chocolate brown
  chocolate: "#3d1f1f",

  // milk white
  milk: "#f9f7f0",

  // milk foam white
  "milk foam": "#f9f7f0",

  // water grey
  water: "#d1d5db",

  // caramel brown
  caramel: "#a67c52",

  // ice cream white
  "ice cream": "#f9f7f0",
};

// recipies without color
export const recipes = [
  {
    name: "Americano",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Water", parts: 4 },
    ],
  },
  {
    name: "Cappuccino",
    ingredients: [
      { name: "Milk Foam", parts: 1 },
      { name: "Milk", parts: 1 },
      { name: "Espresso", parts: 1 },
    ],
  },
  {
    name: "Latte",
    ingredients: [
      { name: "Milk", parts: 2 },
      { name: "Espresso", parts: 1 },
    ],
  },
  {
    name: "Mocha",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Milk", parts: 1 },
      { name: "Chocolate", parts: 1 },
    ],
  },
  {
    name: "Macchiato",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Milk Foam", parts: 2 },
    ],
  },
  {
    name: "Flat White",
    ingredients: [
      { name: "Milk", parts: 2 },
      { name: "Espresso", parts: 2 },
    ],
  },
  {
    name: "Caramel Macchiato",
    ingredients: [
      { name: "Caramel", parts: 1 },
      { name: "Espresso", parts: 2 },
      { name: "Milk", parts: 3 },
    ],
  },
  {
    name: "Cortado",
    ingredients: [
      { name: "Milk Foam", parts: 1 },
      { name: "Espresso", parts: 2 },
    ],
  },
  {
    name: "Affogato",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Ice Cream", parts: 1 },
    ],
  },
];
