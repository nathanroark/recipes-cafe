export const ingredientColors: Record<string, string> = {
  // dark brown
  espresso: "#3c2e1e",

  // chocolate brown
  chocolate: "#3d1f1f",

  // milk white
  milk: "#f9f7f0",

  // milk foam white
  "milk foam": "#f9f7f0",

  // water very pale blue
  water: "#d4e9f2",

  // caramel brown
  caramel: "#a67c52",
};

// recipies without color
export const recipes = [
  {
    name: "Americano",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Water", parts: 1 },
    ],
  },
  {
    name: "Cappuccino",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Milk", parts: 1 },
      { name: "Milk Foam", parts: 1 },
    ],
  },
  {
    name: "Latte",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Milk", parts: 2 },
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
      { name: "Milk Foam", parts: 1 },
    ],
  },
  {
    name: "Flat White",
    ingredients: [
      { name: "Espresso", parts: 1 },
      { name: "Milk", parts: 2 },
    ],
  },
];
